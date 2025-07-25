import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useState, useEffect } from "react";
import TextComponent from "../ui/TextComponent";
import { FaGithub, FaInstagram, FaLinkedin } from "react-icons/fa";

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
        staggerChildren: 0.2,
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
      className="w-full h-screen flex flex-col items-center justify-center text-center p-4 overflow-hidden"
    >
      <motion.div
        key={key}
        variants={containerVariants}
        initial="hidden"
        animate={inView ? "visible" : "hidden"}
        className="flex flex-col items-center justify-center"
      >
        <motion.div variants={itemVariants}>
          <TextComponent />
        </motion.div>

        <motion.p
          variants={itemVariants}
          className="text-zinc-500 dark:text-white font-semibold text-lg md:text-xl"
        >
          Aspiring Web Developer
        </motion.p>
        <motion.div
          variants={itemVariants}
          className="flex items-center gap-x-6 mt-4"
        >
          <a
            href="https://github.com/Brrendenn"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub"
            className="text-zinc-400 hover:text-zinc-800 dark:hover:text-white transition-colors"
          >
            <FaGithub size={24} />
          </a>
          <a
            href="https://linkedin.com/in/nicholas-brandon-chang"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
            className="text-zinc-400 hover:text-zinc-800 dark:hover:text-white transition-colors"
          >
            <FaLinkedin size={24} />
          </a>
          <a
            href="https://instagram.com/nicbrandc"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Instagram"
            className="text-zinc-400 hover:text-zinc-800 dark:hover:text-white transition-colors"
          >
            <FaInstagram size={24} />
          </a>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default HeroSection;
