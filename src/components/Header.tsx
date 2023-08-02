import { FaRegUserCircle, FaRegBookmark } from 'react-icons/fa'
import { CgSearch } from 'react-icons/cg'
import { IoMdRestaurant } from 'react-icons/io'
import { Link } from 'react-router-dom'

export default function Header() {
   return (
      <header className='px-4 sticky left-0 top-0 z-10 bg-white z-100 md:px-8 lg:px-16 py-4 border-b flex items-center justify-between border-zinc-200 border-solid'>

         {/* Parte Esquerda (Logo) */}
         <Link to={'/'} className='flex items-center gap-x-3 duration-100 text-rose-600'>
            <IoMdRestaurant className='text-2xl ' />
            <h1 className='cursor-pointer font-primary text-lg font-extrabold tracking-widest uppercase'>Meals</h1>
            <p className='hidden md:block border-solid border-l text-black border-zinc-300 text-sm pl-4 py-1'>Recipes for everyone</p>
         </Link>

         {/* Parte direita */}
         <div className='flex items-center gap-x-4 text-2xl'>
            <CgSearch />
            <FaRegBookmark />
            <FaRegUserCircle />
         </div>

      </header>
   )
}
