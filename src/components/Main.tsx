import Card from './Card';
import BarChart from './BarChart';
import './Main.css'
import FloatingAlert from './FloatingAlert';
import QuickActions from '../sections/QuickActions';
import DataCards from '../sections/DataCards';
import { useEffect } from 'react';
import { useOrders } from '../hooks/useOrders';

function Main() {
  const { orders, count, getOrders, createOrder } = useOrders();

  useEffect(() => {
    if (!orders.length) getOrders()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return (
    <div id="main-section" className='px-6 py-8'>
      <DataCards orderCount={count} />
      <QuickActions createOrder={createOrder} />
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