import { FaRegBookmark } from 'react-icons/fa'
import { CgSearch } from 'react-icons/cg'
import { IoMdRestaurant } from 'react-icons/io'
import { Link } from 'react-router-dom'
import UserProfile from './UserProfile'

export default function Header() {
   return (
      <header className=' sticky left-0 top-0 z-10 z-100 px-4 md:px-8 lg:px-16 py-6 flex items-center justify-between'>

         {/* Parte Esquerda (Logo) */}
         <Link to={'/'} className='flex items-center gap-x-2 duration-100 text-rose-600'>
            <IoMdRestaurant className='text-2xl' />
            <h1 className='font-brand cursor-pointer font-primary text-xl pr-2 font-extrabold tracking-wider'>Meals</h1>
            <p className='hidden md:flex border-solid border-l text-black border-zinc-100 text-sm pl-4 py-1'>Recipes for everyone</p>
         </Link>

         {/* Parte direita */}
         <div className='flex items-center gap-x-4 text-2xl'>
            <CgSearch />
            <FaRegBookmark />
            <UserProfile />
         </div>

      </header>
   )
}
