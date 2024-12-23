import Hero from "@/components/Hero";
import CategoryCards from "@/components/CategoryCards";
import StallsSection from "@/components/StallsSection";
import RegistrationForm from "@/components/RegistrationForm";

const Index = () => {
  return (
    <main className="min-h-screen bg-expo-black">
      <Hero />
      <CategoryCards />
      <StallsSection />
      <RegistrationForm />
    </main>
  );
};

export default Index;