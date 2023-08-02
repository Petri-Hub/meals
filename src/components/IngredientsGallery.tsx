import { useState } from 'react'
import { PiCursorClick } from 'react-icons/pi'
import { FaArrowRight } from 'react-icons/fa'
import IIngredient from '../interfaces/IIngredient'

interface IngredientsGalleryProps {
   ingredients: IIngredient[]
}

export default function IngredientsGallery({
   ingredients,
}: IngredientsGalleryProps) {
   const [ingredientSelected, setIngredientSelected] =
      useState<IIngredient | null>(null)

   return (
      <div className='flex w-96 gap-x-4'>
         <ul className='min-w-[120px]'>
            {ingredients.map((ingredient) => {
               return (
                  <li
                     key={ingredient.idIngredient}
                     className={`py-2 first:border-t-0 hover:font-medium cursor-pointer border-t border-solid border-zinc-300 ${
                        ingredient.idIngredient ===
                        ingredientSelected?.idIngredient
                           ? 'font-medium'
                           : ''
                     }`}
                     onMouseEnter={() => setIngredientSelected(ingredient)}
                  >
                     {ingredient.strIngredient}
                  </li>
               )
            })}
         </ul>
         <div className='w-full h-min'>
            {ingredientSelected ? (
               <div className='w-full flex-col flex gap-y-4'>
                  <p className='cursor-pointer text-lg font-medium text-black'>
                     {ingredientSelected.strIngredient}
                  </p>
                  <p className='text-zinc-400 text-sm'>
                     {ingredientSelected.strDescription.slice(0, 200)}...
                  </p>
                  <p className='flex items-center color cursor-pointer text-zinc-400 hover:text-zinc-600 gap-x-2'>
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
