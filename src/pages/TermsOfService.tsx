import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

const TermsOfService = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      <main className="py-20">
        <div className="container mx-auto px-4 max-w-4xl">
          <h1 className="text-4xl font-bold text-foreground mb-8">Terms of Service</h1>
          
          <div className="prose prose-lg max-w-none text-muted-foreground space-y-6">
            <p className="text-lg">
              <strong>Last updated:</strong> {new Date().toLocaleDateString()}
            </p>
            
            <section>
              <h2 className="text-2xl font-semibold text-foreground mb-4">1. Service Agreement</h2>
              <p>
                By engaging Forensic Lab Team for investigation services, you agree to these terms and 
                conditions. Our services include cyber investigations, digital forensics, crypto asset 
                tracing, and security assessments.
              </p>
            </section>
            
            <section>
              <h2 className="text-2xl font-semibold text-foreground mb-4">2. Professional Standards</h2>
              <p>
                We conduct all investigations according to professional forensic standards and applicable 
                laws. Our team maintains appropriate certifications and follows ethical guidelines for 
                investigative work.
              </p>
            </section>
            
            <section>
              <h2 className="text-2xl font-semibold text-foreground mb-4">3. Confidentiality</h2>
              <p>
                We maintain strict confidentiality regarding all client information and case details. 
                This confidentiality extends beyond the completion of services and is protected by 
                professional standards and legal requirements.
              </p>
            </section>
            
            <section>
              <h2 className="text-2xl font-semibold text-foreground mb-4">4. Service Limitations</h2>
              <p>
                While we employ advanced techniques and tools, we cannot guarantee specific outcomes 
                for any investigation. Results depend on available evidence, cooperation from relevant 
                parties, and legal constraints.
              </p>
            </section>
            
            <section>
              <h2 className="text-2xl font-semibold text-foreground mb-4">5. Payment Terms</h2>
              <p>
                Payment terms are established in individual service agreements. We require advance 
                payment for most services and provide detailed invoicing for all work performed.
              </p>
            </section>
            
            <section>
              <h2 className="text-2xl font-semibold text-foreground mb-4">6. Legal Compliance</h2>
              <p>
                All investigations are conducted within legal boundaries. We cooperate with law 
                enforcement when required and ensure all evidence collection meets legal standards 
                for admissibility.
              </p>
            </section>
            
            <section>
              <h2 className="text-2xl font-semibold text-foreground mb-4">7. Liability</h2>
              <p>
                Our liability is limited to the fees paid for services. We maintain professional 
                indemnity insurance and operate within standard industry practices for risk management.
              </p>
            </section>
            
            <section>
              <h2 className="text-2xl font-semibold text-foreground mb-4">8. Contact Information</h2>
              <p>
                For questions about these terms or our services:
                <br />
                <strong>Email:</strong> legal@forensiclabteam.com
              </p>
            </section>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default TermsOfService;