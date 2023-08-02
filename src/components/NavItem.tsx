import * as NavigationMenu from '@radix-ui/react-navigation-menu'
import { HiChevronDown } from 'react-icons/hi'

interface NavItemProps {
   children: React.ReactNode
   title: string
}

export default function NavItem({ children, title }: NavItemProps) {
   return (
      <NavigationMenu.Item>
         {/* Trigger */}
         <NavigationMenu.Trigger className='flex gap-x-2 py-3 font-medium items-center cursor-pointer'>
            {title}
            <HiChevronDown className={`duration-200`} />
         </NavigationMenu.Trigger>

         {/* Menu */}
         <NavigationMenu.Content className='z-10 mt-1 absolute shadow-lg p-4 bg-white rounded border border-solid border-zinc-300'>
            {children}
         </NavigationMenu.Content>
      </NavigationMenu.Item>
   )
}
