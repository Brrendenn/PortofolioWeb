import { motion, type Variants } from "framer-motion";
import ScrollReveal from "../../blocks/TextAnimations/ScrollReveal/ScrollReveal";

const AboutSection = () => {

  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
      },
    },
  };

  const itemVariants: Variants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.6,
        ease: [0.42, 0, 0.58, 1],
      },
    },
  };

  return (
    <section
      id="about"
      className="w-full bg-white dark:bg-zinc-900 py-20 md:py-32 overflow-hidden"
    >
      <motion.div
        variants={containerVariants}
        whileInView="visible"
        viewport={{ once: false, margin: "-100px "}}
        initial="hidden"
        className="container mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center px-8"
      >
        <motion.div variants={itemVariants} className="text-zinc-700 dark:text-zinc-300">
          <h2 className="text-3xl md:text-4xl font-bold text-zinc-900 dark:text-white mb-4">
            About Me
          </h2>
          <ScrollReveal
            baseOpacity={0}
            enableBlur={true}
            baseRotation={5}
            blurStrength={10}
            textClassName="dark:text-zinc-300"
          >
            Hello! I'm Brandon, an aspiring web developer with a great passion
            for learning and building new things for the web. I'm currently on
            the exciting path of turning my academic knowledge into real-world
            experience. As a university student about to begin my first
            internship, I'm diving headfirst into modern web technologies like
            React. I am driven by a strong curiosity to understand how to create
            engaging, user-friendly applications from the ground up. I'm eager
            to tackle new challenges, contribute to meaningful projects, and
            grow as a developer. This portfolio marks the beginning of my
            journey, and I’m excited for what lies ahead.
          </ScrollReveal>
        </motion.div>

        <motion.div
          variants={itemVariants}
          className="flex justify-center items-center"
        >
          <div className="w-full max-w-sm bg-zinc-200 dark:bg-zinc-700 rounded-lg shadow-xl p-4 transform transition-transform duration-500 hover:scale-105">
            <img
              src="/profile-pic.jpg"
              alt="A picture of Nicholas Brandon Chang"
              className="w-full h-auto object-cover rounded-md"
              onError={(e) => {
                (e.target as HTMLImageElement).onerror = null;
                (e.target as HTMLImageElement).src =
                  "/images/mypic.jpeg";
              }}
            />
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default AboutSection;
