import { ElementType, ReactNode } from "react"

type Props = {
   options?: ReactNode
   icon?: ElementType
   title?: string
   description?: string
}

export default function SectionHeader({ icon: Icon, title, description, options }: Props) {
   return (
      <header className="w-full flex px-4 items-center justify-between gap-x-4">

         {/* Left Side */}
         <div className="flex gap-x-4 items-center">
            {Icon && <Icon className="text-rose-600 text-4xl" />}
            <div className="flex flex-col justify-center gap-y-1">
               {title && <h2 className="text-2xl text-black font-brand">{title}</h2>}
               {description && <p className="text-sm text-zinc-400">{description}</p>}
            </div>
         </div>

         {/* Right Side */}
         <div className="flex items-center gap-x-2">{options}</div>
      </header>
   )
}
