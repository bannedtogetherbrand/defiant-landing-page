import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { ExternalLink } from "lucide-react";
import shirtCollection from "@/assets/shirt-collection.jpg";

const Shop = () => {
  const products = [
    {
      id: 1,
      title: "Socrates – Poisoned for Truth",
      description: "Ancient wisdom meets modern defiance",
      image: shirtCollection,
      printifyUrl: "#"
    },
    {
      id: 2,
      title: "Cassius Clay Dueling Club",
      description: "When honor demanded action",
      image: shirtCollection,
      printifyUrl: "#"
    },
    {
      id: 3,
      title: "William Wallace – No Slavish Bond",
      description: "Freedom's eternal battle cry",
      image: shirtCollection,
      printifyUrl: "#"
    },
    {
      id: 4,
      title: "Tattered Flag Collection",
      description: "Revolutionary symbols reimagined",
      image: shirtCollection,
      printifyUrl: "#"
    }
  ];

  return (
    <section id="shop" className="py-20 bg-muted/30">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-black mb-4 tracking-tight">
            Wear Your Rebellion
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Each design tells the story of those who dared to challenge the status quo
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {products.map((product) => (
            <Card key={product.id} className="group hover:shadow-[var(--shadow-revolutionary)] transition-all duration-300 overflow-hidden border-0 shadow-lg">
              <div className="aspect-square overflow-hidden">
                <img 
                  src={product.image}
                  alt={product.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <CardContent className="p-6 text-center space-y-4">
                <h3 className="text-xl font-bold text-foreground">
                  {product.title}
                </h3>
                <p className="text-muted-foreground">
                  {product.description}
                </p>
                <Button 
                  className="btn-revolutionary w-full"
                  onClick={() => window.open(product.printifyUrl, '_blank')}
                >
                  View & Buy
                  <ExternalLink className="ml-2 h-4 w-4" />
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <Button 
            variant="outline" 
            size="lg"
            className="border-2 border-primary text-primary hover:bg-primary hover:text-primary-foreground font-bold px-8"
            onClick={() => window.open('#', '_blank')}
          >
            See All Shirts
            <ExternalLink className="ml-2 h-4 w-4" />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Shop;