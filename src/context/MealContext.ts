import { createContext } from 'react'
import IMeal from '../interfaces/IMeal'
import IMealReference from '../interfaces/IMealReference'

const MealContext = createContext<IMeal | IMealReference | null>(null)

export default MealContext
