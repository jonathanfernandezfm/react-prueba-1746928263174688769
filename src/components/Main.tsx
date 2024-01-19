import Card from './Card';
import DataItem from './DataItem';
import BarChart from './BarChart';
import HomeIcon from './icons/HomeIcon';
import './Main.css'
import FloatingAlert from './FloatingAlert';
import QuickActions from '../sections/QuickActions';

function Main() {
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

      <QuickActions />
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