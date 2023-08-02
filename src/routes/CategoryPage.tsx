import { Link, useParams } from "react-router-dom"
import { useContext, useState, useEffect } from 'react'
import MealsContext from "../context/MealsContext"
import IMeal from "../interfaces/IMeal"
import { FaArrowLeft } from "react-icons/fa"
import Api from "../service/Api"
import { TbToolsKitchen2 } from 'react-icons/tb'
import RecipeCardSkeleton from "../components/RecipeCardSkeleton"
import RecipeCard from "../components/RecipeCard"

export default function CategoryPage() {

   const { name } = useParams()
   const { categories } = useContext(MealsContext)

   const [categoryMeals, setCategoryMeals] = useState<IMeal[]>([])
   const category = categories.find(({ strCategory }) => strCategory.toLowerCase() === name)

   console.log(categoryMeals);
   

   useEffect(() => {
      Api.getMealsByCategory(name as string)
         .then(meals => setCategoryMeals(meals))

   }, [])

   return (
      <main className="p-16 flex flex-col items-center py-24">


         <section className="grid w-[55%] relative grid-cols-2 gap-8 ">
            <Link to={'/'} className="col-span-2 bg-rose-600 py-3 px-4 rounded flex items-center gap-x-2 w-fit text-white">
               <FaArrowLeft />
               Go Back
            </Link>
            <div className="aspect-square h-min rounded-xl overflow-hidden">
               {
                  category
                     ? <img src={category.strCategoryThumb} alt={category.strCategory} className="w-full h-full object-contain bg-zinc-100" />
                     : <div className="bg-zinc-300 h-full w-full animate-pulse"></div>
               }
            </div>
            <div className="flex flex-col gap-y-4">
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
                           categoryMeals.map(meal => <RecipeCard key={meal.idMeal} {...meal}/>)
                        ) : (
                           <>
                              <RecipeCardSkeleton />
                              <RecipeCardSkeleton />
                              <RecipeCardSkeleton />
                              <RecipeCardSkeleton />
                              <RecipeCardSkeleton />
                              <RecipeCardSkeleton />
                              <RecipeCardSkeleton />
                              <RecipeCardSkeleton />
                              <RecipeCardSkeleton />
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