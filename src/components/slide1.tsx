
import { TypewriterEffectSmooth } from "./ui/typewriter-effect";

export default function SlideOne() {
    const words = [
    {
      text: "My",
      className: "text-red-200", 
    },
    {
      text: "name",
      className: "text-green-200 dark:text-green-400", 
    },
    {
      text: "is",
      className: "text-yellow-500 dark:text-yellow-800", 
    },
    {
      text: "Bonwa,",
      className: "text-purple-500 dark:text-purple-400", 
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
