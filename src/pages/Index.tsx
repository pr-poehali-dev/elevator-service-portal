import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Advantages from "@/components/Advantages";
import Services from "@/components/Services";
import ProjectSlider from "@/components/ProjectSlider";
import ContactForm from "@/components/ContactForm";
import Contacts from "@/components/Contacts";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <Hero />
      <Advantages />
      <Services />
      <ProjectSlider />
      <ContactForm />
      <Contacts />
      <Footer />
    </div>
  );
};

export default Index;
