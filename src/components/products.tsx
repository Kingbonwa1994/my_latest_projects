import React from "react";
import { FlipWords } from "../components/ui/flip-words";

export function FlipWordsDemo() {
  const words = ["eCormmerce", "Mobile Apps", "Websites", "Digital Campaigns"];

  return (
    <div className="h-[40rem] mt-8 flex justify-center items-center px-4">
      <div className="text-4xl text-center mx-auto font-normal text-white">
         I Build
        <FlipWords words={words} /> <br />
        <div className="text-center">
        with
        </div>
         <br />
        <div className="text-center">Nextjs, PayloadCMS<br /> and React Native</div>
      </div>
    </div>
  );
}
