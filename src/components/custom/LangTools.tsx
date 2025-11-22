import { OrbitingCircles } from '@/components/ui/orbiting-circles';
import { FaCss3, FaHtml5, FaJs, FaNodeJs, FaReact } from 'react-icons/fa';
import { RiFirebaseFill, RiTailwindCssFill } from 'react-icons/ri';
import { SiDotnet, SiExpo, SiExpress, SiLeetcode, SiMui, SiShadcnui, SiVite } from 'react-icons/si';
import { TbBrandCSharp, TbBrandReactNative, TbSql } from 'react-icons/tb';
import { BsBootstrap, BsGithub } from 'react-icons/bs';
import { DiDart, DiJava, DiMongodb, DiMysql, DiPython } from 'react-icons/di';
import { CgCPlusPlus } from 'react-icons/cg';
import { FiFigma, FiGitBranch } from 'react-icons/fi';

const LangTools = () => {
  return (
    <div className="flex flex-col md:flex-row flex-wrap">

      {/* ========== Languages & Tools ========== */}
      <div className="relative flex h-[400px] md:h-[500px] w-full md:w-1/3 items-center justify-center overflow-hidden">
        <h1 className="font-bold text-center text-xl md:text-2xl z-20">
          Languages &<br />Tools
        </h1>

        {/* Orbit Track */}
        {/* <div className="absolute h-[230px] w-[230px] rounded-full border border-white/10" /> */}

        <OrbitingCircles radius={100} reverse speed={1}>
          <div className="text-[36px]"><CgCPlusPlus /></div>
          <div className="text-[36px]"><DiJava /></div>
          <div className="text-[36px]"><DiPython /></div>
          <div className="text-[36px]"><DiDart /></div>
          <div className="text-[36px]"><TbBrandCSharp /></div>
          <div className="text-[36px]"><TbSql /></div>
        </OrbitingCircles>

        {/* <div className="absolute h-[330px] w-[330px] rounded-full border border-purple-500/10" /> */}

        <OrbitingCircles radius={150}>
          <div className="text-[42px]"><FiFigma /></div>
          {/* <div className="text-[42px]"><MdPattern /></div> */}
          {/* <div className="text-[42px]"><PiTreeStructure /></div> */}
          <div className="text-[42px]"><FiGitBranch /></div>
          <div className="text-[42px]"><BsGithub /></div>
          <div className="text-[42px]"><SiLeetcode /></div>
        </OrbitingCircles>
      </div>

      {/* ========== Frontend ========== */}
      <div className="relative flex h-[400px] md:h-[500px] w-full md:w-1/3 items-center justify-center overflow-hidden">
        <h1 className="font-bold text-xl md:text-2xl z-20">Frontend</h1>

        {/* <div className="absolute h-[230px] w-[230px] rounded-full border border-white/10" /> */}

        <OrbitingCircles radius={100} reverse speed={1}>
          <div className="text-[36px]"><FaHtml5 /></div>
          <div className="text-[36px]"><FaCss3 /></div>
          <div className="text-[36px]"><FaJs /></div>
          <div className="text-[36px]"><BsBootstrap /></div>
        </OrbitingCircles>

        {/* <div className="absolute h-[330px] w-[330px] rounded-full border border-blue-500/10" /> */}

        <OrbitingCircles radius={150}>
          <div className="text-[42px]"><FaReact /></div>
          <div className="text-[42px]"><SiVite /></div>
          <div className="text-[42px]"><SiMui /></div>
          <div className="text-[42px]"><RiTailwindCssFill /></div>
          <div className="text-[42px]"><SiShadcnui /></div>
          <div className="text-[42px]"><TbBrandReactNative /></div>
          <div className="text-[42px]"><SiExpo /></div>
        </OrbitingCircles>
      </div>

      {/* ========== Backend ========== */}
      <div className="relative flex h-[400px] md:h-[500px] w-full md:w-1/3 items-center justify-center overflow-hidden">
        <h1 className="font-bold text-xl md:text-2xl z-20">Backend</h1>

        {/* <div className="absolute h-[230px] w-[230px] rounded-full border border-white/10" /> */}

        <OrbitingCircles radius={100} reverse speed={1}>
          <div className="text-[36px]"><DiMongodb /></div>
          <div className="text-[36px]"><DiMysql /></div>
          <div className="text-[36px]"><RiFirebaseFill /></div>
        </OrbitingCircles>

        {/* <div className="absolute h-[330px] w-[330px] rounded-full border border-green-500/10" /> */}

        <OrbitingCircles radius={150}>
          <div className="text-[42px]"><FaNodeJs /></div>
          <div className="text-[42px]"><SiExpress /></div>
          <div className="text-[42px]"><SiDotnet /></div>
        </OrbitingCircles>
      </div>

    </div>
  )
}

export default LangTools