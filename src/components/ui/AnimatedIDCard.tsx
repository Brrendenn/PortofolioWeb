import { motion } from "framer-motion";

export const AnimatedIDCard = () => (
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
    <div className="w-80 h-60 bg-gradient-to-br from-zinc-500 to-zinc-700 dark:from-zinc-400 dark:to-zinc-200 rounded-lg shadow-lg overflow-hidden relative">
      <div className="absolute top-3 left-3 w-28 h-28 rounded-full overflow-hidden border-2 border-white/30 dark:border-b-gray-400 bg-white/10">
        <img
          src="/images/PasFoto.jpg"
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

      <div className="absolute top-4 right-4 text-white dark:text-black text-right">
        <div className="text-sm font-light tracking-wide">DEVELOPER ID</div>
      </div>

      <div className="absolute bottom-4 left-4 text-white dark:text-black">
        <div className="text-3xl font-bold">Brandon</div>
        <div className="text-md opacity-90">Web Developer</div>
        <div className="text-sm opacity-75 mt-1">Tangerang, Indonesia</div>
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
