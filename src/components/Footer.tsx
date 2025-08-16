import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="container mx-auto px-4 py-12">
        <div className="grid md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="md:col-span-2">
            <div className="flex items-center space-x-2 mb-4">
              <div className="w-8 h-8 bg-primary-foreground rounded-md flex items-center justify-center">
                <span className="text-primary font-bold text-sm">FL</span>
              </div>
              <span className="font-semibold text-xl">Forensic Lab Team</span>
            </div>
            <p className="text-primary-foreground/80 mb-4 max-w-md">
              Professional cyber investigations, digital forensics, and crypto asset tracing services. 
              Trusted worldwide for confidential and legally admissible investigations.
            </p>
            <p className="text-primary-foreground/60 text-sm">
              © 2024 Forensic Lab Team. All rights reserved.
            </p>
          </div>
          
          {/* Services */}
          <div>
            <h3 className="font-semibold text-lg mb-4">Services</h3>
            <ul className="space-y-2 text-primary-foreground/80">
              <li>Cyber Investigations</li>
              <li>Digital Forensics</li>
              <li>Crypto Asset Tracing</li>
              <li>Security Assessments</li>
            </ul>
          </div>
          
          {/* Legal & Contact */}
          <div>
            <h3 className="font-semibold text-lg mb-4">Legal & Contact</h3>
            <ul className="space-y-2">
              <li>
                <Link 
                  to="/privacy-policy" 
                  className="text-primary-foreground/80 hover:text-primary-foreground transition-colors"
                >
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link 
                  to="/terms-of-service" 
                  className="text-primary-foreground/80 hover:text-primary-foreground transition-colors"
                >
                  Terms of Service
                </Link>
              </li>
              <li>
                <Link 
                  to="/disclaimer" 
                  className="text-primary-foreground/80 hover:text-primary-foreground transition-colors"
                >
                  Disclaimer
                </Link>
              </li>
              <li>
                <a 
                  href="mailto:contact@forensiclabteam.com"
                  className="text-primary-foreground/80 hover:text-primary-foreground transition-colors"
                >
                  Contact Us
                </a>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-primary-foreground/20 mt-8 pt-8 text-center">
          <p className="text-primary-foreground/60 text-sm">
            Professional investigations conducted with the highest standards of confidentiality and legal compliance.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;