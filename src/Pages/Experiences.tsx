import { motion } from "motion/react";
import { slideVariants } from "@/utils/SlidingAnimation";
import LangTools from "@/components/custom/LangTools";
import { Globe } from "@/components/ui/globe";
import { Suspense, useRef } from "react";
import Card from "@/components/custom/Card";
import { TypewriterEffect } from "@/components/ui/typewriter-effect";

const words = [
  {
    text: "Experiences",
    className: "text-white"
  },
];

const Experiences = () => {
  const direction = 1;
  const craftingContainer = useRef<HTMLDivElement>(null);

  return (
    <motion.div
      className="min-h-screen text-white flex flex-col gap-8 bg-cover bg-center bg-no-repeat bg-galaxy p-4"
      custom={direction}
      variants={slideVariants}
      initial="hidden"
      animate="visible"
      exit="exit"
    >
      <TypewriterEffect words={words} className='mt-3 text-2xl md:text-3xl' />
      
      <LangTools />

      <div className="flex flex-col lg:flex-row items-center justify-between max-w-6xl mx-auto gap-8 w-full">
        {/* Crafting Section */}
        <div className="flex-1 h-64 md:h-72 bg-linear-to-r from-[#0C2B4E] to-gray-900 rounded-2xl relative overflow-hidden border border-gray-600 p-6">
          <div
            ref={craftingContainer}
            className="relative flex items-center justify-center h-full w-full overflow-hidden"
          >
            <p className="text-4xl md:text-5xl text-gray-300 font-bold text-center">
              Coding Is Craft
            </p>

            <Card
              text="Design Pattern"
              style={{ rotate: "12deg", top: "18%", left: "12%" }}
              containerRef={craftingContainer}
            />
            <Card
              text="DS&A"
              style={{ rotate: "-18deg", top: "65%", left: "68%" }}
              containerRef={craftingContainer}
            />
            <Card
              text="UI/UX"
              style={{ rotate: "70deg", top: "32%", left: "50%" }}
              containerRef={craftingContainer}
            />
            <Card
              text="REST_API"
              style={{ rotate: "-40deg", top: "55%", left: "14%" }}
              containerRef={craftingContainer}
            />
            <Card
              text="Problem Solving"
              style={{ rotate: "22deg", top: "14%", left: "22%" }}
              containerRef={craftingContainer}
            />
            <Card
              text="JWT"
              style={{ rotate: "64deg", top: "45%", left: "38%" }}
              containerRef={craftingContainer}
            />
          </div>

        </div>
        
        {/* Globe Section */}
        <div className="flex-1 max-w-md">
          <div className="z-10 mb-6">
            <p className="mt-2 mb-2 text-xl font-semibold">Time Zone</p>
            <p className="text-neutral-400 text-sm md:text-base text-pretty">
              I'm based in Egypt, and open to work worldwide
            </p>
          </div>
          <Suspense fallback={<div className="w-full h-80 bg-gray-800 rounded-lg animate-pulse" />}>
            <Globe />
          </Suspense>
        </div>
      </div>
    </motion.div>
  );
};

export default Experiences;
