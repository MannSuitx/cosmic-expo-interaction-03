import { motion } from "framer-motion";
import { useState } from "react";

interface Category {
  id: number;
  name: string;
  description: string;
  icon: string;
  gradient: string;
}

const categories: Category[] = [
  {
    id: 1,
    name: "Food",
    description: "Experience culinary innovations and gastronomic delights",
    icon: "🍽️",
    gradient: "from-[#FF6B6B] via-[#FFE66D] to-[#FF6B6B]",
  },
  {
    id: 2,
    name: "Fun",
    description: "Discover exciting entertainment and interactive experiences",
    icon: "🎮",
    gradient: "from-[#4E65FF] via-[#92EFFD] to-[#4E65FF]",
  },
  {
    id: 3,
    name: "Gaming",
    description: "Explore the latest in gaming technology and virtual worlds",
    icon: "🎮",
    gradient: "from-[#A17FE0] via-[#5D26C1] to-[#A17FE0]",
  },
  {
    id: 4,
    name: "InfoTech",
    description: "Discover cutting-edge technology and digital innovations",
    icon: "💻",
    gradient: "from-[#00F5A0] via-[#00D9F5] to-[#00F5A0]",
  },
];

const CategoryCards = () => {
  const [hoveredId, setHoveredId] = useState<number | null>(null);

  return (
    <section id="categories" className="py-20 bg-expo-black relative overflow-hidden">
      {/* Background grid effect */}
      <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-10" />
      
      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-expo-cyan to-expo-neonPurple">
            Explore Categories
          </h2>
          <p className="text-gray-300 max-w-2xl mx-auto">
            Discover innovative exhibits across different categories at our virtual expo
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {categories.map((category, index) => (
            <motion.div
              key={category.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <motion.div
                whileHover={{ 
                  scale: 1.05,
                  rotateY: 10,
                  z: 50
                }}
                transition={{
                  type: "spring",
                  stiffness: 300,
                  damping: 20
                }}
                onHoverStart={() => setHoveredId(category.id)}
                onHoverEnd={() => setHoveredId(null)}
                className="relative h-full group"
              >
                <div className={`absolute inset-0 bg-gradient-to-r ${category.gradient} opacity-20 group-hover:opacity-30 rounded-xl transition-opacity duration-300`} />
                <div className="relative bg-expo-purple/40 backdrop-blur-lg rounded-xl p-6 border border-white/10">
                  <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-white/0 rounded-xl" />
                  <div className="relative z-10">
                    <span className="text-4xl mb-4 block transform group-hover:scale-110 transition-transform duration-300">
                      {category.icon}
                    </span>
                    <h3 className="text-2xl font-bold text-white mb-2">{category.name}</h3>
                    <p className="text-gray-300">{category.description}</p>
                    
                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ 
                        opacity: hoveredId === category.id ? 1 : 0,
                        y: hoveredId === category.id ? 0 : 20
                      }}
                      transition={{ duration: 0.3 }}
                      className="mt-4"
                    >
                      <button className="px-4 py-2 bg-white/10 text-white rounded-lg hover:bg-white/20 transition-all duration-300 hover:shadow-lg hover:shadow-expo-cyan/20">
                        Learn More
                      </button>
                    </motion.div>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CategoryCards;