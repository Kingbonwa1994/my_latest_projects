import React from "react";
import { FlipWords } from "../components/ui/flip-words";

export function FlipWordsDemo() {
  const words = ["eCormmerce", "Mobile Apps", "Websites", "Digital Campaigns"];

  return (
    <div className="h-[40rem] flex justify-center items-center px-4">
      <div className="text-4xl mx-auto font-normal text-neutral-600 dark:text-neutral-400">
         I Build
        <FlipWords words={words} /> <br />
        Nextjs, PayloadCMS<br /> and React Native
      </div>
    </div>
  );
}
