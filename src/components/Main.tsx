import { useState } from 'react';
import Card from './Card';
import ClientRow from './ClientRow';
import CustomInputNumber from './CustomInputNumber';
import CustomInputUnit from './CustomInputUnit';
import DataItem from './DataItem';
import Dropdown from './Dropdown';
import BarChart from './BarChart';
import HomeIcon from './icons/HomeIcon';
import MenuIcon from './icons/MenuIcon';
import './Main.css'
import FloatingAlert from './FloatingAlert';

function Main() {
  const [quantity, setQuantity] = useState(0)
  const [money, setMoney] = useState(0)

  return (
    <div id="main-section" className='px-6 py-8'>
      <h1 className='flex items-center gap-5 text-center'>
        <HomeIcon color='black' />
        <span className='text-2xl font-bold'>Inicio</span>
      </h1>
      <div className='flex flex-wrap gap-5 mt-4'>
        <Card>
          <DataItem title='Clientes nuevos' value='18' percentage={8.2} positive={true} />
        </Card>
        <Card>
          <DataItem title='Préstamos activos' value='25' percentage={8.2} positive={false} />
        </Card>
        <Card>
          <DataItem title='Préstamos vencidos' value='1,236' percentage={8.2} positive={true} />
        </Card>
        <Card>
          <DataItem title='Ingresos totales' value='1,783' unit='Bs' percentage={8.2} positive={true} />
        </Card>
      </div>

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
            <ClientRow name='Daniela Ayala' date='20/01/2023' amount={100} />
            <ClientRow name='Rubén González' date='20/01/2023' amount={100} />
            <ClientRow name='Mariana Reyes' date='20/01/2023' amount={100} />
            <ClientRow name='Julio Espinoza' date='20/01/2023' amount={100} />
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
            <Dropdown placeholder='Cliente' values={['Daniela Ayala', 'Rubén González', 'Mariana Reyes', 'Julio Espinoza']} width='400px' />
            <Dropdown placeholder='Item' values={['Botellon de 20 Lts', 'Garrafa']} width='400px' />
            <div className='flex gap-4'>
              <CustomInputNumber label='Cantidad' value={quantity} onChange={(value) => { setQuantity(value) }} />
              <CustomInputUnit unit='Bs' value={money} onChange={(value) => { setMoney(value) }} />
            </div>
            <button className='bg-[#367DFD] self-end py-2 px-5 rounded-full font-semibold text-white mt-2 shadow hover:bg-[#3466c2]'>Realizar pedido</button>
          </div>
        </Card>
      </div>
      <div className='mt-8'>
        <Card>
          <div className='flex w-[800px] h-[350px]'>
            <BarChart />
          </div>
        </Card>
      </div>
      <FloatingAlert alert={true} />
    </div>
  )
}

export default Main