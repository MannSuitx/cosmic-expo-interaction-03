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
    gradient: "from-[#FF6B6B] to-[#FFE66D]",
  },
  {
    id: 2,
    name: "Fun",
    description: "Discover exciting entertainment and interactive experiences",
    icon: "🎮",
    gradient: "from-[#4E65FF] to-[#92EFFD]",
  },
  {
    id: 3,
    name: "Gaming",
    description: "Explore the latest in gaming technology and virtual worlds",
    icon: "🎮",
    gradient: "from-[#A17FE0] to-[#5D26C1]",
  },
  {
    id: 4,
    name: "InfoTech",
    description: "Discover cutting-edge technology and digital innovations",
    icon: "💻",
    gradient: "from-[#00F5A0] to-[#00D9F5]",
  },
];

const CategoryCards = () => {
  const [hoveredId, setHoveredId] = useState<number | null>(null);

  return (
    <section className="py-20 bg-expo-black">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Explore <span className="text-expo-cyan">Categories</span>
          </h2>
          <p className="text-gray-300 max-w-2xl mx-auto">
            Discover innovative exhibits across different categories at our virtual expo
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {categories.map((category) => (
            <motion.div
              key={category.id}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
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
              className={`relative overflow-hidden rounded-xl bg-gradient-to-br ${category.gradient} p-[2px]`}
            >
              <div className="relative h-full bg-expo-purple rounded-xl p-6 backdrop-blur-sm">
                <div className="absolute inset-0 bg-gradient-to-br from-transparent to-black/30 rounded-xl" />
                <div className="relative z-10">
                  <span className="text-4xl mb-4 block">{category.icon}</span>
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
                    <button className="px-4 py-2 bg-white/10 text-white rounded-lg hover:bg-white/20 transition-colors">
                      Learn More
                    </button>
                  </motion.div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CategoryCards;