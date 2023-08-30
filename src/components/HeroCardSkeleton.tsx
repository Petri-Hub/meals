import { twMerge } from "tailwind-merge";
import FancyBorder from "./FancyBorder";

export default function HeroCardSkeleton({ className }: { className: string }) {
   return (
      <div className={twMerge("w-full h-full rounded overflow-hidden  relative cursor-pointer", className)}>

         <div className="w-full h-full bg-zinc-200 animate-pulse"></div>

         <div className="bg-gradient-to-t from-black to-transparent absolute w-full h-full opacity-40"></div>

         <div className="absolute bottom-4 space-y-2 left-5">
            <p className="p-2 py-3 w-36 rounded bg-white"></p>
            <p className="p-2 w-24 rounded bg-white"></p>
         </div>

         <FancyBorder
            topRight={false}
            bottomLeft={false}
         />

      </div>
   )

}