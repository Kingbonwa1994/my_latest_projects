
import { TypewriterEffectSmooth } from "./ui/typewriter-effect";

export default function SlideOne() {
    const words = [
    {
      text: "My",
      className: "text-red-900", 
    },
    {
      text: "name",
      className: "text-gradient-to-r py-4 from-purple-500 via-violet-500", 
    },
    {
      text: "is",
      className: "text-gradient-to-r py-4 from-purple-500 via-violet-500", 
    },
    {
      text: "Bonwa,",
      className: "text-gradient-to-r py-4 from-purple-500 via-violet-500", 
    },
    {
      text: "based",
      className: " text-gradient-to-r py-4 from-purple-500 via-violet-500", 
    },
    {
      text: "in",
      className: " text-gradient-to-r py-4 from-purple-500 via-violet-500", 
    },
    {
      text: "Johannesburg.",
      className: " text-gradient-to-r py-4 from-purple-500 via-violet-500", 
    },
   
  ];
  
  return (
    <div className="z-10 flex">
              <TypewriterEffectSmooth
          words={words}
        />
    </div>
  )
}
