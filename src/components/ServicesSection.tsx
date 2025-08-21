import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Link } from "react-router-dom";

const ServicesSection = () => {
  const services = [
    {
      title: "Cyber Investigations",
      description: "Comprehensive investigation of fraud, scams, phishing attacks, and other cybercriminal activities.",
      icon: "🔬",
      features: ["Fraud Investigation", "Scam Analysis", "Phishing Detection", "Identity Theft Cases"],
      link: "/services/cyber-investigations"
    },
    {
      title: "Digital Forensics",
      description: "Professional device analysis, data recovery, and evidence collection for legal proceedings.",
      icon: "💻",
      features: ["Device Analysis", "Data Recovery", "Evidence Collection", "Chain of Custody"],
      link: "/services/digital-forensics"
    },
    {
      title: "Crypto Asset Tracing",
      description: "Advanced blockchain analysis to track stolen or lost cryptocurrency across multiple networks.",
      icon: "₿",
      features: ["Blockchain Analysis", "Transaction Tracing", "Address Clustering", "Fund Recovery Support"],
      link: "/services/crypto-tracing"
    },
    {
      title: "Risk & Security Assessments",
      description: "Comprehensive security evaluations and risk analysis for organizations and individuals.",
      icon: "🛡️",
      features: ["Security Audits", "Vulnerability Assessment", "Risk Analysis", "Prevention Strategies"],
      link: "/services/security-assessments"
    }
  ];

  return (
    <section id="services" className="py-20 bg-gradient-section">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4 text-glow">
            Our <span className="text-primary animate-cyber-pulse">Services</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Comprehensive digital investigation and forensic services tailored to your specific needs
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {services.map((service, index) => (
            <Link key={index} to={service.link} className="block">
              <Card 
                className="shadow-card hover:shadow-cyber transition-all duration-300 border-border/50 hover:border-primary/30 animate-fade-in bg-card/80 backdrop-blur-sm hover:scale-105 cursor-pointer"
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                <CardHeader>
                  <div className={`w-12 h-12 ${
                    index === 0 ? 'bg-primary/10 cyber-glow' :
                    index === 1 ? 'bg-cyber-green/10' :
                    index === 2 ? 'bg-cyber-purple/10' :
                    'bg-accent/10'
                  } rounded-lg flex items-center justify-center mb-4 hover:shadow-neon transition-all duration-300`}>
                    <span className="text-2xl">{service.icon}</span>
                  </div>
                  <CardTitle className="text-xl font-semibold">{service.title}</CardTitle>
                  <CardDescription className="text-muted-foreground">
                    {service.description}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    {service.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center text-sm text-muted-foreground">
                        <span className={`w-2 h-2 ${
                          featureIndex === 0 ? 'bg-primary' :
                          featureIndex === 1 ? 'bg-cyber-green' :
                          featureIndex === 2 ? 'bg-accent' :
                          'bg-cyber-purple'
                        } rounded-full mr-3 animate-neon-flicker`}></span>
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <div className="mt-4 text-primary text-sm hover:text-primary/80">
                    Click to learn more →
                  </div>
                </CardContent>
              </Card>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;