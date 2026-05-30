import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useState, useEffect } from "react";
import { FaFileDownload } from "react-icons/fa";
import { InteractiveGridPattern } from "@/components/ui/interactive-grid-pattern";

const HeroSection = () => {
  const [key, setKey] = useState(0);
  const { ref, inView } = useInView({
    threshold: 0.5,
  });

  useEffect(() => {
    if (inView) {
      setKey((prevKey) => prevKey + 1);
    }
  }, [inView]);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.4,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: { y: 0, opacity: 1 },
  };

  return (
    <section
      id="home"
      ref={ref}
      className="relative flex h-screen w-full items-center justify-center overflow-hidden bg-white dark:bg-zinc-950"
    >
      <InteractiveGridPattern
        className="opacity-70"
        squares={[50, 50]}
        width={50}
        height={50}
        squaresClassName="dark:hover:fill-white/20 dark:stroke-white/5 hover:fill-zinc-900/20 stroke-zinc-400/20"
      />
      <motion.div
        key={key}
        variants={containerVariants}
        initial="hidden"
        animate={inView ? "visible" : "hidden"}
        className="flex flex-col items-center justify-center pointer-events-none"
      >
        {/* <div className="absolute inset-0">
          {syntaxElements.map((element, index) => (
            <SyntaxIcon
              key={index}
              icon={element.icon}
              text={element.text}
              className={element.className}
              delay={element.delay}
            />
          ))}
        </div> */}
        <motion.div
          variants={itemVariants}
          className="flex flex-col items-center z-10 pointer-events-auto"
        >
          <div className="mb-6 flex items-center gap-3 rounded-full border border-zinc-200 dark:border-zinc-800 bg-zinc-100/50 dark:bg-zinc-900/50 px-4 py-1.5 text-sm font-medium shadow-sm backdrop-blur-md">
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75"></span>
              <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-500"></span>
            </span>
            <span className="text-zinc-600 dark:text-zinc-300">
              Computer Science Student
            </span>
          </div>

          <h1 className="text-center font-extrabold tracking-tight text-5xl md:text-7xl lg:text-8xl text-zinc-900 dark:text-white mb-6">
            Nicholas Brandon Chang
          </h1>

          <p className="max-w-2xl text-center text-lg md:text-xl text-zinc-500 dark:text-zinc-400 mb-10">
            Crafting scalable enterprise applications and interactive web
            experiences.
          </p>

          <div className="flex flex-wrap items-center justify-center gap-4">
            <button
              ref={(el) => {
                if (el) {
                  el.addEventListener("click", () => {
                    const projectsSection = document.getElementById("projects");
                    if (projectsSection) {
                      projectsSection.scrollIntoView({ behavior: "smooth" });
                    }
                  });
                }
              }}
              className="px-6 py-3 rounded-full bg-zinc-900 text-white dark:bg-white dark:text-zinc-900 font-semibold hover:scale-105 transition-transform"
            >
              View My Work
            </button>
            <a
              href="/resume/Nicholas_Brandon_Chang-Resume.pdf"
              download
              className="flex items-center gap-2 px-6 py-3 rounded-full border border-zinc-200 dark:border-zinc-800 bg-white/50 dark:bg-zinc-900/50 text-zinc-900 dark:text-white font-semibold hover:bg-zinc-100 dark:hover:bg-zinc-800 transition-colors backdrop-blur-sm"
            >
              <FaFileDownload />
              Resume
            </a>
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default HeroSection;
