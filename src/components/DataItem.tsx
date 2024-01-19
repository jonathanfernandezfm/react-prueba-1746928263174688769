
interface DataItemProps {
  title: string
  value: string | number
  unit?: string
  percentage: number
  positive: boolean
}

function DataItem({ title, value, unit, percentage, positive }: DataItemProps) {
  return (
    <>
      <p className='text-sm font-semibold'>{title}</p>
      <p className='text-[#1A3D7D] text-4xl font-semibold mt-4'>{value} <span className='text-2xl'>{unit}</span></p>
      <p className='mt-3 text-xs'>
        <span className={`font-semibold p-[5px] rounded-xl mr-1 ${positive ? 'bg-[#D5FFD4] text-[#0D970A]' : 'text-[#A1140B] bg-[#FFD4D4]'}`}>+{percentage}%</span>
        En el último mes
      </p>
    </>
  )
}

export default DataItem