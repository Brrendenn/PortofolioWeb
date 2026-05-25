"use client";

import { motion, type Variants } from "framer-motion";
import GitHubCalendar from "react-github-calendar";
import { cn } from "@/lib/utils";
import { Marquee } from "../ui/marquee";
import { AnimatedIDCard } from "../ui/AnimatedIDCard";
import { ReviewCard } from "../ui/ReviewCard";
import { InteractiveGridPattern } from "../ui/interactive-grid-pattern";

const technology = [
  { name: "React", imgSrc: "/icons/react.svg" },
  { name: "JavaScript", imgSrc: "/icons/javascript.svg" },
  { name: "Tailwind CSS", imgSrc: "/icons/tailwindcss.svg" },
  { name: "Next", imgSrc: "/icons/nextdotjs.svg" },
  { name: "Git", imgSrc: "/icons/git.svg" },
  { name: "Figma", imgSrc: "/icons/figma.svg" },
  { name: "Java", imgSrc: "/icons/java.svg" },
];

const firstRow = technology.slice(0, Math.ceil(technology.length / 2));
const secondRow = technology.slice(Math.ceil(technology.length / 2));

const BentoCard = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => (
  <div
    className={cn(
      "relative overflow-hidden rounded-2xl border border-zinc-200 bg-white p-8 dark:border-zinc-800 dark:bg-zinc-900/50 shadow-sm pointer-events-auto",
      className,
    )}
  >
    {children}
  </div>
);

export default function BentoAboutSection() {
  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.2 } },
  };

  const itemVariants: Variants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.6, ease: [0.42, 0, 0.58, 1] },
    },
  };

  return (
    <section
      id="about"
      className="relative overflow-hidden w-full bg-zinc-50 dark:bg-zinc-950 py-20 md:py-32"
    >
      <InteractiveGridPattern
        className="absolute inset-0 z-0 opacity-70"
        squares={[50, 50]}
        width={50}
        height={50}
        squaresClassName="dark:hover:fill-white/20 dark:stroke-white/5 hover:fill-zinc-900/20 stroke-zinc-400/20"
      />
      <div className="container relative z-10 mx-auto px-4 sm:px-8 max-w-6xl pointer-events-none">
        {/* Section Header */}
        <motion.div
          initial={{ y: 20, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true, margin: "-100px" }}
          className="text-center mb-16"
        ></motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, margin: "-100px" }}
          className="grid grid-cols-1 md:grid-cols-3 gap-6 auto-rows-min"
        >
          <motion.div variants={itemVariants} className="md:col-span-2">
            <BentoCard className="h-full flex flex-col justify-center">
              <h3 className="text-2xl font-semibold mb-4 text-zinc-800 dark:text-zinc-200">
                Hi, I'm Brandon.
              </h3>
              <p className="text-zinc-600 dark:text-zinc-400 leading-relaxed mb-6">
                I am an aspiring web developer with a great passion for learning
                and building new things for the web. I'm currently on the
                exciting path of turning my academic knowledge into real-world
                experience. As a university student about to begin my first
                internship, I'm diving headfirst into modern web technologies
                like React.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-auto"></div>
            </BentoCard>
          </motion.div>

          <motion.div variants={itemVariants} className="md:col-span-1">
            <BentoCard className="h-full flex items-center justify-center p-0 overflow-visible bg-transparent border-none dark:bg-transparent shadow-none">
              <AnimatedIDCard />
            </BentoCard>
          </motion.div>

          <motion.div variants={itemVariants} className="md:col-span-3">
            <BentoCard className="flex flex-col items-center justify-center py-12">
              <h4 className="text-sm font-medium tracking-widest text-zinc-500 uppercase mb-8">
                Technologies I Work With
              </h4>

              <div className="relative flex w-full flex-col items-center justify-center overflow-hidden gap-4">
                <Marquee pauseOnHover className="[--duration:20s]">
                  {firstRow.map((tech) => (
                    <ReviewCard img={tech.imgSrc} key={tech.name} {...tech} />
                  ))}
                </Marquee>
                <Marquee reverse pauseOnHover className="[--duration:20s]">
                  {secondRow.map((tech) => (
                    <ReviewCard img={tech.imgSrc} key={tech.name} {...tech} />
                  ))}
                </Marquee>

                <div className="pointer-events-none absolute inset-y-0 left-0 w-1/4 bg-gradient-to-r from-white dark:from-zinc-900/50"></div>
                <div className="pointer-events-none absolute inset-y-0 right-0 w-1/4 bg-gradient-to-l from-white dark:from-zinc-900/50"></div>
              </div>
            </BentoCard>
          </motion.div>

          <motion.div variants={itemVariants} className="md:col-span-3">
            <BentoCard className="flex flex-col items-center justify-center overflow-x-auto">
              <h4 className="text-sm font-medium tracking-widest text-zinc-500 uppercase mb-8">
                Commit Activity
              </h4>
              <GitHubCalendar username="Brrendenn" colorScheme="dark" />
            </BentoCard>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
