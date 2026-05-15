import { motion, type Variants } from "framer-motion";
import GitHubCalendar from "react-github-calendar";
import { cn } from "@/lib/utils";
import { Marquee } from "../ui/marquee";

const technology = [
  { name: "React", imgSrc: "/icons/react.svg" },
  { name: "JavaScript", imgSrc: "/icons/javascript.svg" },
  { name: "Tailwind CSS", imgSrc: "/icons/tailwindcss.svg" },
  { name: "Next", imgSrc: "/icons/nextdotjs.svg" },
  { name: "Git", imgSrc: "/icons/git.svg" },
  { name: "Figma", imgSrc: "/icons/figma.svg" },
  { name: "Java", imgSrc: "/icons/java.svg" },
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

  const firstRow = technology.slice(0, technology.length / 2);
  const secondRow = technology.slice(technology.length / 2);

  const ReviewCard = ({ name, img }: { name: string; img: string }) => {
    return (
      <figure
        className={cn(
          "relative h-40 w-52 cursor-pointer overflow-hidden rounded-xl border p-4",
          "border-gray-950/[.1] bg-gray-950/[.01] hover:bg-gray-950/[.05]",
          "dark:border-gray-50/[.1] dark:bg-gray-50/[.10] dark:hover:bg-gray-50/[.15]",
          "flex flex-col items-center justify-center text-center",
        )}
      >
        <div>
          <figcaption className="text-lg font-medium dark:text-white mb-4">
            {name}
          </figcaption>
        </div>
        <img className="rounded-full" width="52" height="52" alt="" src={img} />
      </figure>
    );
  };

  return (
    <section
      id="skills"
      className="w-full bg-white dark:bg-zinc-900 py-20 md:py-24"
    >
      <div className="container mx-auto px-8 overflow-hidden">
        <h2 className="text-3xl md:text-4xl font-bold text-zinc-900 dark:text-white mb-12 text-center">
          Technologies I Work With
        </h2>
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, margin: "-100px" }}
          className="flex flex-col items-center justify-center gap-8"
        >
          <motion.div key="tech-row-1" variants={itemVariants}>
            <div className="relative flex w-full flex-col items-center justify-center overflow-hidden">
              <Marquee pauseOnHover className="[--duration:20s]">
                {firstRow.map((tech) => (
                  <ReviewCard img={tech.imgSrc} key={tech.name} {...tech} />
                ))}
              </Marquee>
              <div className="from-background pointer-events-none absolute inset-y-0 left-0 w-1/4 bg-gradient-to-r"></div>
              <div className="from-background pointer-events-none absolute inset-y-0 right-0 w-1/4 bg-gradient-to-l"></div>
            </div>
          </motion.div>

          <motion.div key="tech-row-2" variants={itemVariants}>
            <div className="relative flex w-full flex-col items-center justify-center overflow-hidden">
              <Marquee pauseOnHover className="[--duration:20s]">
                {secondRow.map((tech) => (
                  <ReviewCard img={tech.imgSrc} key={tech.name} {...tech} />
                ))}
              </Marquee>
              <div className="from-background pointer-events-none absolute inset-y-0 left-0 w-1/4 bg-gradient-to-r"></div>
              <div className="from-background pointer-events-none absolute inset-y-0 right-0 w-1/4 bg-gradient-to-l"></div>
            </div>
          </motion.div>

          <GitHubCalendar username="Brrendenn" />
        </motion.div>
      </div>
    </section>
  );
};

export default TechSection;
