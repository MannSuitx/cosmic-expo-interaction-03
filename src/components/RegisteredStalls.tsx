import { useQuery } from "@tanstack/react-query";
import { motion } from "framer-motion";
import { supabase } from "@/integrations/supabase/client";
import StallCard from "./StallCard";
import type { StallInfo } from "./StallCard";

const RegisteredStalls = () => {
  const { data: stalls, isLoading, error } = useQuery({
    queryKey: ["stalls"],
    queryFn: async () => {
      const { data, error } = await supabase
        .from("stalls")
        .select("*")
        .order("created_at", { ascending: false });
      
      if (error) throw error;
      return data as StallInfo[];
    },
  });

  if (isLoading) {
    return (
      <section className="py-20 bg-expo-black">
        <div className="container mx-auto px-4">
          <div className="text-center text-white">Loading stalls...</div>
        </div>
      </section>
    );
  }

  if (error) {
    return (
      <section className="py-20 bg-expo-black">
        <div className="container mx-auto px-4">
          <div className="text-center text-red-500">Error loading stalls</div>
        </div>
      </section>
    );
  }

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
            Registered <span className="text-expo-cyan">Stalls</span>
          </h2>
          <p className="text-gray-300 max-w-2xl mx-auto">
            Explore our diverse range of registered stalls featuring the latest in technology,
            gaming, food, and entertainment.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {stalls?.map((stall) => (
            <StallCard key={stall.id} stall={stall} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default RegisteredStalls;