interface CustomInputProps {
  value: number
  label: string
  onChange: (value: number) => void
}

function CustomInputNumber({ label, value, onChange }: CustomInputProps) {
  return (
    <div className="inline-flex justify-between w-full gap-x-1.5 rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50">
      <span>{label}</span>
      <div className="flex gap-2">

        <button onClick={() => { onChange(value - 1 > 0 ? value - 1 : 0) }}>
          <img src='./minus.svg'></img>
        </button>
        <input type="number" className="w-10 text-center rounded-md ring-1 ring-inset ring-gray-300" value={value} onChange={(e) => onChange(parseInt(e.target.value))} />
        <button onClick={() => { onChange(value + 1) }}>
          <img src='./plus.svg'></img>
        </button>
      </div>
    </div>
  )
}

export default CustomInputNumber