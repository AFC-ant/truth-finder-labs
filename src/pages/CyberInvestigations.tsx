import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";

const CyberInvestigations = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      <main className="pt-24">
        <div className="container mx-auto px-4 py-12">
          <Link to="/services" className="inline-flex items-center text-primary hover:text-primary/80 mb-8">
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to Services
          </Link>
          
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <div className="w-20 h-20 bg-primary/10 cyber-glow rounded-lg flex items-center justify-center mb-6 mx-auto">
                <span className="text-4xl">🔬</span>
              </div>
              <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6 text-glow">
                Cyber <span className="text-primary animate-cyber-pulse">Investigations</span>
              </h1>
              <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                Professional investigation of cybercrime, fraud, and digital threats with legally admissible evidence collection
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8 mb-12">
              <Card className="shadow-card border-border/50 bg-card/80 backdrop-blur-sm">
                <CardHeader>
                  <CardTitle className="text-xl">Fraud Investigation</CardTitle>
                  <CardDescription>
                    Comprehensive analysis of financial fraud, identity theft, and online scams
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 text-muted-foreground">
                    <li>• Online banking fraud analysis</li>
                    <li>• Credit card fraud investigations</li>
                    <li>• Investment scam detection</li>
                    <li>• Romance and dating scams</li>
                  </ul>
                </CardContent>
              </Card>

              <Card className="shadow-card border-border/50 bg-card/80 backdrop-blur-sm">
                <CardHeader>
                  <CardTitle className="text-xl">Corporate Cybercrime</CardTitle>
                  <CardDescription>
                    Investigation of cyber attacks targeting businesses and organizations
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 text-muted-foreground">
                    <li>• Data breach investigations</li>
                    <li>• Insider threat analysis</li>
                    <li>• Ransomware incident response</li>
                    <li>• IP theft investigations</li>
                  </ul>
                </CardContent>
              </Card>

              <Card className="shadow-card border-border/50 bg-card/80 backdrop-blur-sm">
                <CardHeader>
                  <CardTitle className="text-xl">Digital Evidence</CardTitle>
                  <CardDescription>
                    Collection and analysis of digital evidence for legal proceedings
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 text-muted-foreground">
                    <li>• Chain of custody documentation</li>
                    <li>• Court-admissible reports</li>
                    <li>• Expert witness testimony</li>
                    <li>• Technical documentation</li>
                  </ul>
                </CardContent>
              </Card>

              <Card className="shadow-card border-border/50 bg-card/80 backdrop-blur-sm">
                <CardHeader>
                  <CardTitle className="text-xl">Threat Analysis</CardTitle>
                  <CardDescription>
                    Advanced analysis of cyber threats and attack vectors
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 text-muted-foreground">
                    <li>• Malware analysis and reverse engineering</li>
                    <li>• Attack pattern identification</li>
                    <li>• Threat actor profiling</li>
                    <li>• Security vulnerability assessment</li>
                  </ul>
                </CardContent>
              </Card>
            </div>

            <div className="text-center">
              <Button 
                size="lg" 
                className="text-lg px-8 py-4 cyber-glow hover:shadow-neon transition-all duration-300"
                onClick={() => {
                  const element = document.getElementById('contact');
                  if (element) {
                    element.scrollIntoView({ behavior: 'smooth' });
                  } else {
                    window.location.href = '/contact';
                  }
                }}
              >
                Request Cyber Investigation Consultation
              </Button>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default CyberInvestigations;