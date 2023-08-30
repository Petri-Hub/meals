import * as NavigationMenu from '@radix-ui/react-navigation-menu'
import { HiChevronDown } from 'react-icons/hi'

interface NavItemProps {
   children: React.ReactNode
   title: string
}

export default function NavItem({ children, title }: NavItemProps) {
   return (
      <NavigationMenu.Item className='group'>
         {/* Trigger */}
         <NavigationMenu.Trigger className='flex gap-x-2 py-3 font-medium items-center cursor-pointer'>
            {title}
            <HiChevronDown className='duration-200 group-hover:rotate-180' />
         </NavigationMenu.Trigger>

         {/* Menu */}
         <NavigationMenu.Content className='z-10 mt-4 animate-navShow origin-top-left absolute p-4 bg-white rounded shadow-xl'>
            {children}
            <div className='bg-red w-4 h-4 rotate-45 absolute top-0 bg-white left-8 -translate-x-1/2 -translate-y-1/2'></div>
         </NavigationMenu.Content>
      </NavigationMenu.Item>
   )
}
