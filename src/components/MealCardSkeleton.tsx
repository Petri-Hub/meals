type Props = {
   title?: boolean,
   tags?: boolean,
   category?: boolean,
   thumb?: boolean
}

export default function MealCardSkeleton({ title = true, tags = true, category = true, thumb = true }: Props) {
   return (
      <div className='w-full shadow-md rounded-lg overflow-hidden'>
         {thumb && (
            <div className='w-full relative'>
               <div className='w-full bg-zinc-300 aspect-square animate-pulse' />
            </div>
         )}
         <div className='p-4 flex flex-col gap-2'>
            {title && <div className='overflow-hidden bg-zinc-200 w-full rounded h-6 animate-pulse'></div>}
            {category && <div className='overflow-hidden bg-zinc-200 w-1/2 rounded h-3 animate-pulse'></div>}
            {tags && (
               <div className='flex flex-wrap gap-2'>
                  <div className='w-12 h-5 cursor-pointer bg-zinc-200 after:duration-200 px-2 rounded'></div>
                  <div className='w-12 h-5 cursor-pointer duration-200 px-2 rounded bg-zinc-200'></div>
                  <div className='w-12 h-5 cursor-pointer duration-200 px-2 rounded bg-zinc-200'></div>
               </div>
            )}
         </div>
      </div>
   )
}
