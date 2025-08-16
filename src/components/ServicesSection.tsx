import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

const ServicesSection = () => {
  const services = [
    {
      title: "Cyber Investigations",
      description: "Comprehensive investigation of fraud, scams, phishing attacks, and other cybercriminal activities.",
      icon: "🔬",
      features: ["Fraud Investigation", "Scam Analysis", "Phishing Detection", "Identity Theft Cases"]
    },
    {
      title: "Digital Forensics",
      description: "Professional device analysis, data recovery, and evidence collection for legal proceedings.",
      icon: "💻",
      features: ["Device Analysis", "Data Recovery", "Evidence Collection", "Chain of Custody"]
    },
    {
      title: "Crypto Asset Tracing",
      description: "Advanced blockchain analysis to track stolen or lost cryptocurrency across multiple networks.",
      icon: "₿",
      features: ["Blockchain Analysis", "Transaction Tracing", "Address Clustering", "Fund Recovery Support"]
    },
    {
      title: "Risk & Security Assessments",
      description: "Comprehensive security evaluations and risk analysis for organizations and individuals.",
      icon: "🛡️",
      features: ["Security Audits", "Vulnerability Assessment", "Risk Analysis", "Prevention Strategies"]
    }
  ];

  return (
    <section id="services" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Our Services
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Comprehensive digital investigation and forensic services tailored to your specific needs
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {services.map((service, index) => (
            <Card key={index} className="shadow-card hover:shadow-professional transition-shadow duration-300">
              <CardHeader>
                <div className="w-12 h-12 bg-accent rounded-lg flex items-center justify-center mb-4">
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
                      <span className="w-2 h-2 bg-accent rounded-full mr-3"></span>
                      {feature}
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;