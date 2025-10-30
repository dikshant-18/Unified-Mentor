import { Card } from "@/components/ui/card";
import { Award, Trophy, Star } from "lucide-react";

const Achievements = () => {
  const achievements = [
    {
      title: "Smart India Hackathon 2024",
      description: "Advanced to Round 3 of the prestigious Smart India Hackathon",
      icon: Trophy,
    },
    {
      title: "Cricket Tournament Winner",
      description: "Inter-College Tournament hosted by TMU",
      icon: Trophy,
    },
    {
      title: "Chess Tournament Finalist",
      description: "Demonstrated strategic thinking and competitive excellence",
      icon: Star,
    },
    {
      title: "Edu4U Club - Design Co-Lead",
      description: "Leading design initiatives at VIT Bhopal",
      icon: Award,
    },
  ];

  const certification = {
    title: "Web Development Certification",
    provider: "Coursera",
  };

  return (
    <section id="achievements" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold mb-4">
            Achievements & <span className="text-primary">Certifications</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-primary to-accent mx-auto" />
        </div>

        <div className="max-w-6xl mx-auto space-y-8">
          <div className="mb-8">
            <h3 className="text-2xl font-semibold mb-6 text-center">Honors & Awards</h3>
            <div className="grid md:grid-cols-2 gap-6">
              {achievements.map((achievement, index) => (
                <Card 
                  key={index}
                  className="p-6 bg-card border-border hover:border-primary transition-all duration-300 hover:shadow-glow group"
                >
                  <div className="flex items-start space-x-4">
                    <div className="bg-primary/10 p-3 rounded-lg group-hover:bg-primary/20 transition-all duration-300">
                      <achievement.icon className="h-6 w-6 text-primary" />
                    </div>
                    <div>
                      <h4 className="text-lg font-semibold mb-2">{achievement.title}</h4>
                      <p className="text-muted-foreground text-sm">{achievement.description}</p>
                    </div>
                  </div>
                </Card>
              ))}
            </div>
          </div>

          <div>
            <h3 className="text-2xl font-semibold mb-6 text-center">Certifications</h3>
            <Card className="p-6 bg-card border-border hover:border-primary transition-all duration-300 hover:shadow-glow max-w-md mx-auto">
              <div className="flex items-center space-x-4">
                <div className="bg-primary/10 p-3 rounded-lg">
                  <Award className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h4 className="text-lg font-semibold">{certification.title}</h4>
                  <p className="text-muted-foreground text-sm">{certification.provider}</p>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Achievements;
