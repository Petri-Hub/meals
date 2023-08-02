import { useContext } from "react";
import MealCardContext from '../context/MealContext'

export default function useMealCardContext(){
   const context = useContext(MealCardContext)
   if(!context) throw new Error('MealCard.[Element] needs to be child of MealCard component.')
   return context
}