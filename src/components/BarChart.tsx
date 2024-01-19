import { BarChart, Bar, Rectangle, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

const data = [
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

function BarChartCustom() {
  return (
    <ResponsiveContainer width="100%" height="100%" className='mt-4'>
      <BarChart
        width={500}
        height={300}
        data={data}
        margin={{
          top: 5,
          right: 30,
          left: 20,
          bottom: 5,
        }}
      >
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="name" />
        <YAxis />
        <Tooltip />
        <Bar dataKey="pv" fill="#1A3D7D" activeBar={<Rectangle fill="#2A3D7D" stroke="#367DFD" />} />
        <Bar dataKey="uv" fill="#367DFD" activeBar={<Rectangle fill="#477DFD" stroke="#1A3D7D" />} />
      </BarChart>
    </ResponsiveContainer>
  );
}

export default BarChartCustom;