import ContactForm from "@/components/custom/ContactForm";
import { FlickeringGrid } from "@/components/ui/flickering-grid";
import { ShineBorder } from "@/components/ui/shine-border";
import { TypewriterEffect } from "@/components/ui/typewriter-effect";
import { slideVariants } from "@/utils/SlidingAnimation";
import { motion } from "motion/react";
import { DiGithubBadge } from "react-icons/di";
import { TbBrandLinkedinFilled } from "react-icons/tb";

const words = [{ text: "Contact", className: "text-white" }];

const Contact = () => {
  const direction = 1;

  return (
    <motion.div
      className="relative min-h-screen text-white flex flex-col gap-8 p-4 overflow-hidden"
      custom={direction}
      variants={slideVariants}
      initial="hidden"
      animate="visible"
      exit="exit"
    >
      {/* Background Grid */}
      <FlickeringGrid
        className="absolute w-full inset-0 -z-10 mask-[radial-gradient(450px_circle_at_center,white,transparent)]"
        squareSize={4}
        gridGap={6}
        // color="oklch(71.4% 0.203 305.504)"
        color="#59168b"
        maxOpacity={1}
        flickerChance={0.5}
      />

      {/* Heading */}
      <TypewriterEffect
        words={words}
        className="my-3 text-2xl md:text-3xl"
      />

      {/* Contact Form */}
      <div className="flex justify-center z-40">
        <div className="relative">
          {/* Shine Border */}
          <ShineBorder
            shineColor={["#A07CFE", "#FE8FB5", "#FFBE7B"]}
            className="absolute inset-0 rounded-xl pointer-events-none z-10"
            duration={10}
          />
          {/* Actual Form */}
          <ContactForm />
        </div>
      </div>

      {/* Social Accounts */}
      <div className="flex flex-col justify-center items-center">
        <h1 className="text-2xl text-white">Feel Free To Contact By Different Social Apps</h1>
        <div className="flex flex-wrap gap-2 mt-3 items-baseline text-center">
          <div className="text-[65px] cursor-pointer hover:-translate-y-1 hover:text-[#FE8FB5] transition-all" onClick={() => window.open("https://github.com/Mo-Wael", "_blank")}><DiGithubBadge /></div>
          <div className="text-[60px] cursor-pointer hover:-translate-y-1 hover:text-[#FE8FB5] transition-all" onClick={() => window.open("https://www.linkedin.com/in/mohaemd-wael/", "_blank")}><TbBrandLinkedinFilled /></div>
        </div>
      </div>


    </motion.div>
  );
};

export default Contact;
