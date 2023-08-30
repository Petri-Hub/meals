import { useState } from "react"
import HeroCard from "./HeroCard"
import { twMerge } from "tailwind-merge"
import IShowcase from "../interfaces/IShowcase"



const showCases: IShowcase[] = [
   {
      id: 0,
      title: 'Japanese Entusiasts',
      meals: [53034, 52827, 52773, 53032],
   },
   {
      id: 1,
      title: 'Grandmother Favorites',
      meals: [52990, 52900, 52919, 52829],
   },
]

export default function HeroSection() {
   const [activeShowcase, setActiveShowcase] = useState<IShowcase>(showCases[0])


   return (
      <div className="w-full mx-auto py-8 px-4 md:px-8 lg:px-16">
         <div className="flex items-center gap-x-6 mb-6">

            {
               showCases.map(showcase => (
                  <p
                     className={twMerge("font-brand text-lg cursor-pointer", activeShowcase.id === showcase.id && 'text-rose-600')}
                     onClick={() => setActiveShowcase(showcase)}
                  >
                     {showcase.title}
                  </p>
               ))
            }

         </div>
         <div className='h-[450px] z-1 gap-4 grid-rows-6 grid grid-cols-6 '>
            {
               activeShowcase.meals.map((mealID, index) => (
                  <HeroCard
                     key={mealID}
                     id={mealID}
                     className={twMerge(
                        index === 0 && 'col-span-3 md:col-span-2 row-span-6',
                        index === 1 && 'col-span-3 md:col-span-2 row-span-3',
                        index === 2 && 'col-span-3 md:col-span-2 col-start-4 md:col-start-3 row-span-3',
                        index === 3 && 'col-span-2 row-span-6 row-start-1 col-start-5 hidden md:block',
                     )}
                  />
               ))
            }
         </div>
      </div>

   )
}
