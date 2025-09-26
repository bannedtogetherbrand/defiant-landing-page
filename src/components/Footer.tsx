import { Instagram, Youtube, Twitter } from "lucide-react";

const Footer = () => {
  const scrollToSection = (sectionId: string) => {
    const section = document.getElementById(sectionId);
    section?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <footer className="bg-primary text-primary-foreground py-16">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {/* Brand Section */}
          <div className="space-y-4">
            <h3 className="text-2xl font-black tracking-tight">
              BANNED TOGETHER
            </h3>
            <p className="text-primary-foreground/80 leading-relaxed">
              Standing with truth tellers and justice seekers across the ages.
            </p>
          </div>

          {/* Navigation */}
          <div className="space-y-4">
            <h4 className="text-lg font-bold uppercase tracking-wide">
              Navigate
            </h4>
            <div className="space-y-2">
              <button 
                onClick={() => scrollToSection('shop')}
                className="block text-primary-foreground/80 hover:text-primary-foreground transition-colors hover:underline"
              >
                Shop
              </button>
              <button 
                onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
                className="block text-primary-foreground/80 hover:text-primary-foreground transition-colors hover:underline"
              >
                About
              </button>
              <a 
                href="mailto:contact@bannedtogetherbrand.com"
                className="block text-primary-foreground/80 hover:text-primary-foreground transition-colors hover:underline"
              >
                Contact
              </a>
            </div>
          </div>

          {/* Social Links */}
          <div className="space-y-4">
            <h4 className="text-lg font-bold uppercase tracking-wide">
              Connect
            </h4>
            <div className="flex space-x-4">
              <a 
                href="#" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-primary-foreground/80 hover:text-primary-foreground transition-colors p-2 hover:bg-primary-foreground/10 rounded"
                aria-label="Instagram"
              >
                <Instagram className="h-5 w-5" />
              </a>
              <a 
                href="#" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-primary-foreground/80 hover:text-primary-foreground transition-colors p-2 hover:bg-primary-foreground/10 rounded"
                aria-label="YouTube"
              >
                <Youtube className="h-5 w-5" />
              </a>
              <a 
                href="#" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-primary-foreground/80 hover:text-primary-foreground transition-colors p-2 hover:bg-primary-foreground/10 rounded"
                aria-label="Twitter"
              >
                <Twitter className="h-5 w-5" />
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-primary-foreground/20 mt-12 pt-8 text-center">
          <p className="text-primary-foreground/60 text-sm">
            © {new Date().getFullYear()} Banned Together Brand. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;