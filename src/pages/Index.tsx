import Hero from "@/components/Hero";
import CategoryCards from "@/components/CategoryCards";
import RegisteredStalls from "@/components/RegisteredStalls";
import RegistrationForm from "@/components/RegistrationForm";

const Index = () => {
  return (
    <main className="min-h-screen bg-expo-black">
      <Hero />
      <CategoryCards />
      <RegisteredStalls />
      <RegistrationForm />
    </main>
  );
};

export default Index;