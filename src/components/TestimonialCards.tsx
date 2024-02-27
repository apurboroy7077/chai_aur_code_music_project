"use client";

import TestimonialData from "@/data/TestimonialData";
import { InfiniteMovingCards } from "./ui/infinite-moving-cards";

const TestimonialCards = () => {
  return (
    <div className="h-[40rem] w-full dark:bg-black dark:bg-grid-white/[0.2] relative flex flex-col items-center justify-center overflow-hidden">
      <h2 className="text-[2rem] font-bold opacity-[0.7]">
        Hear Our Harmony: Voices of Success
      </h2>
      <div className=" flex justify-center w-full overflow-hidden px-4 sm:px-6 lg:px-8">
        <div className="w-full max-w-6xl">
          <InfiniteMovingCards
            items={TestimonialData}
            direction="right"
            speed="slow"
          />
        </div>
      </div>
    </div>
  );
};

export default TestimonialCards;
