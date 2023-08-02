import { createContext } from 'react'
import IMealsData from '../interfaces/IMealsData'

const MealsContext = createContext<IMealsData>({
   ingredients: [],
   areas: [],
   categories: [],
   trending: []
})

export default MealsContext
