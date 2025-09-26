import { Button } from "@/components/ui/button";
import revolutionaryEagle from "@/assets/revolutionary-eagle.png";

const Hero = () => {
  const scrollToShop = () => {
    const shopSection = document.getElementById('shop');
    shopSection?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="min-h-screen flex items-center justify-center bg-hero relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-1/4 left-1/4 w-32 h-32 bg-eagle-gold rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 right-1/4 w-24 h-24 bg-blood-red rounded-full blur-2xl"></div>
      </div>
      
      <div className="container mx-auto px-6 text-center relative z-10">
        {/* Eagle Icons */}
        <div className="flex justify-center items-center mb-8 space-x-12">
          <img 
            src={revolutionaryEagle} 
            alt="Revolutionary Eagle" 
            className="w-16 h-16 md:w-20 md:h-20 opacity-80 transform -rotate-12"
          />
          <div className="flex flex-col items-center space-y-2">
            <h1 className="text-hero text-center max-w-4xl">
              BANNED TOGETHER
            </h1>
            <div className="w-24 h-0.5 bg-accent"></div>
          </div>
          <img 
            src={revolutionaryEagle} 
            alt="Revolutionary Eagle" 
            className="w-16 h-16 md:w-20 md:h-20 opacity-80 transform rotate-12 scale-x-[-1]"
          />
        </div>

        {/* Hero Copy */}
        <div className="max-w-3xl mx-auto space-y-8">
          <h2 className="text-hero text-center">
            Defiance is timeless.
          </h2>
          
          <p className="text-subhero text-muted-foreground max-w-lg mx-auto">
            Wear truth. Reject propaganda.
          </p>
          
          <Button 
            onClick={scrollToShop}
            className="btn-hero mt-12"
            size="lg"
          >
            Shop Now
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Hero;