import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";

const DigitalForensics = () => {
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
              <div className="w-20 h-20 bg-cyber-green/10 rounded-lg flex items-center justify-center mb-6 mx-auto">
                <span className="text-4xl">💻</span>
              </div>
              <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6 text-glow">
                Digital <span className="text-cyber-green animate-cyber-pulse">Forensics</span>
              </h1>
              <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                Professional device analysis, data recovery, and forensic examination for legal and investigative purposes
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8 mb-12">
              <Card className="shadow-card border-border/50 bg-card/80 backdrop-blur-sm">
                <CardHeader>
                  <CardTitle className="text-xl">Device Analysis</CardTitle>
                  <CardDescription>
                    Comprehensive examination of computers, mobile devices, and storage media
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 text-muted-foreground">
                    <li>• Computer hard drive imaging</li>
                    <li>• Mobile device extraction</li>
                    <li>• Cloud storage analysis</li>
                    <li>• Network device examination</li>
                  </ul>
                </CardContent>
              </Card>

              <Card className="shadow-card border-border/50 bg-card/80 backdrop-blur-sm">
                <CardHeader>
                  <CardTitle className="text-xl">Data Recovery</CardTitle>
                  <CardDescription>
                    Recovery of deleted, corrupted, or hidden data from various storage devices
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 text-muted-foreground">
                    <li>• Deleted file recovery</li>
                    <li>• Formatted drive restoration</li>
                    <li>• Damaged device data extraction</li>
                    <li>• Encrypted data analysis</li>
                  </ul>
                </CardContent>
              </Card>

              <Card className="shadow-card border-border/50 bg-card/80 backdrop-blur-sm">
                <CardHeader>
                  <CardTitle className="text-xl">Evidence Collection</CardTitle>
                  <CardDescription>
                    Legal-standard evidence collection and documentation procedures
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 text-muted-foreground">
                    <li>• Forensically sound imaging</li>
                    <li>• Hash verification protocols</li>
                    <li>• Chain of custody maintenance</li>
                    <li>• Court-ready documentation</li>
                  </ul>
                </CardContent>
              </Card>

              <Card className="shadow-card border-border/50 bg-card/80 backdrop-blur-sm">
                <CardHeader>
                  <CardTitle className="text-xl">Timeline Analysis</CardTitle>
                  <CardDescription>
                    Detailed timeline reconstruction of digital activities and events
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 text-muted-foreground">
                    <li>• User activity timelines</li>
                    <li>• File system analysis</li>
                    <li>• Internet browsing history</li>
                    <li>• Application usage patterns</li>
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
                Request Digital Forensics Consultation
              </Button>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default DigitalForensics;