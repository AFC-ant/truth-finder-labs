import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";

const CryptoTracing = () => {
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
              <div className="w-20 h-20 bg-cyber-purple/10 rounded-lg flex items-center justify-center mb-6 mx-auto">
                <span className="text-4xl">₿</span>
              </div>
              <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6 text-glow">
                Crypto Asset <span className="text-cyber-purple animate-cyber-pulse">Tracing</span>
              </h1>
              <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                Advanced blockchain analysis and cryptocurrency investigation services for asset recovery and compliance
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8 mb-12">
              <Card className="shadow-card border-border/50 bg-card/80 backdrop-blur-sm">
                <CardHeader>
                  <CardTitle className="text-xl">Blockchain Analysis</CardTitle>
                  <CardDescription>
                    Deep analysis of blockchain transactions across multiple networks
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 text-muted-foreground">
                    <li>• Bitcoin transaction analysis</li>
                    <li>• Ethereum and ERC-20 tokens</li>
                    <li>• Multi-chain investigations</li>
                    <li>• DeFi protocol analysis</li>
                  </ul>
                </CardContent>
              </Card>

              <Card className="shadow-card border-border/50 bg-card/80 backdrop-blur-sm">
                <CardHeader>
                  <CardTitle className="text-xl">Transaction Tracing</CardTitle>
                  <CardDescription>
                    Following cryptocurrency movements through complex transaction patterns
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 text-muted-foreground">
                    <li>• End-to-end transaction tracking</li>
                    <li>• Mixing service analysis</li>
                    <li>• Exchange deposit identification</li>
                    <li>• Cross-chain bridges</li>
                  </ul>
                </CardContent>
              </Card>

              <Card className="shadow-card border-border/50 bg-card/80 backdrop-blur-sm">
                <CardHeader>
                  <CardTitle className="text-xl">Address Clustering</CardTitle>
                  <CardDescription>
                    Identifying related addresses and wallet ownership patterns
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 text-muted-foreground">
                    <li>• Wallet clustering algorithms</li>
                    <li>• Address relationship mapping</li>
                    <li>• Entity identification</li>
                    <li>• Risk scoring systems</li>
                  </ul>
                </CardContent>
              </Card>

              <Card className="shadow-card border-border/50 bg-card/80 backdrop-blur-sm">
                <CardHeader>
                  <CardTitle className="text-xl">Fund Recovery</CardTitle>
                  <CardDescription>
                    Support for cryptocurrency asset recovery and legal proceedings
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 text-muted-foreground">
                    <li>• Asset recovery strategies</li>
                    <li>• Exchange cooperation</li>
                    <li>• Legal documentation</li>
                    <li>• Compliance reporting</li>
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
                Request Crypto Tracing Consultation
              </Button>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default CryptoTracing;