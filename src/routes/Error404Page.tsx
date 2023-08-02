import Header from "../components/Header";
import Nav from "../components/Nav";
import { PiSmileySadBold } from 'react-icons/pi'
import { FaArrowLeft } from 'react-icons/fa'
import { Link, useRouteError } from 'react-router-dom'

interface RouterError {
   data: string
   error: Error,
   internal: boolean,
   status: number,
   statusText: string
}

export default function Error404Page() {
   const { status, statusText } = useRouteError() as RouterError

   return (<>
      <Header />
      <Nav />
      <div className="absolute flex flex-col items-center gap-y-4 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">

         <PiSmileySadBold className="text-rose-600 text-8xl" />
         <h1 className="text-black font-bold text-2xl">Oops!</h1>
         <p className="text-lg text-zinc-500">An unexpected error has ocurred.</p>

         <div className="p-2 px-3 flex items-center gap-x-2 bg-zinc-200 rounded">
            <p className="rouded ">{status}</p>
            <p className="border-l border-solid border-zinc-400 pl-2 italic">{statusText}</p>
         </div>

         <Link to={'/'} className="flex items-center gap-x-2 rounded bg-rose-600 hover:bg-rose-700 text-white duration-200 px-4 py-2">
            <FaArrowLeft />
            Go back
         </Link>


      </div>

   </>
   )
}