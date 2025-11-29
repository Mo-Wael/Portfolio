// AboutPage.tsx
import Navbar from '@/components/custom/Navbar'
import { ShimmerButton } from '@/components/ui/shimmer-button'
import { slideVariants } from '@/utils/SlidingAnimation'
import { motion } from "framer-motion"
import React from 'react'
import { useNavigate } from 'react-router-dom'

const AboutPage = () => {
  const navigate = useNavigate();
  const direction = 0;

  return (
    <>
      <Navbar />
      <motion.section
        id="Hero"
        className=" min-h-screen flex flex-col items-center justify-center gap-12 bg-cover bg-center bg-no-repeat relative p-6 bg-galaxy2"
        custom={direction}
        variants={slideVariants}
        initial="hidden"
        animate="visible"
        exit="exit"
      >

        {/* Dark overlay */}
        <div className="absolute inset-0 bg-black/60"></div>

        {/* Header */}
        <motion.header
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.6 }}
          className="relative z-10 mb-4 flex flex-col items-center gap-4 text-center"
        >
          {/* Circular Image with Glow */}
          <motion.div
            initial={{ opacity: 0, scale: 0.85 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="p-1 rounded-full 
              bg-white/10 backdrop-blur-3xl 
              shadow-[0_0_35px_5px_rgba(99,102,241,0.35)]
            "
          >
            <img
              src="/Mo.png"
              alt="Portrait of Mohamed Wael"
              className="w-50 md:w-56 lg:w-72 xl:w-80 rounded-full"
            />
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="text-white font-bold text-4xl md:text-4xl lg:text-5xl"
          >
            Mohamed Wael
          </motion.h1>

          <motion.h3
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="text-white font-semibold text-xl md:text-2xl lg:text-3xl"
          >
            Software Developer
          </motion.h3>
        </motion.header>

        {/* About Me */}
        <ArticleBox title="About Me">
          <p className="text-gray-100 fs-xl leading-relaxed">
            Alsalam Alaykum! 👋 <br />
            I'm Mohamed Wael, a recent graduate of the Faculty of Computers 
            and Artificial Intelligence at Cairo University, GPA: 3.09/4.00.
          </p>

          <p className="text-gray-100 fs-xl leading-relaxed">
            Passionate about learning modern technologies, building distinctive 
            projects, and always staying up-to-date with the tech world.
          </p>
        </ArticleBox>

        {/* CTA */}
        <ArticleBox title="Call To Action">
          <p className="text-gray-100 fs-xl leading-relaxed">
            Let’s build something impactful together — feel free to connect with me
            or explore my CV for more details.
          </p>

          <div className="flex flex-col sm:flex-row gap-6 w-full mt-2">
            <ShimmerButton
              className="shadow-2xl flex-1 fs-xl"
              onClick={() => window.open("/Mohamed_Wael_CV.pdf", "_blank")}
            >
              View CV
            </ShimmerButton>

            <ShimmerButton
              className="shadow-2xl flex-1 fs-xl"
              onClick={() => navigate('/Contact')}
            >
              Contact Me
            </ShimmerButton>
          </div>
        </ArticleBox>

      </motion.section>
    </>
  )
}

export default AboutPage



/* Reusable Component */
const ArticleBox = ({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) => (
  <motion.article
    initial={{ opacity: 0, y: 60 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, amount: 0.35 }}
    transition={{ duration: 0.9 }}
    className="
      relative z-10 section-light-glass w-full max-w-4xl mx-auto 
      space-y-3 p-5 rounded-xl bg-white/10 backdrop-blur-md
    "
  >
    <h5 className="text-white text-3xl md:text-4xl font-semibold">
      {title}
    </h5>

    {children}
  </motion.article>
);
