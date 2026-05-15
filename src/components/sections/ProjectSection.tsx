import { motion, type Variants } from "framer-motion";
import { CardBody, CardContainer, CardItem } from "@/components/ui/3d-card";

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
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
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
      id="projects"
      className="w-full bg-white dark:bg-zinc-900 py-20 md:py-24"
    >
      <div className="container mx-auto px-8">
        <motion.h2
          initial={{ y: 20, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-3xl md:text-4xl font-bold text-zinc-900 dark:text-white mb-12 text-center"
        >
          My Projects
        </motion.h2>

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
                <CardBody className="bg-gray-50 relative group/card dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] dark:bg-black dark:border-white/[0.2] border-black/[0.1] w-full h-full min-h-[32rem] flex flex-col justify-between rounded-xl p-6 border">
                  <div className="flex flex-col flex-1 gap-4">
                    <CardItem
                      translateZ="50"
                      className="text-xl font-bold text-neutral-600 dark:text-white"
                    >
                      {project.title}
                    </CardItem>

                    <CardItem
                      as="p"
                      translateZ="60"
                      className="text-neutral-500 text-sm max-w-sm mt-2 dark:text-neutral-300"
                    >
                      {project.description}
                    </CardItem>

                    <CardItem translateZ="100" className="w-full mt-4">
                      <img
                        src={project.imageUrl}
                        height="1000"
                        width="1000"
                        className="h-60 w-full object-cover rounded-xl group-hover/card:shadow-xl"
                        alt={project.title}
                      />
                    </CardItem>
                  </div>

                  <div className="flex justify-between items-center mt-8 pt-8">
                    <CardItem
                      translateZ={20}
                      as="a"
                      href={project.liveLink}
                      target="_blank"
                      className="px-4 py-2 rounded-xl text-xs font-normal dark:text-white"
                    >
                      Try now →
                    </CardItem>
                    {!project.isPrivate && (
                      <CardItem
                        translateZ={20}
                        as="a"
                        href={project.githubUrl}
                        target="_blank"
                        className="px-4 py-2 rounded-xl bg-black dark:bg-white dark:text-black text-white text-xs font-bold"
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
