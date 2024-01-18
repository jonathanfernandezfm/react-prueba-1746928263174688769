interface CustomInputProps {
  value: number
  unit: string
  onChange: (value: number) => void
}

function CustomInputNumber({ value, unit, onChange }: CustomInputProps) {
  return (
    <div className="flex">
      <input type="number" value={value} onChange={(e) => { onChange(parseInt(e.target.value)) }} className="flex-1 inline-flex justify-between border-r-0 rounded-r-none w-full gap-x-1.5 rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50" />
      <div className="text-[#626262] justify-center items-center inline-flex text-xs font-semibold border-l-0 rounded-l-none gap-x-1.5 rounded-md bg-white px-3 py-2 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50">
        {unit}
      </div>
    </div>
  )
}

export default CustomInputNumber