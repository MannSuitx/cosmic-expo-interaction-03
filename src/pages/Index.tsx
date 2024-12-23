import Hero from "@/components/Hero";
import CategoryCards from "@/components/CategoryCards";
import RegisteredStalls from "@/components/RegisteredStalls";
import RegistrationForm from "@/components/RegistrationForm";
import Navbar from "@/components/Navbar";
const Index = () => {
  return (
    <main className="min-h-screen bg-expo-black">
      <Navbar />
      <Hero />
      <CategoryCards />
      <RegisteredStalls />
      <RegistrationForm />
    </main>
  );
};

export default Index;
