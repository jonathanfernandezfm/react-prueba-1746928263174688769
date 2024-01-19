import { SVGProps } from "react"

const Graph = (props: SVGProps<SVGSVGElement> & { color: string }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={22} height={23} {...props}>
    <path fill={props.color} d="M3.474 15.965 0 19.369V9.597h3.474m5.79 4.237-1.819-1.551L5.79 13.81V4.965h3.474m5.79 6.947-3.474 3.474V.333h3.474m3.253 11.36L16.21 9.596H22v5.789l-2.073-2.073-8.348 8.28-4.018-3.498-4.377 4.238H0l7.492-7.34 4.087 3.45" />
  </svg>
)
export default Graph
