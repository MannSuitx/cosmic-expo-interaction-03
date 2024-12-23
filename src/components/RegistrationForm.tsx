import { useState } from "react";
import { motion } from "framer-motion";
import { toast } from "sonner";

const categories = ["InfoTech", "Gaming", "Food", "Fun"];

const RegistrationForm = () => {
  const [formData, setFormData] = useState({
    stallName: "",
    category: "",
    description: "",
    price: "",
    members: ["", "", "", ""],
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    toast.success("Registration submitted successfully!");
  };

  const handleMemberChange = (index: number, value: string) => {
    const newMembers = [...formData.members];
    newMembers[index] = value;
    setFormData({ ...formData, members: newMembers });
  };

  return (
    <section id="register" className="py-20 bg-expo-purple">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="max-w-2xl mx-auto"
        >
          <h2 className="text-3xl font-bold text-white text-center mb-8">
            Register Your <span className="text-expo-cyan">Stall</span>
          </h2>

          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label className="block text-white mb-2">Stall Name</label>
              <input
                type="text"
                value={formData.stallName}
                onChange={(e) =>
                  setFormData({ ...formData, stallName: e.target.value })
                }
                className="w-full px-4 py-2 rounded-lg bg-expo-black text-white border border-expo-cyan/20 focus:border-expo-cyan focus:outline-none"
                required
              />
            </div>

            <div>
              <label className="block text-white mb-2">Category</label>
              <select
                value={formData.category}
                onChange={(e) =>
                  setFormData({ ...formData, category: e.target.value })
                }
                className="w-full px-4 py-2 rounded-lg bg-expo-black text-white border border-expo-cyan/20 focus:border-expo-cyan focus:outline-none"
                required
              >
                <option value="">Select a category</option>
                {categories.map((category) => (
                  <option key={category} value={category}>
                    {category}
                  </option>
                ))}
              </select>
            </div>

            <div>
              <label className="block text-white mb-2">Description</label>
              <textarea
                value={formData.description}
                onChange={(e) =>
                  setFormData({ ...formData, description: e.target.value })
                }
                className="w-full px-4 py-2 rounded-lg bg-expo-black text-white border border-expo-cyan/20 focus:border-expo-cyan focus:outline-none"
                rows={4}
                required
              />
            </div>

            <div>
              <label className="block text-white mb-2">Ticket Price (₹)</label>
              <input
                type="number"
                value={formData.price}
                onChange={(e) =>
                  setFormData({ ...formData, price: e.target.value })
                }
                className="w-full px-4 py-2 rounded-lg bg-expo-black text-white border border-expo-cyan/20 focus:border-expo-cyan focus:outline-none"
                required
              />
            </div>

            <div>
              <label className="block text-white mb-2">Team Members</label>
              <div className="space-y-2">
                {formData.members.map((member, index) => (
                  <input
                    key={index}
                    type="text"
                    value={member}
                    onChange={(e) => handleMemberChange(index, e.target.value)}
                    placeholder={`Member ${index + 1}`}
                    className="w-full px-4 py-2 rounded-lg bg-expo-black text-white border border-expo-cyan/20 focus:border-expo-cyan focus:outline-none"
                    required
                  />
                ))}
              </div>
            </div>

            <button
              type="submit"
              className="w-full px-6 py-3 bg-expo-cyan text-expo-black font-semibold rounded-lg hover:bg-expo-cyan/90 transition-colors"
            >
              Register Stall
            </button>
          </form>
        </motion.div>
      </div>
    </section>
  );
};

export default RegistrationForm;