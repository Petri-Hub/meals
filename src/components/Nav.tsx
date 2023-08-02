import { useContext } from 'react'
import NavItem from './NavItem'
import * as NavigationMenu from '@radix-ui/react-navigation-menu'
import MealsContext from '../context/MealsContext'
import CategoriesGalery from './CategoriesGallery'
import IngredientsGallery from './IngredientsGallery'

export default function Nav() {
   const { ingredients, categories } = useContext(MealsContext)

   return (
      <NavigationMenu.Root
         delayDuration={0}
         className='px-4 md:px-8 lg:px-16 text-xs md:text-sm border-b border-solid border-zinc-200'
      >
         <NavigationMenu.List className='flex md:gap-x-12 md:justify-start justify-between'>
            <NavItem title='Categories'>
               <CategoriesGalery
                  categories={categories}
               />
            </NavItem>

            <NavItem title='Areas'>Areas</NavItem>
            <NavItem title='Ingredients'>
               <IngredientsGallery ingredients={ingredients.slice(0, 12)} />
            </NavItem>
         </NavigationMenu.List>
      </NavigationMenu.Root>
   )
}
