export default function RecipeCardSkeleton() {
   return (
      <article
         className={
            'border border-solid border-zinc-200 rounded-lg overflow-hidden'
         }
      >
         <div className='w-full relative'>
            <div className='w-full bg-zinc-300 aspect-square animate-pulse' />
         </div>
         <div className='p-4 flex flex-col gap-2'>
            <div className='overflow-hidden bg-zinc-200 w-full rounded h-6 animate-pulse'></div>
            <div className='overflow-hidden bg-zinc-200 w-1/2 rounded h-3 animate-pulse'></div>
            <div className='flex flex-wrap gap-2'>
               <div className='w-12 h-5 cursor-pointer bg-zinc-200 after:duration-200 px-2 rounded'></div>
               <div className='w-12 h-5 cursor-pointer duration-200 px-2 rounded bg-zinc-200'></div>
               <div className='w-12 h-5 cursor-pointer duration-200 px-2 rounded bg-zinc-200'></div>
            </div>
         </div>
      </article>
   )
}
