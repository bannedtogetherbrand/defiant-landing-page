import Hero from "@/components/Hero";
import Mission from "@/components/Mission";
import Shop from "@/components/Shop";
import EmailCapture from "@/components/EmailCapture";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Hero />
      <Mission />
      <Shop />
      <EmailCapture />
      <Footer />
    </div>
  );
};

export default Index;
