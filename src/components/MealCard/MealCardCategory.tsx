import { Link } from "react-router-dom"
import useMealCardContext from "../../hooks/useMealCardContext"

export default function MealCardCategory() {
   const { strCategory } = useMealCardContext()

   return (
      <Link
         to={`/categories/${strCategory.toLowerCase()}`}
         className='text-zinc-300 w-fit mb-1 duration-200 hover:tracking-wider text-xs md:text-sm overflow-hidden text-ellipsis whitespace-nowrap cursor-pointer'>
         {strCategory}
      </Link>
   )
}