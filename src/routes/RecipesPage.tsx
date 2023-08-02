import { useParams } from "react-router-dom"
import { useState, useEffect } from 'react'
import Api from "../service/Api"
import IMeal from "../interfaces/IMeal"
import { FaListOl, FaExternalLinkAlt } from 'react-icons/fa'
import { BsYoutube } from 'react-icons/bs'

export default function RecipesPage() {

   const { id } = useParams()

   const [meal, setMeal] = useState<IMeal | null>(null)

   useEffect(() => {
      Api.getMealByID(id as string).then((meal) => setMeal(meal))
   }, [])

   if (!meal) {
      return <div></div>
   }

   const allIngredients = Array(20).fill(null).map((_, index) => meal[`strIngredient${index + 1}` as keyof IMeal]).filter(Boolean)
   const allMeasures = Array(20).fill(null).map((_, index) => meal[`strMeasure${index + 1}` as keyof IMeal]).filter(Boolean)

   return (
      <main className="p-16 flex flex-col items-center py-24">

         <section className="w-[55%] grid grid-cols-2 gap-8">
            <div className="overflow-hidden rounded-lg w-full aspect-square">
               <img src={meal.strMealThumb} alt={meal.strMeal} className="w-full h-full object-cover" />
            </div>
            <div className="flex-col flex gap-y-4">
               <p className="text-xl text-zinc-400 pl-4 border-l-2 border-solid border-zinc-200 tracking-wider">{meal.strArea}</p>
               <h1 className="text-3xl font-bold tracking-wide">{meal.strMeal}</h1>
               <div className="flex items-center gap-x-2">
                  {meal.strYoutube && (
                     <a className="bg-red-600 p-2 px-3 rounded flex items-center text-white gap-x-3" target="_blank" href={meal.strYoutube}>
                        Youtube
                        <BsYoutube />
                     </a>
                  )}
                  {meal.strSource && (
                     <a className="bg-zinc-400 p-2 px-3 rounded flex items-center text-white gap-x-3" target="_blank" href={meal.strSource}>
                        Source
                        <FaExternalLinkAlt />
                     </a>
                  )}
               </div>
            </div>
            <div className="col-span-2">
               <div className='w-full mb-6 mt-16 grid grid-cols-category gap-x-4 items-center '>
                  <FaListOl className='text-4xl text-rose-600' />
                  <div className='flex flex-col gap-y-1'>
                     <h2 className='text-sm md:text-base font-bold capitalize'>Necessary Ingredients</h2>
                     <p className='text-sm text-zinc-400'>See all of the ingredients and it's measures</p>
                  </div>
               </div>
               <ol className="flex flex-col gap-y-2">
                  {
                     allMeasures.map((measure, index) => {
                        return <li className="flex items-center p-1 gap-2">
                           <p className="font-bold pr-2 ">{index + 1}.</p>
                           <div className="border-l border-solid pl-2 border-zinc-200">
                              <p className="capitalize font-bold px-2">{allIngredients[index]}</p>
                              <p className="px-2 italic text-sm text-zinc-500">{measure}</p>
                           </div>

                        </li>
                     })
                  }
               </ol>
            </div>

         </section>


      </main>
   )
}