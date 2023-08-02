import Banner from "../components/Banner";
import Category from '../components/Category'
import RecipeCard from '../components/RecipeCard'
import RecipeCardSkeleton from '../components/RecipeCardSkeleton'
import { BiFoodMenu } from 'react-icons/bi'
import { FaArrowRight } from 'react-icons/fa'
import { useContext } from 'react'
import MealsContext from "../context/MealsContext";
import { Link } from "react-router-dom";

export default function HomePage() {
   const { categories, trending } = useContext(MealsContext)


   return (
      <>

         <Banner />

         <div className='w-full px-4 md:px-8 lg:px-16 py-16'>

            <div className='w-full mb-6 grid grid-cols-category gap-x-4 items-center'>
               <BiFoodMenu className='text-4xl text-rose-600' />
               <div className='flex flex-col gap-y-1'>
                  <h2 className='text-sm md:text-base font-bold capitalize'>Browse by Categories</h2>
                  <p className='text-sm text-zinc-400 '>Get what you want to see</p>
               </div>
               <div className='flex self-end items-center gap-x-4 text-sm whitespace-nowrap cursor-pointer duration-100 hover:text-zinc-600 text-zinc-400'>
                  See all categories
                  <FaArrowRight />
               </div>
            </div>
            <div className='grid grid-cols-3 gap-3'>
               {
                  categories.length ? categories.slice(0, 9).map(category => {
                     return (
                        <Link to={`/categories/${category.strCategory.toLowerCase()}`} className='group relative w-full h-32 overflow-hidden flex rounded-lg cursor-pointer border border-solid border-zinc-200'>
                           <div className="h-full aspect-[4/3] overflow-hidden flex-shrink-0">

                              <img src={category.strCategoryThumb} alt={category.strCategory} className='group-hover:scale-110 duration-200 object-cover object-center bg-zinc-200 h-full ' />

                           </div>
                           <div className="w-full h-full p-6">
                              <h3 className="font-medium text-base mb-2">{category.strCategory}</h3>
                              <p className="text-sm text-zinc-400">{category.strCategoryDescription.slice(0, 65)}...</p>
                           </div>
                        </Link>
                     )
                  }) : Array(9).fill(
                     <div className='w-full h-32 rounded-lg flex border border-solid border-zinc-200 overflow-hidden'>
                        <div className="h-full aspect-[4/3] flex-shrink-0 overflow-hidden bg-zinc-200 animate-pulse"></div>
                        <div className="p-6 w-full flex flex-col gap-y-2 h-full">
                           <div className="w-24 p-3 bg-zinc-200 animate-pulse rounded mb-2"></div>
                           <div className="w-64 p-2 bg-zinc-200 animate-pulse rounded"></div>
                           <div className="w-48 p-2 bg-zinc-200 animate-pulse rounded"></div>
                        </div>
                     </div>
                  )
               }

            </div>

         </div>

         <div className='w-full px-4 md:px-8 lg:px-16 py-16'>
            <Category
               title='Trending'
               description='Famous recipes searched by the users'
            >
               {trending.length
                  ? trending
                     .slice(0, 5)
                     .map((meal) => (
                        <RecipeCard key={meal.idMeal} {...meal} />
                     ))
                  : Array(5).fill(<RecipeCardSkeleton />)}
            </Category>
         </div>

      </>



   )
}