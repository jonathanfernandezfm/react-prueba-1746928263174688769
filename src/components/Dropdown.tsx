import { useState } from "react"

interface DropdownProps {
  placeholder: string
  values: string[]
  width?: string
}

function Dropdown({ placeholder, values, width }: DropdownProps) {
  const [open, setOpen] = useState(false)
  const [selected, setSelected] = useState<number | undefined>(undefined)

  return (
    <div className="relative w-full text-left" style={{ width }}>
      <div>
        <button onClick={() => { setOpen(!open) }} type="button" className="inline-flex justify-between w-full gap-x-1.5 rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50" id="menu-button" aria-expanded="true" aria-haspopup="true">
          {selected !== undefined ? values[selected] : placeholder}
          <svg className="w-5 h-5 -mr-1 text-gray-400" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
            <path fillRule="evenodd" d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z" clipRule="evenodd" />
          </svg>
        </button>
      </div>

      {open && <div className="absolute right-0 z-10 w-full mt-0 origin-top-right bg-white rounded-md shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none" role="menu" aria-orientation="vertical" aria-labelledby="menu-button">
        <div className="py-1" role="none">
          {values.map((value, index) => (
            <button onClick={() => { setSelected(index); setOpen(false) }} className="block w-full h-full px-4 py-2 text-sm text-left text-gray-700" role="menuitem" id="menu-item-0">{value}</button>
          ))}
        </div>
      </div>}
    </div>
  )
}

export default Dropdown