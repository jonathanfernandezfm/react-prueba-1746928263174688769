import HomeIcon from './icons/HomeIcon'
import Clients from './icons/Clients'
import MapClients from './icons/MapClients'
import Sales from './icons/Sales';
import Invoice from './icons/Invoice';
import Document from './icons/Document';
import Graph from './icons/Graph';
import Pie from './icons/Pie';
import Settings from './icons/Settings';
import { activeColor, inactiveColor } from '../utils/constants';

interface NavIconProps {
  icon: string;
  active: boolean;
}

function NavIcon({ icon, active }: NavIconProps) {

  switch (icon) {
    case 'home':
      return <HomeIcon color={active ? activeColor : inactiveColor} />
    case 'clientes':
      return <Clients color={active ? activeColor : inactiveColor} />
    case 'mapa_clientes':
      return <MapClients color={active ? activeColor : inactiveColor} />
    case 'distribuidores': // Truco por que no tengo SVG de este icono
      return active ? <img src="./distribuidores-dark.png" alt="" /> : <img src="./distribuidores.png" alt="" />
    case 'ventas':
      return <Sales color={active ? activeColor : inactiveColor} />
    case 'pedidos':
      return <Invoice color={active ? activeColor : inactiveColor} />
    case 'prestamos':
      return <Document color={active ? activeColor : inactiveColor} />
    case 'finanzas':
      return <Graph color={active ? activeColor : inactiveColor} />
    case 'reportes':
      return <Pie color={active ? activeColor : inactiveColor} />
    case 'configuracion':
      return <Settings color={active ? activeColor : inactiveColor} />
    default:
      return <HomeIcon color={active ? activeColor : inactiveColor} />
  }
}

export default NavIcon

// {
//   id: 'home',
//   name: 'Inicio',
//   icon: './graph.svg',
//   selected: true,
// },
// {
//   id: 'clientes',
//   name: 'Clientes',
//   icon: './graph.svg',
//   selected: false,
// },
// {
//   id: 'mapa_clientes',
//   name: 'Mapa de clientes',
//   icon: './graph.svg',
//   selected: false,
// },
// {
//   id: 'distribuidores',
//   name: 'Monitoreo de Distribuidores',
//   icon: './graph.svg',
//   selected: false,
// },
// {
//   id: 'ventas',
//   name: 'Ventas',
//   icon: './graph.svg',
//   selected: false,
// },
// {
//   id: 'pedidos',
//   name: 'Pedidos',
//   icon: './graph.svg',
//   selected: false,
// },
// {
//   id: 'prestamos',
//   name: 'Préstamos',
//   icon: './graph.svg',
//   selected: false,
// },
// {
//   id: 'finanzas',
//   name: 'Finanzas',
//   icon: './graph.svg',
//   selected: false,
// },
// {
//   id: 'reportes',
//   name: 'Reportes',
//   icon: './house.svg',
//   selected: false,
// },
// {
//   id: 'configuracion',
//   name: 'Configuración',
//   icon: './house.svg',
//   selected: false,
// },