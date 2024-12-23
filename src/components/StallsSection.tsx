import { motion } from "framer-motion";
import StallCard, { StallInfo } from "./StallCard";

const stalls: StallInfo[] = [
  {
    id: 1,
    name: "TechVision Hub",
    stallNumber: "A101",
    category: "InfoTech",
    price: 500,
    description: "Showcasing the latest in AR/VR technology and interactive demos.",
    members: ["John Doe", "Jane Smith", "Mike Johnson", "Sarah Wilson"],
  },
  {
    id: 2,
    name: "Gaming Paradise",
    stallNumber: "B202",
    category: "Gaming",
    price: 400,
    description: "Experience next-gen gaming with our state-of-the-art setup.",
    members: ["Alex Brown", "Chris Lee", "Emma Davis", "Tom Wilson"],
  },
  {
    id: 3,
    name: "Foodie's Corner",
    stallNumber: "C303",
    category: "Food",
    price: 300,
    description: "Taste the future with our molecular gastronomy creations.",
    members: ["David Chen", "Maria Garcia", "James Wilson", "Lisa Anderson"],
  },
  {
    id: 4,
    name: "Fun Zone",
    stallNumber: "D404",
    category: "Fun",
    price: 350,
    description: "Interactive games and entertainment for all ages.",
    members: ["Robert Taylor", "Anna Kim", "Peter Wang", "Sophie Martin"],
  },
];

const StallsSection = () => {
  return (
    <section id="stalls" className="py-20 bg-expo-black">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Featured <span className="text-expo-cyan">Stalls</span>
          </h2>
          <p className="text-gray-300 max-w-2xl mx-auto">
            Explore our diverse range of stalls featuring the latest in technology,
            gaming, food, and entertainment.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {stalls.map((stall) => (
            <StallCard key={stall.id} stall={stall} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default StallsSection;