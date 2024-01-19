import { useState } from 'react';
import './NavPanel.css'
import NavIcon from './NavIcon';

const NavigationPanelButtons = [
  {
    id: 'home',
    name: 'Inicio',
    icon: './graph.svg',
    selected: true,
  },
  {
    id: 'clientes',
    name: 'Clientes',
    icon: './graph.svg',
    selected: false,
  },
  {
    id: 'mapa_clientes',
    name: 'Mapa de clientes',
    icon: './graph.svg',
    selected: false,
  },
  {
    id: 'distribuidores',
    name: 'Monitoreo de Distribuidores',
    icon: './graph.svg',
    selected: false,
  },
  {
    id: 'ventas',
    name: 'Ventas',
    icon: './graph.svg',
    selected: false,
  },
  {
    id: 'pedidos',
    name: 'Pedidos',
    icon: './graph.svg',
    selected: false,
  },
  {
    id: 'prestamos',
    name: 'Préstamos',
    icon: './graph.svg',
    selected: false,
  },
  {
    id: 'finanzas',
    name: 'Finanzas',
    icon: './graph.svg',
    selected: false,
  },
  {
    id: 'reportes',
    name: 'Reportes',
    icon: './house.svg',
    selected: false,
  },
  {
    id: 'configuracion',
    name: 'Configuración',
    icon: './house.svg',
    selected: false,
  },
]

function NavPanel() {
  const [active, setActive] = useState(0)

  return (
    <div id="nav-panel" className="w-[250px] min-w-[250px] bg-[#1A3D7D] text-white h-screen font-semibold text-sm flex flex-col">
      <img src='./smartwater.svg' className="mx-auto py-7"></img>
      <nav>
        <ul className="flex flex-col gap-[8px]">
          {NavigationPanelButtons.map((button, index) => {
            return (
              <li key={button.id}>
                <a href="#" onClick={() => { setActive(index) }} className={`flex items-center gap-4 mx-5 px-4 py-[9px] rounded-md relative ${active === index ? 'bg-white text-black font-bold active' : ''}`}>
                  {/* <img className="w-5 h-5" src={button.icon}></img> */}
                  <NavIcon active={active === index} icon={button.id} />
                  <span>{button.name}</span>
                </a>
              </li>
            );
          })}
        </ul>
      </nav>
      <button className="flex items-center text-black bg-white rounded-md px-5 py-[10px] gap-10 mx-auto mt-auto mb-24">
        <img src='./exit.svg' />
        <span>Salir</span>
      </button>
    </div>
  )
}

export default NavPanel