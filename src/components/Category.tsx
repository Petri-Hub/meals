import { FaArrowRight } from 'react-icons/fa'
import { PiFire } from 'react-icons/pi'

interface CategoryProps {
   title: string
   description: string
   children: React.ReactNode
}

export default function Category({
   title,
   description,
   children,
}: CategoryProps) {
   return (
      <div className='w-full px-2 md:px-4'>
         <div className='w-full mb-6 grid grid-cols-category gap-x-4 items-center'>
            <PiFire className='text-4xl text-rose-600' />
            <div className='flex flex-col gap-y-1'>
               <h2 className='text-sm md:text-base font-bold capitalize'>
                  {title}
               </h2>
               <p className='text-sm text-zinc-400 '>{description}</p>
            </div>
            <div className='flex self-end items-center gap-x-4 text-sm whitespace-nowrap cursor-pointer duration-100 hover:text-zinc-600 text-zinc-400'>
               See all
               <FaArrowRight />
            </div>
         </div>
         <div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-3'>
            {children}
         </div>
         <button></button>
      </div>
   )
}
