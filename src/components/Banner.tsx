export default function Banner() {
   return (
      <div className='relative w-full h-96 overflow-hidden'>
         <img
            className='absolute top-0 left-0  w-full h-full object-cover blur-[3px]'
            src='./src/images/banner.jpeg'
            alt=''
         />
         <div className='absolute w-full h-full bg-black top-0 left-0 opacity-40'></div>
         <div className='absolute top-1/2 left-1/2 -translate-x-1/2 flex flex-col gap-y-6 -translate-y-1/2'>
            <h1 className='text-center text-6xl relative tracking-widest uppercase text-medium font-extrabold text-white'>
               Meals
            </h1>
            <p className='font-medium text-white text-xl text-center'>
               The best recipes curated in the world
            </p>
         </div>
      </div>
   )
}
