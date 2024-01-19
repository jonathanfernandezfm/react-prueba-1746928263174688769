interface ClientProps {
  name: string
  date: string
  amount: number
}

function ClientRow({ name, date, amount }: ClientProps) {
  return (
    <div className='flex items-center gap-4'>
      <img src={`./${name.toLocaleLowerCase().replace(' ', '')}.png`} className=""></img>
      <p className="overflow-hidden max-w-40 text-nowrap overflow-ellipsis">{name}</p>
      <p className="border-[1px] border-[#1A3D7D] text-xs py-[5px] px-5 rounded-xl ml-auto">{date}</p>
      <button className='bg-[#1A3D7D] hover:bg-[#1a305a] text-white font-medium flex items-center justify-center py-[5px] px-5 rounded-xl gap-2 shadow'>
        <img src='./money.svg'></img>
        <span className="text-sm">{amount} Bs.</span>
      </button>
    </div>
  )
}

export default ClientRow