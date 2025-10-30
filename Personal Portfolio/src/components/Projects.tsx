import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Shield, MousePointer } from "lucide-react";

const Projects = () => {
  const projects = [
    {
      title: "DocShield - Document Verification System",
      description: "An automated document verification system using BLAKE3 hashing, smart contracts, and IPFS for secure, tamper-proof validation. Offers real-time management, decentralized storage, and enhanced security, replacing manual verification processes in government, banking, and education sectors.",
      technologies: ["Blockchain", "BLAKE3", "Smart Contracts", "IPFS"],
      icon: Shield,
    },
    {
      title: "Virtual Mouse",
      description: "An innovative gesture-based mouse control system allowing users to access all mouse controls using finger gestures. Various gestures are mapped to different mouse controls for convenience, helping during pandemic situations or for people with disabilities and presentations.",
      technologies: ["React.js", "HTML", "CSS", "OpenCV"],
      icon: MousePointer,
    },
  ];

  return (
    <section id="projects" className="py-20 bg-secondary/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold mb-4">
            Featured <span className="text-primary">Projects</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-primary to-accent mx-auto" />
        </div>

        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-6">
          {projects.map((project, index) => (
            <Card 
              key={index}
              className="p-8 bg-card border-border hover:border-primary transition-all duration-300 hover:shadow-glow group"
            >
              <div className="space-y-4">
                <div className="flex items-center space-x-4">
                  <div className="bg-primary/10 p-4 rounded-lg group-hover:bg-primary/20 transition-all duration-300">
                    <project.icon className="h-8 w-8 text-primary" />
                  </div>
                  <h3 className="text-2xl font-bold flex-1">{project.title}</h3>
                </div>
                
                <p className="text-muted-foreground leading-relaxed">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2 pt-2">
                  {project.technologies.map((tech, techIndex) => (
                    <Badge 
                      key={techIndex}
                      variant="secondary"
                      className="px-3 py-1 bg-secondary hover:bg-primary hover:text-primary-foreground transition-all duration-300"
                    >
                      {tech}
                    </Badge>
                  ))}
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
