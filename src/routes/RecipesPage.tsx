import { useParams } from "react-router-dom"
import { useState, useEffect } from 'react'
import Api from "../service/Api"
import IMeal from "../interfaces/IMeal"
import { FaListOl, FaExternalLinkAlt } from 'react-icons/fa'
import { BsYoutube } from 'react-icons/bs'
import Section from "../components/Section/Section"
import IngredientCheck from "../components/IngredientCheck"
import { TbSalad } from "react-icons/tb"

export default function RecipesPage() {

   const { id } = useParams()

   const [meal, setMeal] = useState<IMeal | null>(null)

   useEffect(() => {
      Api.getMealByID(id as string).then((meal) => setMeal(meal))
   }, [id])


   useEffect(() => {
      document.title = `Meals | ${meal?.strMeal ?? "Loading..."}`
   }, [meal])


   if (!meal) {
      return <div></div>
   }

   console.log(meal);
   
   const allIngredients = Array(20).fill(null).map((_, index) => meal[`strIngredient${index + 1}` as keyof IMeal]).filter(Boolean)
   const allMeasures = Array(20).fill(null).map((_, index) => meal[`strMeasure${index + 1}` as keyof IMeal]).filter(Boolean)

   return (
      <main className="p-16 flex flex-col items-center py-24">

         <section className="w-[55%] md:w-[65%] grid grid-cols-2 gap-8">
            <div className="overflow-hidden rounded-lg w-full aspect-square">
               <img src={meal.strMealThumb} alt={meal.strMeal} className="w-full h-full object-cover" />
            </div>
            <div className="flex-col flex gap-y-4 p-4 rounded-xl">
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
            <Section className="col-span-2 mt-24">
               <Section.Header
                  title="What you will need"
                  description="See all the ingredients and their respective measures"
                  icon={TbSalad}
               />
               <Section.Column>
                  {
                     allMeasures.map((measure, index) => <IngredientCheck index={index} name={allIngredients[index]} measure={measure} />)
                  }
               </Section.Column>
            </Section>

            <Section className="col-span-2 mt-24">
               <Section.Header
                  title="Instructions"
                  description="See all the steps to make it"
                  icon={FaListOl}
               />
               <Section.Column className="gap-y-6">
                  <p className="whitespace-pre-wrap">{meal.strInstructions}</p>
               </Section.Column>
            </Section>
         </section>


      </main>
   )
}