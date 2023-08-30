import { ReactNode } from "react"
import { twMerge } from "tailwind-merge"

type Props = {
   children: ReactNode
   className?: string
}

export default function SectionColumn({ children, className }: Props){
   return (
      <div className={twMerge("w-full flex flex-col gap-y-2", className)}>
         { children }
      </div>
   )
}