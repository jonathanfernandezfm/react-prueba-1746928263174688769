import { useState } from 'react';
import HomeIcon from './icons/HomeIcon';
import './NavPanel.css'

const NavigationPanelButtons = [
  {
    name: 'Inicio',
    icon: './graph.svg',
    selected: true,
  },
  {
    name: 'Clientes',
    icon: './graph.svg',
    selected: false,
  },
  {
    name: 'Mapa de clientes',
    icon: './graph.svg',
    selected: false,
  },
  {
    name: 'Monitoreo de Distribuidores',
    icon: './graph.svg',
    selected: false,
  },
  {
    name: 'Ventas',
    icon: './graph.svg',
    selected: false,
  },
  {
    name: 'Pedidos',
    icon: './graph.svg',
    selected: false,
  },
  {
    name: 'Préstamos',
    icon: './graph.svg',
    selected: false,
  },
  {
    name: 'Finanzas',
    icon: './graph.svg',
    selected: false,
  },
  {
    name: 'Reportes',
    icon: './house.svg',
    selected: false,
  },
  {
    name: 'Configuración',
    icon: './house.svg',
    selected: false,
  },
]

function NavPanel() {
  const [active, setActive] = useState(0)

  return (
    <div className="w-[250px] min-w-[250px] bg-[#1A3D7D] text-white h-screen font-semibold text-sm flex flex-col">
      <img src='./smartwater.svg' className="mx-auto py-7"></img>
      <nav>
        <ul className="flex flex-col gap-[8px]">
          {NavigationPanelButtons.map((button, index) => {
            return (
              <li>
                <a href="#" onClick={() => { setActive(index) }} className={`flex items-center gap-4 mx-5 px-2 py-[9px] rounded-md relative ${active === index ? 'bg-white text-black font-bold active' : ''}`}>
                  {/* <img className="w-5 h-5" src={button.icon}></img> */}
                  <HomeIcon active={active === index} />
                  <span>{button.name}</span>
                </a>
              </li>
            );
          })}
        </ul>
      </nav>
      <button className="flex items-center text-black bg-white rounded-md px-5 py-[10px] gap-10 mx-auto mt-auto mb-24">
        <HomeIcon active={true} />
        <span>Salir</span>
      </button>
    </div>
  )
}

export default NavPanel