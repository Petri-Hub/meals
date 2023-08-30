import * as Checkbox from '@radix-ui/react-checkbox';
import { useContext } from 'react';
import MealsContext from '../context/MealsContext';
import useToggle from '../hooks/useToggle';
import { FaCheck } from 'react-icons/fa';
import { Link } from 'react-router-dom';

type Props = {
   index: number
   name: string,
   measure: string
}

export default function IngredientCheck({ index, name, measure }: Props) {

   const [isComplete, toggleIsComplete] = useToggle(false)
   const { ingredients } = useContext(MealsContext)
   const isRegistered = ingredients.some(ingredient => ingredient.strIngredient === name)
   
   return (
      <li className="flex items-center justify-between mb-2">
         <div className='flex items-center gap-x-2'>
            <p className="font-bold pr-2 w-6">{index + 1}.</p>
            <div className={`border-l border-solid pl-2 border-zinc-200 ${isComplete && 'line-through'}`}>
               { isRegistered 
                  ? <Link to={`/ingredients/${name.toLowerCase()}`} className="capitalize font-bold px-2">{name}</Link>
                  : <p className="capitalize font-bold px-2">{name}</p> 
               }
               <p className="px-2 italic text-sm text-zinc-500">{measure}</p>
            </div>
         </div>
         <Checkbox.Root
            onClick={() => toggleIsComplete()}
            className={`w-6 h-6 flex items-center justify-center rounded bg-zinc-200 duration-100 hover:bg-zinc-300 ${isComplete ? 'bg-rose-600 hover:bg-green-700' : ''}`}
         >
            {isComplete && <FaCheck className="text-sm text-white" />}
         </Checkbox.Root>
      </li>
   )
}