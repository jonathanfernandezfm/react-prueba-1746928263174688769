import { SVGProps } from "react"

const MenuIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={15}
    height={12}
    fill="none"
    {...props}
  >
    <path
      fill="#000"
      d="M4.75 5.5h7.5a.75.75 0 1 1 0 1.5h-7.5a.75.75 0 0 1 0-1.5Zm0 5h7.5a.75.75 0 1 1 0 1.5h-7.5a.75.75 0 1 1 0-1.5Zm-4-10h6.5a.75.75 0 0 1 0 1.5H.75a.75.75 0 0 1 0-1.5ZM1 12a1 1 0 1 1 0-2 1 1 0 0 1 0 2Zm1-6a1 1 0 1 1-2 0 1 1 0 0 1 2 0Zm10.314-3.082L10.07.417A.25.25 0 0 1 10.256 0h4.488a.25.25 0 0 1 .186.417l-2.244 2.5a.25.25 0 0 1-.372 0v.001Z"
    />
  </svg>
)
export default MenuIcon
