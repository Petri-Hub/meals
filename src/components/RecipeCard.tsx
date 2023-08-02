import { twMerge } from 'tailwind-merge'
import IMeal from '../interfaces/IMeal'
import { FaRegHeart, FaHeart, FaRegBookmark, FaBookmark } from 'react-icons/fa'
import useToggle from '../hooks/useToggle'
import { Link } from 'react-router-dom'

interface RecipeCardProps extends IMeal {
   className?: string
}

export default function RecipeCard({
   className,
   strMeal,
   idMeal,
   strMealThumb,
   strCategory,
   strTags,
}: RecipeCardProps) {
   const [isLiked, toggleLiked] = useToggle(false)
   const [isBookmarked, toggleBookmark] = useToggle(false)

   const handleLikeClick = (event: React.MouseEvent) => {
      event.preventDefault()
      event.stopPropagation()
      toggleLiked()
   }

   const handleBookmark = (event: React.MouseEvent) => {
      event.preventDefault()
      event.stopPropagation()
      toggleBookmark()
   }

   return (
      <Link
         to={`/recipes/${idMeal}`}
         className={twMerge(
            'border border-solid border-zinc-200 rounded-lg overflow-hidden',
            className,
         )}
      >
         <div className='w-full relative aspect-square overflow-hidden group'>
            <div className='absolute top-2 right-2 flex flex-col gap-y-2 z-10'>
               <button onClick={handleLikeClick} className='rounded-md group-hover:opacity-100 opacity-0 duration-100 w-8 grid place-items-center h-8 bg-white'>
                  {isLiked ? <FaHeart className="text-rose-600" /> : <FaRegHeart className="text-rose-600" />}
               </button>
               <button onClick={handleBookmark} className='rounded-md group-hover:opacity-100 opacity-0 duration-100 w-8 grid place-items-center h-8 bg-white'>
                  {isBookmarked ? <FaBookmark className="text-yellow-500" /> : <FaRegBookmark className="text-yellow-500" />}
               </button>
            </div>
            <img
               className='w-full hover:scale-110 object-cover duration-200 cursor-pointer'
               src={strMealThumb}
            />
         </div>
         <div className='p-4 flex flex-col gap-1'>
            <h3 className='text-black font-medium text-sm md:text-base overflow-hidden text-ellipsis whitespace-nowrap cursor-pointer'>
               {strMeal}
            </h3>
            {
               strCategory && (
                  <p className='text-zinc-600 text-xs md:text-sm overflow-hidden text-ellipsis whitespace-nowrap cursor-pointer'>
                     {strCategory}
                  </p>
               )
            }
            {
               strTags && (
                  <div className='flex flex-wrap gap-2'>
                     {(strTags ?? '')
                        .split(',')
                        .filter(Boolean)
                        .map((tag) => (
                           <div
                              key={tag}
                              className='p-1 cursor-pointer hover:bg-zinc-100 duration-200 px-2 rounded bg-zinc-200 text-xs text-black'
                           >
                              {tag}
                           </div>
                        ))}
                  </div>
               )
            }

         </div>
      </Link>
   )
}
