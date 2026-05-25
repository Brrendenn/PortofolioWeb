import { motion, type Variants } from "framer-motion";
import { CardBody, CardContainer, CardItem } from "@/components/ui/3d-card";
import { FaLock } from "react-icons/fa";
import { InteractiveGridPattern } from "../ui/interactive-grid-pattern";

interface Project {
  title: string;
  description: string;
  imageUrl: string;
  liveLink: string;
  githubUrl: string;
  tags: string[];
  isPrivate: boolean;
}

const myProjects: Project[] = [
  {
    title: "DevLink",
    description:
      "DevLink is a versatile developer tool designed to streamline the creation of personalized link-sharing platforms. It combines a robust backend API with a sleek, component-driven frontend, enabling rapid development of scalable, secure, and visually consistent web applications.",
    imageUrl: "/images/DevLink.png",
    liveLink: "https://devlink-project.vercel.app/",
    githubUrl: "https://github.com/Brrendenn/devlink-project",
    tags: ["Next.js", "Node.js", "Express", "TypeScript", "PostgreSQL"],
    isPrivate: false,
  },
  {
    title: "Company Profile Website",
    description:
      "A sleek, responsive company profile website designed to highlight services, portfolio items, and brand identity. Built with Next.js, TailwindCSS, and Framer Motion, it delivers fast page loads, polished animated transitions, and a fully mobile-friendly layout for modern business presentation.",
    imageUrl: "/images/ptpck.png",
    liveLink: "https://ptpck.com",
    githubUrl: "https://github.com/Brrendenn/company-web",
    tags: ["Next.js", "TailwindCSS", "Framer Motion"],
    isPrivate: true,
  },
  {
    title: "I-Tung",
    description:
      "This application allows users to add transactions, which are automatically categorized as income or expenses. It features a dashboard that displays the current balance, total income, and total expenses, along with a complete transaction list where entries can be deleted.",
    imageUrl: "/images/I-Tung.png",
    liveLink: "https://i-tung-expense-tracker.vercel.app/",
    githubUrl: "https://github.com/Brrendenn/I-Tung-Expense-Tracker",
    tags: ["React.js", "Node.js", "TailwindCSS", "ClerkAuth"],
    isPrivate: false,
  },
  {
    title: "LearnSphere",
    description:
      'LearnSphere is a "learn-to-earn" decentralized application (dApp) designed to make education in Web3 accessible, engaging, and rewarding. It transforms the complex world of blockchain, the Internet Computer Protocol (ICP), and AI agents into a gamified adventure where users complete quests, earn rewards, and level up their skills.',
    imageUrl: "/images/LearnSphere.jpg",
    liveLink: "https://github.com/Brrendenn/LearnSphere",
    githubUrl: "https://github.com/Brrendenn/LearnSphere",
    tags: [
      "React.js",
      "TailwindCSS",
      "Motoko",
      "Python",
      "Internet Computer",
      "Fetch.ai",
    ],
    isPrivate: false,
  },
  {
    title: "Community Spark",
    description:
      'Community Spark is a full-stack web application designed to help communities track, manage, and visualize local projects and initiatives. Developed with a Laravel backend and a React frontend (using Inertia.js and Tailwind CSS), the app provides a clean interface for users to report and monitor community "issues".',
    imageUrl: "/images/CommunitySpark.png",
    liveLink: "https://community-spark.up.railway.app",
    githubUrl: "https://github.com/Brrendenn/Community-Action-Tracker.git",
    tags: ["PHP Laravel", "TailwindCSS", "React.js", "MySQL"],
    isPrivate: false,
  },
];

const ProjectSection = () => {
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
      id="projects"
      className="relative overflow-hidden w-full bg-zinc-50 dark:bg-zinc-950 py-20 md:py-32"
    >
      <InteractiveGridPattern
        className="absolute inset-0 z-0 opacity-70"
        squares={[50, 50]}
        width={50}
        height={50}
        squaresClassName="dark:hover:fill-white/20 dark:stroke-white/5 hover:fill-zinc-900/20 stroke-zinc-400/20"
      />
      <div className="container mx-auto px-4 sm:px-8 max-w-7xl">
        <motion.div
          initial={{ y: 20, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true, margin: "-100px" }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight bg-gradient-to-r from-zinc-800 to-zinc-500 dark:from-zinc-200 dark:to-zinc-500 bg-clip-text text-transparent">
            Featured Projects
          </h2>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, margin: "-100px" }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 items-stretch"
        >
          {myProjects.map((project) => (
            <motion.div
              key={project.title}
              variants={itemVariants}
              className="h-full w-full"
            >
              <CardContainer className="inter-var h-full w-full">
                <CardBody className="bg-white relative group/card dark:hover:shadow-2xl dark:hover:shadow-blue-500/[0.1] dark:bg-zinc-900/50 border-zinc-200 dark:border-zinc-800 w-full h-full min-h-[32rem] flex flex-col justify-between rounded-2xl p-6 border shadow-sm">
                  <div className="flex flex-col flex-1 gap-4">
                    <CardItem
                      translateZ="50"
                      className="text-xl font-bold text-zinc-800 dark:text-zinc-100"
                    >
                      {project.title}
                    </CardItem>

                    <CardItem
                      as="p"
                      translateZ="60"
                      className="text-zinc-600 text-sm max-w-sm dark:text-zinc-400 line-clamp-3"
                    >
                      {project.description}
                    </CardItem>

                    {/* NEW: Tech Stack Tags mapped here! */}
                    <CardItem
                      translateZ="70"
                      className="flex flex-wrap gap-2 mt-2"
                    >
                      {project.tags.map((tag) => (
                        <span
                          key={tag}
                          className="px-2.5 py-1 text-[10px] font-semibold uppercase tracking-wider text-zinc-600 bg-zinc-100 rounded-md dark:text-zinc-300 dark:bg-zinc-800/80"
                        >
                          {tag}
                        </span>
                      ))}
                    </CardItem>

                    <CardItem translateZ="100" className="w-full mt-auto">
                      <img
                        src={project.imageUrl}
                        height="1000"
                        width="1000"
                        className="h-52 w-full object-cover object-top rounded-xl group-hover/card:shadow-xl border border-zinc-100 dark:border-zinc-800"
                        alt={project.title}
                      />
                    </CardItem>
                  </div>

                  <div className="flex justify-between items-center mt-8 pt-4">
                    <CardItem
                      translateZ={20}
                      as="a"
                      href={project.liveLink}
                      target="_blank"
                      className="px-4 py-2 rounded-xl text-xs font-semibold text-zinc-900 dark:text-white hover:text-blue-500 transition-colors"
                    >
                      View Live →
                    </CardItem>

                    {project.isPrivate ? (
                      <CardItem
                        translateZ={20}
                        className="px-4 py-2 rounded-xl text-xs font-medium text-zinc-400 dark:text-zinc-500 italic flex items-center gap-2"
                      >
                        <FaLock className="text-zinc-400" />
                      </CardItem>
                    ) : (
                      <CardItem
                        translateZ={20}
                        as="a"
                        href={project.githubUrl}
                        target="_blank"
                        className="px-4 py-2 rounded-xl bg-zinc-900 dark:bg-white dark:text-zinc-900 text-white text-xs font-bold hover:scale-105 transition-transform"
                      >
                        GitHub
                      </CardItem>
                    )}
                  </div>
                </CardBody>
              </CardContainer>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default ProjectSection;
