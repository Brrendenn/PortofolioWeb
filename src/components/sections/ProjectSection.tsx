import { motion, type Variants } from "framer-motion";
import { FaLink } from "react-icons/fa"; 

const projects = [
  {
    title: "DevLink",
    description: "DevLink is a versatile developer tool designed to streamline the creation of personalized link-sharing platforms. It combines a robust backend API with a sleek, component-driven frontend, enabling rapid development of scalable, secure, and visually consistent web applications.",
    imageUrl: "/images/DevLink.png",
    liveLink: "https://devlink-project.vercel.app/", 
    tags: ["Next.js", "Node.js", "Express", "TypeScript", "PostgreSQL"],
  },
  {
    title: "Company Profile Website",
    description: "A sleek, responsive company profile portfolio to showcase projects, built with Next and Framer Motion for smooth animations.",
    imageUrl: "/images/ptpck.png",
    liveLink: "https://ptpck.com",
    tags: ["Next.js", "TailwindCSS", "Framer Motion"],
  },
  {
    title: "I-Tung",
    description: "A client-side expense tracker designed for straightforward financial management. This application allows users to add transactions, which are automatically categorized as income or expenses. It features a dashboard that displays the current balance, total income, and total expenses, along with a complete transaction list where entries can be deleted.",
    imageUrl: "/images/I-Tung.png",
    liveLink: "https://i-tung-expense-tracker.vercel.app/",
    tags: ["React.js", "Node.js", "TailwindCSS", "ClerkAuth"],
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
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {projects.map((project) => (
            <motion.div key={project.title} variants={itemVariants}>
              <div className="bg-zinc-100 dark:bg-zinc-800 rounded-lg overflow-hidden shadow-lg h-full flex flex-col group">
                <div className="relative overflow-hidden">
                   <img
                    src={project.imageUrl}
                    alt={project.title}
                    className="w-full h-56 object-cover transform transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center gap-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                     <a href={project.liveLink} target="_blank" rel="noopener noreferrer" className="text-white hover:text-zinc-400 p-2 rounded-full bg-zinc-700 bg-opacity-50 transition-colors">
                        <FaLink size={24} />
                     </a>
                  </div>
                </div>

                <div className="p-6 flex flex-col flex-grow">
                  <h3 className="text-xl font-bold text-zinc-900 dark:text-white mb-2">{project.title}</h3>
                  <p className="text-zinc-600 dark:text-zinc-400 text-sm mb-4 flex-grow">
                    {project.description}
                  </p>
                  
                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag) => (
                      <span key={tag} className="bg-zinc-600 text-white dark:bg-zinc-200 dark:text-zinc-800 text-xs font-semibold px-2.5 py-1 rounded-full">
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default ProjectSection;