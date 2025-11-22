import { ChevronRight } from "lucide-react"
import TypeBubble from "./TypeBubble"
import LinkButton from "./LinkButton"
import type { Project } from "@/interface/IProject"

interface IProps {
  project: Project
}

const ProjectCard = ({ project }: IProps) => {
  return (
    <div className="section-ultra-dark border border-gray-400 rounded-xl">
      <div className="flex flex-col md:flex-row gap-6 p-6">
        {/* Project Image */}
        <img 
          src={project.image} 
          alt={project.name} 
          className="w-[200px] h-auto md:w-[350px] md:h-auto rounded-lg hover:scale-105 transition-all duration-300 object-fill" 
        />


        {/* Project Details */}
        <section className="flex flex-col text-white gap-4 flex-1">
          {/* Project Name */}
          <h1 className="text-4xl font-bold">{project.name}</h1>
          
          {/* Description */}
          {
            project.description.map((desc, index) => (
              <div key={index} className="flex gap-2">
                {/* <ChevronRight size={26} className="shrink-0 mt-1" /> */}
                <p className="text-gray-200 leading-relaxed">{desc}</p>
              </div>
            ))
          }

          {/* Features */}
          {project.features.map((feature, index) => (
            <div key={index} className="flex gap-2">
              <ChevronRight size={26} className="shrink-0 text-purple-400" />
              <p className="text-gray-200">{feature}</p>
            </div>
          ))}

          {/* Project Tags */}
          <div className="flex flex-wrap gap-2 my-1">
            {project.tags.map((tag, index) => (
              <TypeBubble key={index} type={tag} />
            ))}
          </div>

          {/* Project Links */}
          <div className="flex gap-3 mt-2">
            {project.links.github && (
              <LinkButton buttonType="github" link={project.links.github} />
            )}
            {project.links.demo && (
              <LinkButton buttonType="demo" link={project.links.demo} />
            )}
          </div>
        </section>
      </div>
    </div>
  )
}

export default ProjectCard
