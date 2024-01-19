import HomeIcon from '../components/icons/HomeIcon'
import Card from '../components/Card'
import DataItem from '../components/DataItem'

interface DataCardsProps {
  orderCount: number
}

function DataCards({ orderCount }: DataCardsProps) {
  return (
    <><h1 className='flex items-center gap-5 text-center'>
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
          <DataItem title='Pedidos totales' value={orderCount} percentage={8.2} positive={true} />
        </Card>
        <Card>
          <DataItem title='Ingresos totales' value='1,783' unit='Bs' percentage={8.2} positive={true} />
        </Card>
      </div></>
  )
}

export default DataCards