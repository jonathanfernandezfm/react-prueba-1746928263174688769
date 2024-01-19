import { SVGProps } from "react"

const MapClients = (props: SVGProps<SVGSVGElement> & { color: string }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={19}
    height={25}
    fill={props.color}
    {...props}
  >
    <path
      fill={props.color}
      d="M10.137 23.794c2.411-3.017 7.91-10.33 7.91-14.437 0-4.982-4.042-9.024-9.024-9.024C4.042.333 0 4.375 0 9.357c0 4.107 5.499 11.42 7.91 14.437a1.42 1.42 0 0 0 2.227 0ZM9.023 6.35a3.008 3.008 0 1 1 0 6.016 3.008 3.008 0 0 1 0-6.016Z"
    />
  </svg>
)
export default MapClients
