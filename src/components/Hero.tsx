import { motion } from "framer-motion";

const Hero = () => {
  return (
    <div className="relative min-h-screen bg-expo-black flex items-center justify-center overflow-hidden">
      {/* Animated gradient background */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-expo-purple/20 via-expo-black to-expo-black">
        <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-20" />
      </div>
      
      {/* Floating orbs background */}
      <div className="absolute inset-0">
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-2 h-2 bg-expo-cyan rounded-full"
            initial={{ opacity: 0.2 }}
            animate={{
              y: ["0%", "-50%"],
              opacity: [0.2, 0.8, 0.2],
            }}
            transition={{
              duration: Math.random() * 5 + 5,
              repeat: Infinity,
              ease: "easeInOut",
              delay: Math.random() * 2,
            }}
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
          />
        ))}
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center"
        >
          <motion.h1 
            className="text-5xl md:text-7xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-expo-cyan via-expo-neonPurple to-expo-neonPink"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Business Expo 2.0
          </motion.h1>
          
          <motion.p
            className="text-gray-300 text-lg md:text-xl mb-8 max-w-2xl mx-auto leading-relaxed"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            Experience the future of exhibitions with our virtual expo platform.
            Discover innovative stalls, connect with exhibitors, and explore endless possibilities.
          </motion.p>

          <motion.div
            className="flex flex-col md:flex-row gap-4 justify-center items-center"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6 }}
          >
            <motion.a
              href="#register"
              className="group relative px-8 py-3 w-48 overflow-hidden rounded-lg bg-gradient-to-r from-expo-cyan to-expo-neonPurple transition-all duration-300"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <div className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300" />
              <span className="relative text-black font-semibold">Register Stall</span>
            </motion.a>

            <motion.a
              href="#categories"
              className="group relative px-8 py-3 w-48 overflow-hidden rounded-lg border border-expo-cyan text-expo-cyan transition-all duration-300"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <div className="absolute inset-0 bg-expo-cyan/10 translate-y-full group-hover:translate-y-0 transition-transform duration-300" />
              <span className="relative font-semibold">Explore Categories</span>
            </motion.a>
          </motion.div>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
        animate={{
          y: [0, 10, 0],
        }}
        transition={{
          duration: 1.5,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      >
        <div className="w-6 h-10 rounded-full border-2 border-expo-cyan p-1">
          <div className="w-1.5 h-1.5 bg-expo-cyan rounded-full mx-auto animate-bounce" />
        </div>
      </motion.div>
    </div>
  );
};

export default Hero;