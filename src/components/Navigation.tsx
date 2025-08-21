import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

const Navigation = () => {
  return (
    <nav className="bg-background/95 backdrop-blur-md border-b border-border sticky top-0 z-50 shadow-card">
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        <Link to="/" className="flex items-center space-x-2 hover:scale-105 transition-transform">
          <img 
            src="/lovable-uploads/523f4a01-3b64-4ec3-b99b-c37e5bbf2f5f.png" 
            alt="AFC Logo" 
            className="w-16 h-16 cyber-glow"
          />
        </Link>
        
        <div className="hidden md:flex items-center space-x-8">
          <Link 
            to="/" 
            className="text-foreground hover:text-primary transition-colors relative after:content-[''] after:absolute after:w-0 after:h-0.5 after:bg-primary after:left-0 after:-bottom-1 after:transition-all after:duration-300 hover:after:w-full"
          >
            Home
          </Link>
          <Link 
            to="/about" 
            className="text-foreground hover:text-primary transition-colors relative after:content-[''] after:absolute after:w-0 after:h-0.5 after:bg-primary after:left-0 after:-bottom-1 after:transition-all after:duration-300 hover:after:w-full"
          >
            About
          </Link>
          <Link 
            to="/services" 
            className="text-foreground hover:text-primary transition-colors relative after:content-[''] after:absolute after:w-0 after:h-0.5 after:bg-primary after:left-0 after:-bottom-1 after:transition-all after:duration-300 hover:after:w-full"
          >
            Services
          </Link>
          <Link 
            to="/contact" 
            className="text-foreground hover:text-primary transition-colors relative after:content-[''] after:absolute after:w-0 after:h-0.5 after:bg-primary after:left-0 after:-bottom-1 after:transition-all after:duration-300 hover:after:w-full"
          >
            Contact
          </Link>
          <Button 
            variant="default" 
            size="sm"
            className="cyber-glow hover:shadow-neon transition-all duration-300"
            onClick={() => window.location.href = '/contact'}
          >
            Request Consultation
          </Button>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;