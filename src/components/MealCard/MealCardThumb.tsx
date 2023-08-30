import useMealCardContext from "../../hooks/useMealCardContext";
import FancyBorder from "../FancyBorder";

type Props = {
   preview?: boolean
}

export default function MealCardThumb({ preview = false }: Props) {
   return (
      <div className='w-full h-full absolute inset-0 overflow-hidden group' >
         <img
            className='w-full h-full object-cover cursor-pointer'
            src={`${useMealCardContext().strMealThumb}${preview ? '/preview' : ''}`}
         />
         <div className="bg-gradient-to-t from-black to-transparent absolute top-0 w-full h-full opacity-40"></div>
         <FancyBorder topRight={false} bottomLeft={false}/>
      </div>
   )
}