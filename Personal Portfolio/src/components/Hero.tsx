import { Button } from "@/components/ui/button";
import { Mail, Download, Github, Linkedin } from "lucide-react";
import heroBg from "@/assets/hero-bg.jpg";

const Hero = () => {
  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section 
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
      style={{
        backgroundImage: `linear-gradient(rgba(17, 24, 39, 0.85), rgba(17, 24, 39, 0.85)), url(${heroBg})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-transparent to-accent/10" />
      
      <div className="container mx-auto px-4 z-10">
        <div className="text-center space-y-8 animate-fade-in">
          <div className="space-y-4">
            <h1 className="text-5xl md:text-7xl font-bold tracking-tight">
              <span className="text-foreground">Dikshant</span>{" "}
              <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                Shubhankar
              </span>
            </h1>
            <p className="text-2xl md:text-3xl text-muted-foreground font-light">
              Full-Stack Web Developer
            </p>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Building innovative solutions with React.js, Blockchain, and modern web technologies
            </p>
          </div>

          <div className="flex flex-wrap gap-4 justify-center items-center">
            <Button 
              size="lg"
              onClick={() => scrollToSection("contact")}
              className="bg-gradient-to-r from-primary to-accent hover:shadow-[0_0_30px_hsl(189,94%,43%,0.5)] transition-all duration-300"
            >
              <Mail className="mr-2 h-5 w-5" />
              Get in Touch
            </Button>
            <Button 
              size="lg"
              variant="secondary"
              className="hover:shadow-lg transition-all duration-300"
            >
              <Download className="mr-2 h-5 w-5" />
              Download Resume
            </Button>
          </div>

          <div className="flex gap-6 justify-center pt-8">
            <a 
              href="https://github.com" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-primary transition-colors duration-300"
            >
              <Github className="h-6 w-6" />
            </a>
            <a 
              href="https://linkedin.com" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-primary transition-colors duration-300"
            >
              <Linkedin className="h-6 w-6" />
            </a>
          </div>
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-float">
        <div className="w-6 h-10 border-2 border-primary rounded-full flex items-start justify-center p-2">
          <div className="w-1 h-3 bg-primary rounded-full animate-pulse" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
