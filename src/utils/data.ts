import Client from "../models/Client";

export const navigationPanelButtons = [
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

export const barChartData = [
  {
    name: '1',
    uv: 1900,
    pv: 800,
  },
  {
    name: '2',
    uv: 1600,
    pv: 800,
  },
  {
    name: '3',
    uv: 300,
    pv: 400,
  },
  {
    name: '4',
    uv: 800,
    pv: 1600,
  },
  {
    name: '5',
    uv: 1400,
    pv: 2000,
  },
];

export const clients: Client[] = [
  {
    name: 'Daniela Ayala',
    date: '20/01/2023',
    amount: 100,
  },
  {
    name: 'Rubén González',
    date: '20/01/2023',
    amount: 100,
  },
  {
    name: 'Mariana Reyes',
    date: '20/01/2023',
    amount: 100,
  },
  {
    name: 'Julio Espinoza',
    date: '20/01/2023',
    amount: 100,
  },
]

export const items = ['Botellon de 20 Lts', 'Garrafa']