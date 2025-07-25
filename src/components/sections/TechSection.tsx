import { motion, type Variants } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import GitHubCalendar from "react-github-calendar";

const technology = [
  { name: "React", imgSrc: "/icons/react.svg" },
  { name: "JavaScript", imgSrc: "/icons/javascript.svg" },
  { name: "Tailwind CSS", imgSrc: "/icons/tailwindcss.svg" },
  { name: "Next", imgSrc: "/icons/nextdotjs.svg" },
  { name: "Git", imgSrc: "/icons/git.svg" },
  { name: "Figma", imgSrc: "/icons/figma.svg"}
];

const TechSection = () => {

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
    <section id="skills" className="w-full bg-white dark:bg-zinc-900 py-20 md:py-24">
      <div className="container mx-auto px-8">
        <h2 className="text-3xl md:text-4xl font-bold text-zinc-900 dark:text-white mb-12 text-center">
          Technologies I Work With
        </h2>
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, margin: "-100px"}}
          className="flex flex-wrap justify-center gap-8"
        >
          {technology.map((tech) => {
            return (
              <motion.div key={tech.name} variants={itemVariants}>
                <Card className="w-40 h-40 bg-white dark:bg-zinc-800 rounded-xl shadow-md transition-transform hover:-translate-y-2 hover:shadow-xl">
                  <CardContent className="flex flex-col items-center justify-center h-full p-4">
                    <img
                      src={tech.imgSrc}
                      className="w-16 h-16 mb-2"
                      onError={(e) => {
                        (e.target as HTMLImageElement).onerror = null;
                        (
                          e.target as HTMLImageElement
                        ).src = `https://placehold.co/64x64/e2e8f0/475569?text=${tech.name.charAt(
                          0
                        )}`;
                      }}
                    />
                    <p className="font-semibold text-zinc-700 dark:text-zinc-300">{tech.name}</p>
                  </CardContent>
                </Card>
              </motion.div>
            );
          })}
          <GitHubCalendar username="Brrendenn" />   
        </motion.div>
      </div>
    </section>
  );
};

export default TechSection;
