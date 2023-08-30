import { twMerge } from "tailwind-merge"
import FancyBorder from "./FancyBorder"
import { useEffect, useState } from "react"
import IMeal from "../interfaces/IMeal"
import Api from "../service/Api"
import HeroCardSkeleton from "./HeroCardSkeleton"
import { Link } from "react-router-dom"
import Utils from "../Utils"

type Props = {
   className?: string,
   id: number
}

export default function HeroCard({ id, className }: Props) {
   const [meal, setMeal] = useState<IMeal>()
   const [error, setError] = useState<string>()

   const handleSuccess = (meal: IMeal | null) => {
      if (meal) {

         Utils.loadImage(meal.strMealThumb).then(() => setMeal(meal))

      } else {

         handleError(`[${id}] Meal Missing.`)
         
      }
   }

   const handleError = (error: string) => {
      setError(error)
   }

   useEffect(() => {
      setTimeout(() => {
         Api.getMealByID(String(id))
            .then(handleSuccess)
            .catch(handleError)

      }, 1000)
   }, [])

   if (!meal) {
      return <HeroCardSkeleton className={className ?? ''} />
   }

   return (
      <Link to={`/recipes/${id}`} className={twMerge("w-full group h-full rounded overflow-hidden isolation shadow-lg shadow-transparent hover:shadow-zinc-400 hover:-top-2 top-0 duration-300 isolate relative cursor-pointer", className)}>

         <img src={meal.strMealThumb} alt={meal.strMeal} className="group-hover:scale-105 duration-300 w-full h-full absolute object-cover object-center" />

         <div className="bg-gradient-to-t from-black to-transparent absolute w-full h-full opacity-40"></div>

         <div className="absolute bottom-4 left-5">
            <p className="text-white text-lg font-medium font-brand">{meal.strMeal}</p>
            <p className="text-zinc-300 text-md">{meal.strCategory}</p>
         </div>

         <FancyBorder
            topRight={false}
            bottomLeft={false}
         />


      </Link>
   )
}

