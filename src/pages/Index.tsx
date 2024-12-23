import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import CategoryCards from "@/components/CategoryCards";
import RegistrationForm from "@/components/RegistrationForm";

const Index = () => {
  return (
    <div className="min-h-screen bg-expo-black">
      <Navbar />
      <Hero />
      <CategoryCards />
      <RegistrationForm />
    </div>
  );
};

export default Index;