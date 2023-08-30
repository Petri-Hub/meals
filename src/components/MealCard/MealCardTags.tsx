import { Link } from "react-router-dom";
import useMealCardContext from "../../hooks/useMealCardContext";

export default function MealCardTags() {
   const { strTags } = useMealCardContext()

   if (!strTags) return (
      null
   )

   return (
      <div className='flex  flex-wrap gap-2'>
         {
            strTags.split(',').map((tag: string) => (
               <p key={tag} className="rounded capitalize bg-zinc-200 duration-100 hover:bg-zinc-100 text-xs p-2 py-1" to={`/ingredients/${tag}`}>
                  {tag}
               </p>
            ))
         }
      </div>
   )
}