import { Children, ReactNode } from "react";
import { Swiper, SwiperSlide } from "swiper/react";

type Props = {
   children: ReactNode
}

export default function SectionSwiper({ children }: Props) {
   return (
      <Swiper
         className="w-full"
         wrapperClass="swiper-wrapper pb-4 items-stretch"
         slidesPerView={5}
         spaceBetween={12}
      >
         {Children.map(children, (child) => <SwiperSlide className="!flex !h-auto">{child}</SwiperSlide>)}
      </Swiper>

   )
}