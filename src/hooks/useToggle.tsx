import { useState } from 'react'

export default function useToggle(
   initialState: boolean,
): [boolean, () => void] {
   const [isActive, setActive] = useState<boolean>(initialState)

   const toggleActive = () => setActive(!isActive)

   return [isActive, toggleActive]
}
