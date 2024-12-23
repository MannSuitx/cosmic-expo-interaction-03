import { motion } from "framer-motion";

export interface StallInfo {
  id: number;
  name: string;
  stallNumber: string;
  category: string;
  price: number;
  description: string;
  members: string[];
}

const StallCard = ({ stall }: { stall: StallInfo }) => {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5 }}
      className="bg-expo-purple p-6 rounded-lg border border-expo-cyan/20 hover:border-expo-cyan/50 transition-colors"
    >
      <div className="flex justify-between items-start mb-4">
        <div>
          <h3 className="text-xl font-bold text-white mb-1">{stall.name}</h3>
          <p className="text-expo-cyan">Stall #{stall.stallNumber}</p>
        </div>
        <span className="px-3 py-1 bg-expo-cyan/10 text-expo-cyan rounded-full text-sm">
          {stall.category}
        </span>
      </div>
      
      <p className="text-gray-300 mb-4">{stall.description}</p>
      
      <div className="mb-4">
        <h4 className="text-white font-semibold mb-2">Team Members:</h4>
        <div className="flex flex-wrap gap-2">
          {stall.members.map((member, index) => (
            <span
              key={index}
              className="px-2 py-1 bg-expo-neonPurple/20 text-expo-neonPurple rounded-full text-sm"
            >
              {member}
            </span>
          ))}
        </div>
      </div>
      
      <div className="flex justify-between items-center mt-4 pt-4 border-t border-expo-cyan/20">
        <span className="text-expo-cyan font-bold">₹{stall.price}</span>
        <button className="px-4 py-2 bg-expo-cyan text-expo-black rounded-lg hover:bg-expo-cyan/90 transition-colors">
          View Details
        </button>
      </div>
    </motion.div>
  );
};

export default StallCard;