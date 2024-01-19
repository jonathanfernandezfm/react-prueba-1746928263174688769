import { PropsWithChildren } from "react"

function Card({ children }: PropsWithChildren) {
  return (
    <div className="rounded-3xl border-[1px] border-[#D6D5D5] py-[15px] px-[20px] min-w-fit w-fit">
      {children}
    </div>
  )
}

export default Card