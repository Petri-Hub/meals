import useMealCardContext from "../../hooks/useMealCardContext";

type Props = {
   preview?: boolean
}

export default function MealCardThumb({ preview = false }: Props) {
   return (
      <div className='w-full relative aspect-square overflow-hidden group' >
         <img
            className='w-full hover:scale-110 object-cover duration-200 cursor-pointer'
            src={`${useMealCardContext().strMealThumb}${preview ? '/preview' : ''}`}
         />
      </div>
   )
}