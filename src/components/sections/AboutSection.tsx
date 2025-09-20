import { motion, type Variants } from "framer-motion";
import { FaLaptopCode, FaCity } from "react-icons/fa";

const AboutSection = () => {
  type ReactIconProps = {
    className?: string;
  };

  type InfoCardProps = {
    icon: React.ReactNode;
    title: string;
    text: string;
  };

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

  const ReactIcon = ({ className }: ReactIconProps) => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="-11.5 -10.23174 23 20.46348"
      className={className}
      aria-hidden="true"
    >
      <circle cx="0" cy="0" r="2.05" fill="#61DAFB"></circle>
      <g stroke="#61DAFB" strokeWidth="1" fill="none">
        <ellipse rx="11" ry="4.2"></ellipse>
        <ellipse rx="11" ry="4.2" transform="rotate(60)"></ellipse>
        <ellipse rx="11" ry="4.2" transform="rotate(120)"></ellipse>
      </g>
    </svg>
  );

  const BookOpenIcon = ({ className }: ReactIconProps) => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth={1.5}
      stroke="currentColor"
      className={className}
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M12 6.042A8.967 8.967 0 006 3.75c-1.052 0-2.062.18-3 .512v14.25A8.987 8.987 0 016 18c2.305 0 4.408.867 6 2.292m0-14.25a8.966 8.966 0 016-2.292c1.052 0 2.062.18 3 .512v14.25A8.987 8.987 0 0018 18a8.967 8.967 0 00-6 2.292m0-14.25v14.25"
      />
    </svg>
  );

  const MapPinIcon = ({ className }: ReactIconProps) => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth={1.5}
      stroke="currentColor"
      className={className}
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z"
      />
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z"
      />
    </svg>
  );

  const InfoCard = ({ icon, title, text }: InfoCardProps) => (
    <div className="flex items-center gap-4 p-4 bg-gray-100 dark:bg-zinc-800 rounded-lg shadow-sm">
      <div className="text-zinc-500 dark:text-zinc-400">{icon}</div>
      <div>
        <h4 className="font-semibold text-gray-700 dark:text-gray-300">
          {title}
        </h4>
        <p className="text-gray-600 dark:text-gray-400">{text}</p>
      </div>
    </div>
  );

  const AnimatedIDCard = () => (
    <motion.div
      className="relative"
      initial={{ y: 0, rotate: 0 }}
      animate={{
        y: [0, -10, 0],
        rotate: [0, 2, -2, 0],
      }}
      transition={{
        duration: 4,
        repeat: Infinity,
        ease: "easeInOut",
      }}
    >
      <div className="w-80 h-60 bg-gradient-to-br from-zinc-500 to-zinc-700 rounded-lg shadow-lg overflow-hidden relative">
        <div className="absolute top-3 left-3 w-28 h-28 rounded-full overflow-hidden border-2 border-white/30 bg-white/10">
          <img
            src="/images/mypic.jpeg"
            alt="Brandon Profile"
            className="w-full h-full object-cover"
            onError={(e) => {
              (e.target as HTMLImageElement).style.display = "none";
              const parent = (e.target as HTMLImageElement).parentElement;
              if (parent) {
                parent.innerHTML =
                  '<div class="w-full h-full bg-white/20 flex items-center justify-center text-white text-xl font-bold">B</div>';
              }
            }}
          />
        </div>

        <div className="absolute top-4 right-4 text-white text-right">
          <div className="text-sm font-light tracking-wide">DEVELOPER ID</div>
        </div>

        <div className="absolute bottom-4 left-4 text-white">
          <div className="text-3xl font-bold">Brandon</div>
          <div className="text-md opacity-90">Web Developer</div>
          <div className="text-sm opacity-75 mt-1">Jakarta, Indonesia</div>
        </div>

        <div className="absolute top-2 right-4 w-6 h-6 bg-white/10 rounded-full"></div>
        <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-white/20 to-white/40"></div>
        <div className="absolute top-0 right-0 w-20 h-20 bg-white/5 rounded-full -translate-y-10 translate-x-10"></div>
      </div>

      <div className="absolute -top-8 left-1/2 transform -translate-x-1/2">
        <div className="w-1 h-8 bg-gray-300 dark:bg-gray-600"></div>
        <div className="w-3 h-3 bg-gray-400 dark:bg-gray-500 rounded-full -mt-1 -ml-1"></div>
      </div>
    </motion.div>
  );

  return (
    <section
      id="about"
      className="w-full bg-white dark:bg-zinc-900 py-20 md:py-32 overflow-hidden"
    >
      <motion.div
        variants={containerVariants}
        whileInView="visible"
        viewport={{ once: false, margin: "-100px " }}
        initial="hidden"
        className="container mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center px-8"
      >
        <motion.div
          variants={itemVariants}
          className="text-zinc-700 dark:text-zinc-300"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-zinc-900 dark:text-white mb-4">
            About Me
          </h2>
          Hello! I'm Brandon, an aspiring web developer with a great passion for
          learning and building new things for the web. I'm currently on the
          exciting path of turning my academic knowledge into real-world
          experience. As a university student about to begin my first
          internship, I'm diving headfirst into modern web technologies like{" "}
          <span className="relative group font-bold text-[#61DAFB] cursor-pointer">
            React.
            <ReactIcon
              className="
                  absolute left-full top-1/2 ml-2 w-5 h-5 
                  -translate-y-1/2 
                  opacity-0 group-hover:opacity-100 
                  scale-90 group-hover:scale-100 
                  transition-all duration-200 ease-in-out
                "
            />
          </span>{" "}
          <p>
            I am driven by a strong curiosity to understand how to create
            engaging, user-friendly applications from the ground up. I'm eager
            to tackle new challenges, contribute to meaningful projects, and
            grow as a developer. This portfolio marks the beginning of my
            journey, and I’m excited for what lies ahead.
          </p>
          <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            <InfoCard
              icon={<FaLaptopCode className="w-6 h-6" />}
              title="Learning"
              text="Next.js & TypeScript"
            />
            <InfoCard
              icon={<FaCity className="w-6 h-6" />}
              title="Location"
              text="Tangerang, Indonesia"
            />
          </div>
        </motion.div>

        <motion.div
          variants={itemVariants}
          className="flex justify-center items-center"
        >
          <AnimatedIDCard />
        </motion.div>
      </motion.div>
    </section>
  );
};

export default AboutSection;
