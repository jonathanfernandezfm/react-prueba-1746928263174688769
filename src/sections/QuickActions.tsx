import Card from '../components/Card'
import MenuIcon from '../components/icons/MenuIcon'
import ClientRow from '../components/ClientRow'
import Dropdown from '../components/Dropdown'
import CustomInputNumber from '../components/CustomInputNumber'
import CustomInputUnit from '../components/CustomInputUnit';
import { items } from '../utils/data'
import { useEffect, useState } from 'react'
import { useClients } from '../hooks/useClients'

function QuickActions() {
  const { clients, loading, getClients } = useClients();
  const [quantity, setQuantity] = useState(0)
  const [money, setMoney] = useState(0)

  useEffect(() => {
    if (!clients.length) getClients()
  }, [])

  console.log(clients, loading)
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
          <div className='flex flex-col gap-2 mt-6 w-[400px]'>
            <Dropdown placeholder='Cliente' values={clients.map(c => c.name)} width='400px' />
            <Dropdown placeholder='Item' values={items} width='400px' />
            <div className='flex gap-4'>
              <CustomInputNumber label='Cantidad' value={quantity} onChange={(value) => { setQuantity(value) }} />
              <CustomInputUnit unit='Bs' value={money} onChange={(value) => { setMoney(value) }} />
            </div>
            <button className='bg-[#367DFD] self-end py-2 px-5 rounded-full font-semibold text-white mt-2 shadow hover:bg-[#3466c2]'>Realizar pedido</button>
          </div>
        </Card>
      </div>
    </>
  )
}

export default QuickActions