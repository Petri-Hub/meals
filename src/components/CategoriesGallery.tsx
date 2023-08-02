import ICategory from '../interfaces/ICategory'
import { useState } from 'react'
import { PiCursorClick } from 'react-icons/pi'
import { FaArrowRight } from 'react-icons/fa'
import { Link } from 'react-router-dom'

interface CategoriesGaleryProps {
   categories: ICategory[]
}

export default function CategoriesGalery({
   categories,
}: CategoriesGaleryProps) {
   const [categorySelected, setCategorySelected] = useState<ICategory | null>(null)

   return (
      <div className='flex w-96 gap-x-4'>
         <ul className='min-w-[120px] divide-y divide-solid divide-zinc-200'>
            {
               categories.map((category) => {
                  return (
                     <Link to={`/categories/${category.strCategory.toLowerCase()}`}
                        key={category.idCategory}
                        className={`py-2 first:pt-0 last:pb-0 block hover:font-medium cursor-pointer  ${category.idCategory === categorySelected?.idCategory
                              ? 'font-medium'
                              : ''
                           }`}
                        onMouseEnter={() => setCategorySelected(category)}
                     >
                        {category.strCategory}
                     </Link>
                  )
               })}
         </ul>
         <div className='w-full h-min'>
            {categorySelected ? (
               <div className='w-full flex-col flex gap-y-4'>
                  <img
                     className='w-full rounded bg-zinc-200 object-cover aspect-square'
                     src={categorySelected.strCategoryThumb}
                     alt={categorySelected.strCategory}
                  />
                  <p className='cursor-pointer text-lg font-medium text-rose-600'>
                     {categorySelected.strCategory}
                  </p>
                  <p className='text-zinc-400 text-sm'>
                     {categorySelected.strCategoryDescription.slice(0, 200)}...
                  </p>
                  <p className='flex items-center color cursor-pointer text-black gap-x-2'>
                     See more
                     <FaArrowRight />
                  </p>
               </div>
            ) : (
               <div className='w-full flex items-center border-dashed border-2 rounded border-zinc-200 justify-center flex-col gap-y-4 aspect-square'>
                  <PiCursorClick className='text-3xl text-zinc-400' />
                  <p className='text-md text-center text-zinc-400 '>
                     Hover over an item to <br></br>show it's description
                  </p>
               </div>
            )}
         </div>
      </div>
   )
}
