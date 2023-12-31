import { ReactNode } from "react"
import { twMerge } from "tailwind-merge"

type Props = {
   children: ReactNode
   className?: string
}

export default function SectionGrid({ className, children }: Props){
   return (
      <div className={twMerge("w-full grid grid-cols-3 gap-3", className)}>
         { children }
      </div>
   )
}