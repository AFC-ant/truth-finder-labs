const WhyChooseSection = () => {
  const reasons = [
    {
      title: "Transparency & Discretion",
      description: "We maintain complete transparency in our methods while ensuring absolute discretion in handling your case."
    },
    {
      title: "Advanced Forensic Tools",
      description: "State-of-the-art blockchain analysis tools and digital forensic equipment for comprehensive investigations."
    },
    {
      title: "Legally Admissible Reports",
      description: "All our investigations follow legal standards, ensuring reports are admissible in court proceedings."
    },
    {
      title: "Trusted Globally",
      description: "Trusted by private clients and organizations worldwide for sensitive digital investigations."
    }
  ];

  return (
    <section className="py-20 bg-gradient-section">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Why Choose Us
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Professional excellence backed by years of experience in digital investigations
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {reasons.map((reason, index) => (
            <div key={index} className="flex items-start space-x-4">
              <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                <span className="text-primary-foreground text-sm">✓</span>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-foreground mb-2">
                  {reason.title}
                </h3>
                <p className="text-muted-foreground">
                  {reason.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseSection;