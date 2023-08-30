import FancyBorder from "./FancyBorder";
import { CgSearch } from 'react-icons/cg'

export default function SearchSection() {
   return (
      <section className=" relative h-80 mx-4 flex items-center justify-center gap-y-4 flex-col md:mx-8 lg:mx-16 py-8">
         <FancyBorder opacity="opacity-100" color="border-zinc-300" />

         <h3 className="font-brand text-3xl">Searching for something?</h3>
         <p className="text-zinc-400">Try to find it in our collection!</p>
         <div className="rounded-full bg-zinc-100 px-4 flex items-center gap-x-6">
            <CgSearch />
            <input
               className="py-4 w-96 outline-none bg-transparent"
               placeholder="Your stomach desire..."
               type="text"
            />
         </div>
      </section>
   )
}