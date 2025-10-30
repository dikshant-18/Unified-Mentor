import { Card } from "@/components/ui/card";
import { GraduationCap } from "lucide-react";

const About = () => {
  return (
    <section id="about" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold mb-4">
            About <span className="text-primary">Me</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-primary to-accent mx-auto" />
        </div>

        <div className="max-w-4xl mx-auto space-y-8">
          <div className="text-center space-y-4">
            <p className="text-lg text-muted-foreground leading-relaxed">
              I'm a passionate Full-Stack Web Developer currently pursuing my B.Tech in Computer Science 
              with a specialization in Education Technology at VIT Bhopal University. With a strong foundation 
              in modern web technologies and a keen interest in blockchain, I strive to build innovative 
              solutions that make a difference.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            <Card className="p-6 bg-card border-border hover:border-primary transition-all duration-300 hover:shadow-glow">
              <div className="flex items-start space-x-4">
                <GraduationCap className="h-8 w-8 text-primary flex-shrink-0" />
                <div>
                  <h3 className="text-xl font-semibold mb-2">VIT Bhopal University</h3>
                  <p className="text-muted-foreground mb-1">CSE (Education Technology)</p>
                  <p className="text-sm text-muted-foreground">June 2022 - Present</p>
                  <p className="text-primary font-semibold mt-2">CGPA: 8.23</p>
                </div>
              </div>
            </Card>

            <Card className="p-6 bg-card border-border hover:border-primary transition-all duration-300 hover:shadow-glow">
              <div className="flex items-start space-x-4">
                <GraduationCap className="h-8 w-8 text-primary flex-shrink-0" />
                <div>
                  <h3 className="text-xl font-semibold mb-2">Camford Public School</h3>
                  <p className="text-muted-foreground mb-1">Class XII</p>
                  <p className="text-sm text-muted-foreground">May 2021</p>
                  <p className="text-primary font-semibold mt-2">84%</p>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
