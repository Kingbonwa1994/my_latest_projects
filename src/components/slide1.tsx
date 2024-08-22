
import { TypewriterEffectSmooth } from "./ui/typewriter-effect";

export default function SlideOne() {
    const words = [
    {
      text: "My",
      className: "text-red-500 dark:text-red-400", 
    },
    {
      text: "name",
      className: "text-green-500 dark:text-green-400", 
    },
    {
      text: "is",
      className: "text-yellow-500 dark:text-yellow-400", 
    },
    {
      text: "Bonwa,",
      className: "text-purple-500 dark:text-purple-400", 
    },
    {
      text: "based",
      className: "text-pink-500 dark:text-pink-400", 
    },
    {
      text: "in",
      className: "text-teal-500 dark:text-teal-400", 
    },
    {
      text: "Johannesburg.",
      className: "text-indigo-500 dark:text-indigo-400", 
    },
   
  ];
  
  return (
    <div className="z-10 flex text-5xl">
              <TypewriterEffectSmooth
          words={words}
        />
    </div>
  )
}
