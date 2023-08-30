import { ReactNode } from "react"
import SectionHeader from "./SectionHeader"
import SectionSwiper from "./SectionSwiper"
import SectionGrid from "./SectionGrid"
import SectionColumn from "./SectionColumn"
import { twMerge } from "tailwind-merge"

type Props = {
   children: ReactNode,
   className?: string
}

export default function Section({ children, className }: Props) {
   return (
      <section className={twMerge("w-full flex flex-col gap-y-6", className)}>
         {children}
      </section>
   )
}

Section.Header = SectionHeader
Section.Grid = SectionGrid
Section.Swiper = SectionSwiper
Section.Column = SectionColumn