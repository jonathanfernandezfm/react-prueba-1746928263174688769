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
    case 'distribuidores':
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