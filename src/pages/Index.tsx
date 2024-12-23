import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import StallsSection from "@/components/StallsSection";
import RegistrationForm from "@/components/RegistrationForm";

const Index = () => {
  return (
    <div className="min-h-screen bg-expo-black">
      <Navbar />
      <Hero />
      <StallsSection />
      <RegistrationForm />
    </div>
  );
};

export default Index;