import { Card } from "@/components/ui/card";
import { Briefcase } from "lucide-react";

const Experience = () => {
  return (
    <section id="experience" className="py-20 bg-secondary/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold mb-4">
            Work <span className="text-primary">Experience</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-primary to-accent mx-auto" />
        </div>

        <div className="max-w-4xl mx-auto">
          <Card className="p-8 bg-card border-border hover:border-primary transition-all duration-300 hover:shadow-glow">
            <div className="flex items-start space-x-6">
              <div className="bg-primary/10 p-4 rounded-lg">
                <Briefcase className="h-8 w-8 text-primary" />
              </div>
              <div className="flex-1">
                <div className="flex flex-wrap justify-between items-start mb-4">
                  <div>
                    <h3 className="text-2xl font-bold mb-1">Full-Stack Web Developer</h3>
                    <p className="text-primary font-semibold">Unified Mentor</p>
                  </div>
                  <div className="text-right">
                    <p className="text-muted-foreground">Remote</p>
                    <p className="text-sm text-muted-foreground">July 2025 - October 2025</p>
                  </div>
                </div>
                <ul className="space-y-3 text-muted-foreground">
                  <li className="flex items-start">
                    <span className="text-primary mr-2">▹</span>
                    <span>Currently undertaking a 3-month Full-Stack Web Development Internship, focusing on end-to-end web application development</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-primary mr-2">▹</span>
                    <span>Gaining hands-on experience building responsive, scalable web solutions under industry mentorship</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-primary mr-2">▹</span>
                    <span>Utilizing modern tech stacks including React.js, HTML, and CSS to deliver high-quality applications</span>
                  </li>
                </ul>
              </div>
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Experience;
