import Banner from "../components/Banner";
import MealCardSkeleton from '../components/RecipeCardSkeleton'
import { BiFoodMenu } from 'react-icons/bi'
import { useContext } from 'react'
import MealsContext from "../context/MealsContext";
import { PiFire } from 'react-icons/pi'
import { Link } from "react-router-dom";
import MealCard from "../components/MealCard/MealCard";
import Section from "../components/Section/Section";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import { useSwiper } from 'swiper/react'

export default function HomePage() {
   const { categories, trending } = useContext(MealsContext)

   const isTrendingLoading = () => {
      return !trending.length
   }

   return (
      <>

         <Banner />


         <div className='w-full px-4 md:px-8 flex-col flex gap-y-32 lg:px-16 py-16'>

            {/* Seção de categorias */}
            <Section>
               <Section.Header
                  icon={BiFoodMenu}
                  title="Browse by Categories"
                  description="Get what you want to see"
               />
               <Section.Grid>
                  {
                     categories.length ? categories.map(category => {
                        return (
                           <Link to={`/categories/${category.strCategory.toLowerCase()}`} className='group relative w-full h-32 overflow-hidden flex rounded-lg cursor-pointer border border-solid border-zinc-200'>
                              <div className="h-full aspect-[4/3] overflow-hidden flex-shrink-0">

                                 <img src={category.strCategoryThumb} alt={category.strCategory} className='group-hover:scale-110 duration-200 object-cover object-center bg-zinc-100 h-full ' />

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
               </Section.Grid>
            </Section>

            <Section>
               <Section.Header
                  icon={PiFire}
                  title="Tending"
                  description="Famous recipes searched by the users"
                  options={<>
                     <button
                     onClick={() => useSwiper}
                        className="h-10 rounded border-solid border-zinc-200 hover:bg-zinc-100 duration-100 text-zinc-black border grid place-items-center aspect-square"
                     >
                        <FaChevronLeft />
                     </button>
                     <button className="h-10 rounded border-solid border-zinc-200 hover:bg-zinc-100 duration-100 text-zinc-black border grid place-items-center aspect-square"><FaChevronRight /></button>
                  </>}
               />
               <Section.Swiper>
                  {
                     isTrendingLoading()
                        ? Array(6).fill(null).map((_, index) => <MealCardSkeleton key={index} />)
                        : trending.map(meal => {
                           return (
                              <MealCard key={meal.idMeal} meal={meal}>
                                 <MealCard.Thumb />
                                 <MealCard.Info>
                                    <MealCard.Title />
                                    <MealCard.Category />
                                    <MealCard.Tags />
                                 </MealCard.Info>
                              </MealCard>
                           )
                        })
                  }
               </Section.Swiper>

            </Section>
         </div >

      </>



   )
}