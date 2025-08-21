import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";

const SecurityAssessments = () => {
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
              <div className="w-20 h-20 bg-accent/10 rounded-lg flex items-center justify-center mb-6 mx-auto">
                <span className="text-4xl">🛡️</span>
              </div>
              <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6 text-glow">
                Security <span className="text-accent animate-cyber-pulse">Assessments</span>
              </h1>
              <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                Comprehensive security evaluations and risk analysis to protect your digital assets and infrastructure
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8 mb-12">
              <Card className="shadow-card border-border/50 bg-card/80 backdrop-blur-sm">
                <CardHeader>
                  <CardTitle className="text-xl">Security Audits</CardTitle>
                  <CardDescription>
                    Thorough examination of your security infrastructure and practices
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 text-muted-foreground">
                    <li>• Network security assessment</li>
                    <li>• Application security testing</li>
                    <li>• Infrastructure review</li>
                    <li>• Policy and procedure evaluation</li>
                  </ul>
                </CardContent>
              </Card>

              <Card className="shadow-card border-border/50 bg-card/80 backdrop-blur-sm">
                <CardHeader>
                  <CardTitle className="text-xl">Vulnerability Assessment</CardTitle>
                  <CardDescription>
                    Identification and analysis of security vulnerabilities in your systems
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 text-muted-foreground">
                    <li>• Automated vulnerability scanning</li>
                    <li>• Manual penetration testing</li>
                    <li>• Social engineering assessments</li>
                    <li>• Physical security evaluation</li>
                  </ul>
                </CardContent>
              </Card>

              <Card className="shadow-card border-border/50 bg-card/80 backdrop-blur-sm">
                <CardHeader>
                  <CardTitle className="text-xl">Risk Analysis</CardTitle>
                  <CardDescription>
                    Comprehensive risk assessment and impact analysis for your organization
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 text-muted-foreground">
                    <li>• Threat modeling and analysis</li>
                    <li>• Business impact assessment</li>
                    <li>• Risk prioritization matrix</li>
                    <li>• Compliance gap analysis</li>
                  </ul>
                </CardContent>
              </Card>

              <Card className="shadow-card border-border/50 bg-card/80 backdrop-blur-sm">
                <CardHeader>
                  <CardTitle className="text-xl">Prevention Strategies</CardTitle>
                  <CardDescription>
                    Development of comprehensive security strategies and implementation plans
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 text-muted-foreground">
                    <li>• Security roadmap development</li>
                    <li>• Incident response planning</li>
                    <li>• Employee training programs</li>
                    <li>• Continuous monitoring setup</li>
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
                Request Security Assessment Consultation
              </Button>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default SecurityAssessments;