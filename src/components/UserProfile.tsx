import { FaRegUserCircle } from "react-icons/fa";
import * as Popover from '@radix-ui/react-popover'
import * as Switch from '@radix-ui/react-switch'
import { BiLogOut } from 'react-icons/bi'

export default function UserProfile() {

   return (
      <Popover.Root>
         <Popover.Trigger>
            <FaRegUserCircle />
         </Popover.Trigger>
         <Popover.Content className="mt-4 w-48 bg-white absolute right-0 shadow-xl animate-fadeDown rounded-lg">

            <div className="flex items-center p-4 gap-x-3 border-b border-solid border-zinc-100">
               <FaRegUserCircle className="text-md font-bold" />
               <p className="text-base font-medium">Guest</p>
            </div>

            <div className="p-4 space-y-4">
               <div className="flex justify-between">
                  <label htmlFor="dark-mode-switch" className="text-sm cursor-pointer">Dark mode</label>
                  <Switch.Root id="dark-mode-switch" className="w-10 data-[state=checked]:bg-green-500 h-6 duration-200 rounded-full bg-zinc-200">
                     <Switch.Thumb className="w-4 h-4 ml-1 rounded-full left-0 relative data-[state=checked]:left-4 duration-200 bg-white block" />
                  </Switch.Root>
               </div>
               <button className="bg-rose-500 rounded flex w-full justify-center p-2 gap-x-4 items-center text-base text-white">
                  <BiLogOut className="text-2xl"/>
                  Logout
               </button>
            </div>
         </Popover.Content>
      </Popover.Root>
   )
}