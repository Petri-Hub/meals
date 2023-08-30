import { twMerge } from "tailwind-merge"

type Props = {
   topLeft?: boolean
   topRight?: boolean
   bottomLeft?: boolean
   bottomRight?: boolean
   color?: string
   width?: string
   height?: string
   opacity?: string
}

export default function FancyBorder({
   topLeft = true,
   topRight = true,
   bottomLeft = true,
   bottomRight = true,
   color = 'border-white',
   width = 'w-12',
   height = 'h-12',
   opacity = 'opacity-30'
}: Props) {
   return <>

      { topLeft && <div className={twMerge("absolute top-2 left-2 rounded-tl border-dashed border-l-2 border-t-2", width, height, opacity, color)}></div> }
      { topRight && <div className={twMerge("absolute top-2 right-2 rounded-tr border-dashed border-r-2 border-t-2", width, height, opacity, color)}></div> }
      { bottomLeft && <div className={twMerge("absolute bottom-2 left-2 rounded-bl border-dashed border-l-2 border-b-2", width, height, opacity, color)}></div> }
      { bottomRight && <div className={twMerge("absolute bottom-2 right-2 rounded-br border-dashed border-r-2 border-b-2", width, height, opacity, color)}></div> }

   </>
}