import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useToast } from "@/hooks/use-toast";

const EmailCapture = () => {
  const [email, setEmail] = useState("");
  const [isSubscribed, setIsSubscribed] = useState(false);
  const { toast } = useToast();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!email) {
      toast({
        title: "Email required",
        description: "Please enter your email address",
        variant: "destructive"
      });
      return;
    }

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      toast({
        title: "Invalid email",
        description: "Please enter a valid email address",
        variant: "destructive"
      });
      return;
    }

    // Simulate email subscription
    try {
      setIsSubscribed(true);
      toast({
        title: "You're in. Welcome to the resistance.",
        description: "You'll be the first to know about new drops and limited designs."
      });
      setEmail("");
    } catch (error) {
      toast({
        title: "Something went wrong",
        description: "Please try again later",
        variant: "destructive"
      });
    }
  };

  if (isSubscribed) {
    return (
      <section className="py-20 bg-hero">
        <div className="container mx-auto px-6">
          <div className="max-w-2xl mx-auto text-center">
            <div className="space-y-6">
              <h3 className="text-3xl font-bold text-foreground">
                Welcome to the resistance.
              </h3>
              <p className="text-lg text-muted-foreground">
                You're now part of a community that values truth over comfort.
              </p>
            </div>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className="py-20 bg-hero relative overflow-hidden">
      {/* Subtle Revolutionary Watermark */}
      <div className="absolute inset-0 flex items-center justify-center opacity-5">
        <div className="text-9xl font-black text-primary transform rotate-12">
          BTB
        </div>
      </div>
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-2xl mx-auto text-center">
          <div className="space-y-8">
            <h3 className="text-3xl md:text-4xl font-bold text-foreground">
              Never miss a drop.
            </h3>
            <p className="text-xl text-muted-foreground">
              Get early access to limited designs and join a community that refuses to stay silent.
            </p>
            
            <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <Input
                type="email"
                placeholder="Enter your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="flex-1 h-12 text-base border-2 border-muted focus:border-primary"
                required
              />
              <Button 
                type="submit"
                className="btn-revolutionary h-12 px-8 whitespace-nowrap"
              >
                Join the Resistance
              </Button>
            </form>
            
            <p className="text-sm text-muted-foreground">
              No spam. Just truth. Unsubscribe anytime.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default EmailCapture;