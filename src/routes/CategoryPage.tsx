import { Link, useParams } from "react-router-dom"
import { useContext, useState, useEffect } from 'react'
import MealsContext from "../context/MealsContext"
import { FaArrowLeft } from "react-icons/fa"
import Api from "../service/Api"
import { TbToolsKitchen2 } from 'react-icons/tb'
import MealCardSkeleton from "../components/MealCardSkeleton"
import IMealReference from "../interfaces/IMealReference"
import MealCard from "../components/MealCard/MealCard"

export default function CategoryPage() {

   const { name } = useParams()
   const { categories } = useContext(MealsContext)

   const [categoryMeals, setCategoryMeals] = useState<IMealReference[]>([])
   const category = categories.find(({ strCategory }) => strCategory.toLowerCase() === name)

   useEffect(() => {
      Api.getMealsByCategory(name as string)
         .then(meals => setCategoryMeals(meals))

   }, [name])

   useEffect(() => {
      document.title = `Meals | ${category?.strCategory ?? "Loading..."}`
   }, [category])

   return (
      <main className="p-16 flex flex-col items-center py-24">


         <section className="grid w-[55%] md:w-[80%] relative grid-cols-2 gap-8 ">
            <Link to={'/'} className="col-span-2 bg-rose-600 py-3 px-4 rounded flex items-center gap-x-2 w-fit text-white">
               <FaArrowLeft />
               Go Back
            </Link>
            <div className="aspect-square h-min rounded-xl overflow-hidden">
               {
                  category
                     ? <img src={category.strCategoryThumb} alt={category.strCategory} className="w-full h-full object-contain bg-zinc-200" />
                     : <div className="bg-zinc-300 h-full w-full animate-pulse"></div>
               }
            </div>
            <div className="flex relative flex-col gap-y-4 p-4">
               {
                  category
                     ? (
                        <>
                           <p className="uppercase text-lg text-zinc-300"># {category.idCategory}</p>
                           <h2 className="text-3xl font-bold tracking-wide">{category.strCategory}</h2>
                           <p className="text-lg text-zinc-400">{category.strCategoryDescription}</p>
                        </>
                     ) : (
                        <>
                           <div className="w-8 rounded animate-pulse p-2 py-4 bg-zinc-300"></div>
                           <div className="w-40 rounded animate-pulse p-5 bg-zinc-300"></div>
                           <div className="flex flex-col gap-y-3">
                              <div className="w-68 rounded animate-pulse p-2 bg-zinc-300"></div>
                              <div className="w-64 rounded animate-pulse p-2 bg-zinc-300"></div>
                              <div className="w-68 rounded animate-pulse p-2 bg-zinc-300"></div>
                              <div className="w-64 rounded animate-pulse p-2 bg-zinc-300"></div>
                              <div className="w-52 rounded animate-pulse p-2 bg-zinc-300"></div>
                              <div className="w-64 rounded animate-pulse p-2 bg-zinc-300"></div>
                              <div className="w-68 rounded animate-pulse p-2 bg-zinc-300"></div>
                              <div className="w-48 rounded animate-pulse p-2 bg-zinc-300"></div>
                              <div className="w-68 rounded animate-pulse p-2 bg-zinc-300"></div>
                              <div className="w-64 rounded animate-pulse p-2 bg-zinc-300"></div>
                              <div className="w-52 rounded animate-pulse p-2 bg-zinc-300"></div>
                              <div className="w-64 rounded animate-pulse p-2 bg-zinc-300"></div>
                              <div className="w-68 rounded animate-pulse p-2 bg-zinc-300"></div>
                           </div>
                        </>
                     )
               }
            </div>
            <div className="col-span-2">
               <div className='w-full mb-6 grid grid-cols-category gap-x-4 items-center'>
                  <TbToolsKitchen2 className='text-4xl text-rose-600' />
                  <div className='flex flex-col gap-y-1'>
                     <h2 className='text-sm md:text-base font-bold capitalize'>{category ? `${category.strCategory} recipes` : 'Recipes'}</h2>
                     <p className='text-sm text-zinc-400'>Sorted alphabetically</p>
                  </div>
               </div>
               <div className="grid grid-cols-3 gap-3">
                  {
                     categoryMeals.length && category
                        ? (
                           categoryMeals.map(meal => (
                              <MealCard key={meal.idMeal} meal={{ ...meal, strCategory: category.strCategory }}>
                                 <MealCard.Thumb />
                                 <MealCard.Info>
                                    <MealCard.Title />
                                    <MealCard.Category />
                                 </MealCard.Info>
                              </MealCard>
                           ))
                        ) : (
                           <>
                              {Array(5).fill(null).map((_, index) => <MealCardSkeleton key={index} tags={false} />)}
                           </>
                        )
                  }
               </div>
               <p className="mt-16 cursor-pointer text-center text-rose-600 font-bold text-lg">Voltar ao topo</p>
            </div>




         </section>



      </main>
   )
}