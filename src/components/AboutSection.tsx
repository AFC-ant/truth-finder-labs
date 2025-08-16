const AboutSection = () => {
  return (
    <section id="about" className="py-20 bg-gradient-section">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-8">
            About Us
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed">
            We are an independent investigative team with expertise in cybersecurity, finance, and law enforcement. 
            Our mission is to provide reliable, evidence-based insights and support to individuals, businesses, 
            and institutions dealing with digital threats. We operate with professionalism, confidentiality, 
            and full transparency.
          </p>
          
          <div className="grid md:grid-cols-3 gap-8 mt-16">
            <div className="text-center">
              <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl text-primary-foreground">🔍</span>
              </div>
              <h3 className="text-xl font-semibold mb-2">Expert Investigation</h3>
              <p className="text-muted-foreground">Advanced techniques and tools for comprehensive digital investigations</p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl text-primary-foreground">🛡️</span>
              </div>
              <h3 className="text-xl font-semibold mb-2">Total Confidentiality</h3>
              <p className="text-muted-foreground">Strict privacy protocols and secure handling of all sensitive information</p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl text-primary-foreground">⚖️</span>
              </div>
              <h3 className="text-xl font-semibold mb-2">Legal Compliance</h3>
              <p className="text-muted-foreground">Legally admissible reports and evidence collection procedures</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;