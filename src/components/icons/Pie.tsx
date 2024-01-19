import { SVGProps } from "react"

const Pie = (props: SVGProps<SVGSVGElement> & { color: string }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={24}
    height={23}
    fill="none"
    {...props}
  >
    <path
      fill={props.color}
      d="M12.046 10.625V.73c0-.398.31-.735.708-.735 5.479 0 9.92 4.442 9.92 9.92 0 .399-.336.709-.735.709h-9.893ZM0 12.042C0 6.67 3.99 2.224 9.167 1.515c.408-.057.753.27.753.682V12.75l6.93 6.931c.298.297.275.784-.066 1.023a10.554 10.554 0 0 1-6.155 1.967C4.76 22.67 0 17.914 0 12.04Zm23.312.709c.412 0 .735.345.682.752a10.592 10.592 0 0 1-3.273 6.302.673.673 0 0 1-.938-.03l-7.029-7.024h10.558Z"
    />
  </svg>
)
export default Pie
