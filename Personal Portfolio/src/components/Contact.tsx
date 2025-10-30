import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Mail, Phone, Github, Linkedin } from "lucide-react";

const Contact = () => {
  return (
    <section id="contact" className="py-20 bg-secondary/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold mb-4">
            Get in <span className="text-primary">Touch</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-primary to-accent mx-auto" />
          <p className="text-muted-foreground mt-4 max-w-2xl mx-auto">
            I'm always open to discussing new projects, creative ideas, or opportunities to be part of your visions.
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <Card className="p-8 bg-card border-border">
            <div className="grid md:grid-cols-2 gap-8">
              <div className="space-y-6">
                <div>
                  <h3 className="text-xl font-semibold mb-4">Contact Information</h3>
                  <div className="space-y-4">
                    <a 
                      href="mailto:shubhankardikshant@gmail.com"
                      className="flex items-center space-x-3 text-muted-foreground hover:text-primary transition-colors duration-300 group"
                    >
                      <div className="bg-primary/10 p-2 rounded-lg group-hover:bg-primary/20 transition-all duration-300">
                        <Mail className="h-5 w-5 text-primary" />
                      </div>
                      <span>shubhankardikshant@gmail.com</span>
                    </a>
                    <a 
                      href="tel:+917061171071"
                      className="flex items-center space-x-3 text-muted-foreground hover:text-primary transition-colors duration-300 group"
                    >
                      <div className="bg-primary/10 p-2 rounded-lg group-hover:bg-primary/20 transition-all duration-300">
                        <Phone className="h-5 w-5 text-primary" />
                      </div>
                      <span>+91 7061171071</span>
                    </a>
                  </div>
                </div>

                <div>
                  <h3 className="text-xl font-semibold mb-4">Connect With Me</h3>
                  <div className="flex space-x-4">
                    <Button 
                      variant="secondary"
                      size="icon"
                      className="hover:bg-primary hover:text-primary-foreground transition-all duration-300"
                      asChild
                    >
                      <a href="https://github.com" target="_blank" rel="noopener noreferrer">
                        <Github className="h-5 w-5" />
                      </a>
                    </Button>
                    <Button 
                      variant="secondary"
                      size="icon"
                      className="hover:bg-primary hover:text-primary-foreground transition-all duration-300"
                      asChild
                    >
                      <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
                        <Linkedin className="h-5 w-5" />
                      </a>
                    </Button>
                  </div>
                </div>
              </div>

              <div className="space-y-4">
                <h3 className="text-xl font-semibold mb-4">Let's Work Together</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Whether you have a project in mind, need a full-stack developer for your team, 
                  or just want to connect, I'd love to hear from you. Feel free to reach out through 
                  any of the channels listed here.
                </p>
                <Button 
                  className="w-full bg-gradient-to-r from-primary to-accent hover:shadow-glow transition-all duration-300"
                  asChild
                >
                  <a href="mailto:shubhankardikshant@gmail.com">
                    <Mail className="mr-2 h-5 w-5" />
                    Send Email
                  </a>
                </Button>
              </div>
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Contact;
