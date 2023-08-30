import { useState } from "react"
import { twMerge } from "tailwind-merge"

type Props = React.HTMLAttributes<HTMLParagraphElement> & {
   text: string,
   delay?: number
   className: string
}

export default function TypingText({ text, delay = 50, className }: Props) {
   const [typed, setTyped] = useState<number>(0)

   if (typed < text.length) {
      setTimeout(() => setTyped(typed + 1), delay)
   }

   return (
      <p className={twMerge('flex items-center gap-x-1', className)}>
         <div> {text.slice(0, typed).split("").map(char => <span className="animate-typping">{char}</span>)}</div >
         <span className="w-[2px] inline-block bg-zinc-500 h-4"></span>
      </p >
   )
}