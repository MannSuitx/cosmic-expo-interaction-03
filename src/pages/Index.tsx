import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import CategoryCards from "@/components/CategoryCards";
import RegistrationForm from "@/components/RegistrationForm";

const Index = () => {
  return (
    <div className="min-h-screen bg-expo-black scroll-smooth">
      <Navbar />
      <Hero />
      <CategoryCards />
      <RegistrationForm />
    </div>
  );
};

export default Index;