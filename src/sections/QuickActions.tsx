import Card from '../components/Card'
import MenuIcon from '../components/icons/MenuIcon'
import ClientRow from '../components/ClientRow'
import Dropdown from '../components/Dropdown'
import CustomInputNumber from '../components/CustomInputNumber'
import CustomInputUnit from '../components/CustomInputUnit';
import { items } from '../utils/data'
import { FormEvent, useEffect, useState } from 'react'
import { useClients } from '../hooks/useClients'
import Client from '../models/Client'

interface QuickActionsProps {
  createOrder: (order: { client: string, item: string, quantity: number, price: number }) => void
}

function QuickActions({ createOrder }: QuickActionsProps) {
  const { clients, loading, getClients } = useClients();
  const [client, setClient] = useState<Client | undefined>(undefined);
  const [item, setItem] = useState("");
  const [quantity, setQuantity] = useState(0);
  const [price, setPrice] = useState(0);

  useEffect(() => {
    if (!clients.length) getClients()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault()
    console.log('submit', e, client, item, quantity, price, buttonDisabled)
    await createOrder({ client: client?.name ?? '', item, quantity, price });
  }

  const buttonDisabled = (!client || !item || !quantity || !price);

  return (
    <>
      <h2 className='mt-8 text-lg font-semibold'>Acciones rápidas</h2>
      <div className='flex flex-wrap gap-5 mt-4'>
        <Card>
          <div className='flex items-center'>
            <p className='text-base font-semibold'>Clientes <span className='text-xs font-normal'>Vista rápida</span></p>
            <button className="ml-auto">
              <MenuIcon />
            </button>
          </div>
          <div className='mt-6 space-y-[20px]'>
            {loading ?
              <div className='min-w-[300px] flex justify-center items-center mt-14'>
                <svg className="mx-auto w-20 h-20 mr-3 -ml-1 text-[#1A3D7D] animate-spin" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                  <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle>
                  <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                </svg>
              </div>
              : clients.map((client, index) => {
                return <ClientRow key={index} name={client.name} date={client.date} amount={client.amount} />
              })}
          </div>

        </Card>
        <Card>
          <div className='flex items-center'>
            <p className='text-base font-semibold'>Realizar pedido</p>
            <button className="ml-auto">
              <MenuIcon />
            </button>
          </div>
          <form onSubmit={handleSubmit}>
            <div className='flex flex-col gap-2 mt-6 w-[400px]'>
              <Dropdown onChange={(value) => { setClient(clients[value]) }} placeholder='Cliente' values={clients.map(c => c.name)} width='400px' />
              <Dropdown onChange={(value) => { setItem(items[value]) }} placeholder='Item' values={items} width='400px' />
              <div className='flex gap-4'>
                <CustomInputNumber label='Cantidad' value={quantity} onChange={(value) => { setQuantity(value) }} />
                <CustomInputUnit unit='Bs' value={price} onChange={(value) => { setPrice(value) }} />
              </div>
              <button type='submit' disabled={buttonDisabled} className={`${buttonDisabled ? 'bg-[#717171]' : 'bg-[#367DFD] hover:bg-[#3466c2]'} self-end py-2 px-5 rounded-full font-semibold text-white mt-2 shadow`}>Realizar pedido</button>
            </div>
          </form>
        </Card>
      </div>
    </>
  )
}

export default QuickActions