import { Link } from "react-router-dom";
import IMeal from "../../interfaces/IMeal";
import { twMerge } from "tailwind-merge";
import { ReactNode } from "react";
import MealContext from "../../context/MealContext";
import MealCardTitle from "./MealCardTitle";
import MealCardCategory from "./MealCardCategory";
import MealCardInfo from "./MealCardInfo";
import MealCardTags from "./MealCardTags";
import MealCardThumb from "./MealCardThumb";

type Props = {
   meal: IMeal
   children: ReactNode
   className?: string
}

export default function MealCard({ meal, children, className }: Props) {
   return (
      <MealContext.Provider value={meal}>
         <Link
            to={`/recipes/${meal.idMeal}`}
            className={twMerge('border border-solid border-zinc-200 rounded-lg overflow-hidden', className)}
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


