import { Link } from "react-router-dom";
import IMeal from "../../interfaces/IMeal";
import { twMerge } from "tailwind-merge";
import { ReactNode, useEffect } from "react";
import MealContext from "../../context/MealContext";
import MealCardTitle from "./MealCardTitle";
import MealCardCategory from "./MealCardCategory";
import MealCardInfo from "./MealCardInfo";
import MealCardTags from "./MealCardTags";
import MealCardThumb from "./MealCardThumb";
import IMealReference from "../../interfaces/IMealReference";
import useToggle from "../../hooks/useToggle";

type Props = {
   meal: IMeal | IMealReference
   children: ReactNode
   className?: string
}

export default function MealCard({ meal, children, className }: Props) {
   const [isBookmarked, toggleIsBookmarked] = useToggle(false)

   useEffect(() => {

      const storedBookmarks = localStorage.getItem('bookmarks')
      const bookmarkeds = storedBookmarks ? JSON.parse(storedBookmarks) : []

      isBookmarked
         ? localStorage.setItem('bookmarks', JSON.stringify([...bookmarkeds, meal.idMeal]))
         : localStorage.setItem('bookmarks', JSON.stringify(bookmarkeds.filter((id: string) => id !== meal.idMeal)))

   }, [isBookmarked, meal])

   return (
      <MealContext.Provider value={meal}>
         <Link
            onClick={toggleIsBookmarked}
            to={`/recipes/${meal.idMeal}`}
            className={twMerge('bg-white block shadow-lg shadow-transparent hover:shadow-zinc-400 hover:-top-2 top-0 duration-300 rounded-lg w-full aspect-square relative overflow-hidden', className)}
         >
            {children}
         </Link>
      </MealContext.Provider>
   )
}

MealCard.Info = MealCardInfo
MealCard.Title = MealCardTitle
MealCard.Category = MealCardCategory
MealCard.Tags = MealCardTags
MealCard.Thumb = MealCardThumb


