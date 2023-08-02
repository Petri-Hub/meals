import { ReactNode } from "react"

type Props = {
   children: ReactNode
}

export default function SectionGrid({ children }: Props){
   return (
      <div className="w-full grid grid-cols-3 gap-3">
         { children }
      </div>
   )
}