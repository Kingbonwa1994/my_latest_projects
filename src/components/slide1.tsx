import { Cover } from "./ui/cover"
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
  const words2 = [
    {
      text: "Currently",
      className: "text-orange-500 dark:text-orange-400", 
    },
    {
      text: "working",
      className: "text-lime-500 dark:text-lime-400", 
    },
    {
      text: "on",
      className: "text-rose-500 dark:text-rose-400", 
    },
    {
      text: "numerous",
      className: "text-cyan-500 dark:text-cyan-400", 
    },
    {
      text: "apps.",
      className: "text-violet-500 dark:text-violet-400", 
    },
  ]
  return (
    <div className="flex">
      <Cover>
        <TypewriterEffectSmooth
          words={words}
        />
         <TypewriterEffectSmooth
          words={words2}
        />
      </Cover>
    </div>
  )
}
