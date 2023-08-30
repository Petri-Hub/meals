import useMealCardContext from "../../hooks/useMealCardContext"

export default function MealCardTitle() {
   return (
      <h3 className='text-white font-medium text-sm md:text-base font-brand overflow-hidden text-ellipsis whitespace-nowrap cursor-pointer'>
         {useMealCardContext().strMeal}
      </h3>
   )
}