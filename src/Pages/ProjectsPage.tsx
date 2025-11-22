import { motion } from "motion/react";
import { TypewriterEffect } from "@/components/ui/typewriter-effect";
import { slideVariants } from "@/utils/SlidingAnimation";
import ProjectCard from "@/components/custom/ProjectCard";
import { projects } from "@/data/Projects";


const words = [
  {
    text: "Projects",
    className: "text-white"
  },
];

const ProjectsPage = () => {
  const direction = 1;

  return (
    <motion.div
      className="min-h-screen text-white flex flex-col gap-8 bg-cover bg-center bg-no-repeat bg-galaxy3 p-4"
      custom={direction}
      variants={slideVariants}
      initial="hidden"
      animate="visible"
      exit="exit"
    >
        <TypewriterEffect words={words} className='my-3 text-2xl md:text-3xl' />
        {projects.map(project => (
          <ProjectCard key={project.id} project={project} />
        ))}



    </motion.div>
  )
}

export default ProjectsPage