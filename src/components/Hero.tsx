import { motion } from "framer-motion";

const Hero = () => {
  return (
    <div className="relative min-h-screen bg-expo-black flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-expo-purple/20 via-expo-black to-expo-black" />
      
      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center"
        >
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
            Business <span className="text-expo-cyan">Expo 2.0</span>
          </h1>
          <p className="text-gray-300 text-lg md:text-xl mb-8 max-w-2xl mx-auto">
            Experience the future of exhibitions with our virtual expo platform.
            Discover innovative stalls, connect with exhibitors, and explore endless possibilities.
          </p>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
            className="flex flex-col md:flex-row gap-4 justify-center"
          >
            <a
              href="#register"
              className="px-8 py-3 bg-expo-cyan text-expo-black font-semibold rounded-lg hover:bg-expo-cyan/90 transition-colors"
            >
              Register Stall
            </a>
            <a
              href="#stalls"
              className="px-8 py-3 border border-expo-cyan text-expo-cyan rounded-lg hover:bg-expo-cyan/10 transition-colors"
            >
              View Stalls
            </a>
          </motion.div>
        </motion.div>
      </div>

      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="absolute animate-float"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 2}s`,
            }}
          >
            <div
              className="w-2 h-2 bg-expo-cyan rounded-full animate-glow"
              style={{
                opacity: Math.random() * 0.5 + 0.25,
              }}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Hero;