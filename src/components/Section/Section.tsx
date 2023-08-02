import { ReactNode } from "react"
import SectionHeader from "./SectionHeader"
import SectionSwiper from "./SectionSwiper"
import SectionGrid from "./SectionGrid"

type Props = {
   children: ReactNode
}

export default function Section({ children }: Props) {
   return (
      <section className="w-full flex flex-col gap-y-6">
         {children}
      </section>
   )
}

Section.Header = SectionHeader
Section.Grid = SectionGrid
Section.Swiper = SectionSwiper