import { motion } from 'motion/react';
import { slideVariants } from '@/utils/SlidingAnimation';
import { Timeline } from '@/components/ui/timeline';
import { TypewriterEffect } from '@/components/ui/typewriter-effect';
import { dummyData } from '@/data/Education';

const words = [
    {
      text: "Education",
      className: "text-white"
    },
  ];

const Education = () => {
    const direction = 1;
  return (
    <motion.div 
        className='min-h-screen text-white flex flex-col bg-cover bg-center bg-no-repeat relative p-6 bg-galaxy'
        custom={direction}
        variants={slideVariants}
        initial="hidden"
        animate="visible"
        exit="exit"
    >
        {/* <div className="bg-space-overlay-light"></div> */}
        {/* <div className="section-light-glass">
        </div> */}
        <TypewriterEffect words={words} className='mt-3 text-2xl md:text-3xl' />
        <div className="relative w-full overflow-clip">
          <Timeline data={dummyData} />
        </div>
    </motion.div>
  )
}

export default Education