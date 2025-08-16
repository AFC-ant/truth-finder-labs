import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

const Disclaimer = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      <main className="py-20">
        <div className="container mx-auto px-4 max-w-4xl">
          <h1 className="text-4xl font-bold text-foreground mb-8">Disclaimer</h1>
          
          <div className="prose prose-lg max-w-none text-muted-foreground space-y-6">
            <p className="text-lg">
              <strong>Last updated:</strong> {new Date().toLocaleDateString()}
            </p>
            
            <section>
              <h2 className="text-2xl font-semibold text-foreground mb-4">Important Notice</h2>
              <p className="bg-muted p-4 rounded-lg border-l-4 border-primary">
                <strong>We do not provide guaranteed financial recovery.</strong> All investigations are 
                evidence-based and handled with confidentiality. Results cannot be guaranteed and depend 
                on various factors including available evidence and legal constraints.
              </p>
            </section>
            
            <section>
              <h2 className="text-2xl font-semibold text-foreground mb-4">1. No Recovery Guarantees</h2>
              <p>
                Forensic Lab Team does not guarantee the recovery of lost funds, stolen assets, or 
                any specific financial outcomes. Our role is to investigate, analyze evidence, and 
                provide professional reports based on available information.
              </p>
            </section>
            
            <section>
              <h2 className="text-2xl font-semibold text-foreground mb-4">2. Investigative Limitations</h2>
              <p>
                Digital investigations face inherent limitations including:
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Availability and quality of digital evidence</li>
                <li>Legal restrictions on investigation methods</li>
                <li>Cooperation from involved parties</li>
                <li>Jurisdictional constraints</li>
                <li>Technical limitations of forensic tools</li>
              </ul>
            </section>
            
            <section>
              <h2 className="text-2xl font-semibold text-foreground mb-4">3. Professional Services Only</h2>
              <p>
                We provide professional investigative services and expert analysis. We do not:
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Provide financial recovery services</li>
                <li>Act as intermediaries for fund recovery</li>
                <li>Guarantee legal outcomes</li>
                <li>Provide legal advice (consult qualified attorneys)</li>
              </ul>
            </section>
            
            <section>
              <h2 className="text-2xl font-semibold text-foreground mb-4">4. Crypto Asset Investigations</h2>
              <p>
                Blockchain analysis and crypto asset tracing are complex processes. While we use 
                advanced tools and techniques, the decentralized nature of cryptocurrencies presents 
                unique challenges. We cannot guarantee the identification of ultimate beneficial 
                owners or fund recovery.
              </p>
            </section>
            
            <section>
              <h2 className="text-2xl font-semibold text-foreground mb-4">5. Legal Consultation Required</h2>
              <p>
                Our reports and findings are for informational purposes. Legal action based on our 
                investigations requires consultation with qualified legal professionals familiar with 
                relevant jurisdictions and applicable laws.
              </p>
            </section>
            
            <section>
              <h2 className="text-2xl font-semibold text-foreground mb-4">6. Third-Party Services</h2>
              <p>
                We may recommend third-party services for specific aspects of your case. We are not 
                responsible for the performance or outcomes of any third-party services.
              </p>
            </section>
            
            <section>
              <h2 className="text-2xl font-semibold text-foreground mb-4">7. Contact Information</h2>
              <p>
                Questions about this disclaimer should be directed to:
                <br />
                <strong>Email:</strong> info@forensiclabteam.com
              </p>
            </section>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Disclaimer;