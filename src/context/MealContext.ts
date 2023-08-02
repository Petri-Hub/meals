import { createContext } from 'react'
import IMeal from '../interfaces/IMeal'

const MealContext = createContext<IMeal | null>(null)

export default MealContext
