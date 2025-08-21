import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-card border-t border-border/50 shadow-cyber">
      <div className="container mx-auto px-4 py-12">
        <div className="grid md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="md:col-span-2">
            <div className="flex items-center space-x-2 mb-4 hover:scale-105 transition-transform">
              <img 
                src="/lovable-uploads/523f4a01-3b64-4ec3-b99b-c37e5bbf2f5f.png" 
                alt="AFC Logo" 
                className="w-10 h-10 cyber-glow"
              />
              <span className="font-semibold text-xl text-glow">AFC</span>
            </div>
            <p className="text-muted-foreground mb-4 max-w-md">
              Professional cyber investigations, digital forensics, and crypto asset tracing services. 
              Trusted worldwide for confidential and legally admissible investigations.
            </p>
            <p className="text-muted-foreground/80 text-sm">
              © 2024 AFC. All rights reserved.
            </p>
          </div>
          
          {/* Services */}
          <div>
            <h3 className="font-semibold text-lg mb-4 text-primary">Services</h3>
            <ul className="space-y-2 text-muted-foreground">
              <li className="hover:text-cyber-green transition-colors cursor-default">Cyber Investigations</li>
              <li className="hover:text-primary transition-colors cursor-default">Digital Forensics</li>
              <li className="hover:text-cyber-purple transition-colors cursor-default">Crypto Asset Tracing</li>
              <li className="hover:text-accent transition-colors cursor-default">Security Assessments</li>
            </ul>
          </div>
          
          {/* Legal & Contact */}
          <div>
            <h3 className="font-semibold text-lg mb-4 text-primary">Legal & Contact</h3>
            <ul className="space-y-2">
              <li>
                <Link 
                  to="/privacy-policy" 
                  className="text-muted-foreground hover:text-foreground transition-colors relative after:content-[''] after:absolute after:w-0 after:h-0.5 after:bg-primary after:left-0 after:-bottom-1 after:transition-all after:duration-300 hover:after:w-full"
                >
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link 
                  to="/terms-of-service" 
                  className="text-muted-foreground hover:text-foreground transition-colors relative after:content-[''] after:absolute after:w-0 after:h-0.5 after:bg-primary after:left-0 after:-bottom-1 after:transition-all after:duration-300 hover:after:w-full"
                >
                  Terms of Service
                </Link>
              </li>
              <li>
                <Link 
                  to="/disclaimer" 
                  className="text-muted-foreground hover:text-foreground transition-colors relative after:content-[''] after:absolute after:w-0 after:h-0.5 after:bg-primary after:left-0 after:-bottom-1 after:transition-all after:duration-300 hover:after:w-full"
                >
                  Disclaimer
                </Link>
              </li>
              <li>
                <a 
                  href="mailto:support@afc.com"
                  className="text-muted-foreground hover:text-foreground transition-colors relative after:content-[''] after:absolute after:w-0 after:h-0.5 after:bg-primary after:left-0 after:-bottom-1 after:transition-all after:duration-300 hover:after:w-full"
                >
                  Contact Us
                </a>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-border/30 mt-8 pt-8 text-center">
          <p className="text-muted-foreground/80 text-sm">
            Professional investigations conducted with the highest standards of confidentiality and legal compliance.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;