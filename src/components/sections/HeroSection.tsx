import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useState, useEffect } from "react";
import TextComponent from "../ui/TextComponent";
import { FaGithub, FaInstagram, FaLinkedin } from "react-icons/fa";

type SyntaxIconProps = {
  icon: string;
  text: string;
  className?: string;
  delay: number;
};

const SyntaxIcon = ({ icon, text, className, delay }: SyntaxIconProps) => {
  return (
    <motion.div
      className={`absolute items-center gap-2 p-2 px-3 bg-gray-800 bg-opacity-80 backdrop-blur-sm border border-gray-700 rounded-lg shadow-lg ${className}`}
      initial={{ opacity: 0, scale: 0.5, y: 20 }}
      animate={{ opacity: 1, scale: 1, y: 0 }}
      transition={{
        type: "spring",
        stiffness: 260,
        damping: 20,
        delay: delay,
      }}
    >
      <span className="text-lg md:text-xl font-mono text-zinc-200 dark:text-zinc-600">
        {icon}
      </span>
      <span className="text-lg md:text-xl text-zinc-100 dark:text-zinc-500">
        {text}
      </span>
    </motion.div>
  );
};

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

  const syntaxElements = [
    {
      icon: "</>",
      text: "HTML",
      className: 'flex top-[15%] left-[10%] -rotate-15 md:top-[15%] md:left-[20%]',
      delay: 0.1,
    },
    {
      icon: "{}",
      text: "CSS",
      className: 'hidden md:flex top-[30%] right-[15%] rotate-10',
      delay: 0.2,
    },
    {
      icon: "()=>{}",
      text: "JavaScript",
      className: 'flex bottom-[20%] left-[5%] rotate-8 md:bottom-[20%] md:left-[10%]',
      delay: 0.3,
    },
    {
      icon: "<R>",
      text: "React",
      className: 'flex top-[30%] right-[10%] -rotate-12 md:top-[60%] md:right-[40%]',
      delay: 0.4,
    },
    {
      icon: "npm",
      text: "Node",
      className: 'hidden md:flex bottom-[25%] right-[20%] rotate-15',
      delay: 0.5,
    },
  ];

  return (
    <section
      id="home"
      ref={ref}
      className="relative w-full h-screen flex flex-col items-center justify-center text-center p-4 overflow-hidden"
    >
      <motion.div
        key={key}
        variants={containerVariants}
        initial="hidden"
        animate={inView ? "visible" : "hidden"}
        className="flex flex-col items-center justify-center"
      >
        <div className="absolute inset-0 z-0">
          {syntaxElements.map((element, index) => (
            <SyntaxIcon
              key={index}
              icon={element.icon}
              text={element.text}
              className={element.className}
              delay={element.delay}
            />
          ))}
        </div>
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
