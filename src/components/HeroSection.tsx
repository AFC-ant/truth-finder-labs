import { Button } from "@/components/ui/button";
import heroImage from "@/assets/hero-cyber-investigations.jpg";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Cyber Background Effects */}
      <div className="absolute inset-0 bg-gradient-hero">
        <div className="absolute inset-0 bg-gradient-cyber opacity-50"></div>
      </div>
      
      {/* Animated Grid Pattern */}
      <div 
        className="absolute inset-0 opacity-20"
        style={{
          backgroundImage: `
            linear-gradient(rgba(0, 200, 255, 0.2) 1px, transparent 1px),
            linear-gradient(90deg, rgba(0, 200, 255, 0.2) 1px, transparent 1px)
          `,
          backgroundSize: '50px 50px'
        }}
      ></div>
      
      {/* Content */}
      <div className="relative z-10 text-center text-foreground px-4 max-w-4xl mx-auto">
        <h1 className="text-4xl md:text-6xl font-bold mb-6 animate-glow-pulse text-glow">
          Uncovering the Truth in a <span className="text-primary animate-cyber-pulse">Digital World</span>
        </h1>
        <p className="text-xl md:text-2xl mb-8 text-muted-foreground animate-slide-up">
          Specialized in <span className="text-accent">Cyber Investigations</span>, <span className="text-cyber-green">Digital Forensics</span>, and <span className="text-cyber-purple">Crypto Asset Tracing</span>
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center animate-slide-up">
          <Button 
            size="lg" 
            className="text-lg px-8 py-4 cyber-glow hover:shadow-neon transition-all duration-300"
            onClick={() => {
              const element = document.getElementById('contact');
              element?.scrollIntoView({ behavior: 'smooth' });
            }}
          >
            Request a Confidential Consultation
          </Button>
          <Button 
            size="lg" 
            variant="outline" 
            className="text-lg px-8 py-4 border-primary/30 hover:bg-primary/10 hover:border-primary transition-all duration-300"
            onClick={() => {
              const element = document.getElementById('about');
              element?.scrollIntoView({ behavior: 'smooth' });
            }}
          >
            Learn More
          </Button>
        </div>
      </div>
      
      {/* Cyber Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-primary animate-cyber-pulse">
        <div className="w-6 h-10 border-2 border-primary/50 rounded-full flex justify-center cyber-glow">
          <div className="w-1 h-3 bg-primary rounded-full mt-2 animate-neon-flicker"></div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;