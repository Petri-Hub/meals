import { IoMdRestaurant } from "react-icons/io";
import { Link } from "react-router-dom";

export default function Footer() {
   return (
      <footer className='border-t border-solid border-zinc-300 flex items-start gap-x-40 bg-white p-16'>
         <div className="flex gap-x-3 items-center mb-6">
            <IoMdRestaurant className='text-4xl text-rose-600' />
            <h1 className='cursor-pointer font-primary text-2xl font-extrabold tracking-widest uppercase text-rose-600'>Meals</h1>
         </div>
         <div className="flex flex-col gap-x2">
            <Link to={'/categories'} className="p-1 cursor-pointer w-min hover:font-medium">Categorias</Link>
            <Link to={'/ingredients'} className="p-1 cursor-pointer w-min hover:font-medium">Ingredientes</Link>
            <Link to={'/areas'} className="p-1 cursor-pointer w-min hover:font-medium">Áreas</Link>
         </div>
      </footer>
   )
}
