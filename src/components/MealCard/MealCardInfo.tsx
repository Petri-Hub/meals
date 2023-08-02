import { ReactNode } from "react"

type Props = {
   children: ReactNode
}

export default function MealCardInfo({ children }: Props) {
   return (
      <div className='p-4 flex flex-col gap-1'>
         { children }
      </div>
   )
}