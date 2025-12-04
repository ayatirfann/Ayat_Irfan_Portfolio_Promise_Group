import { Briefcase, Code, User } from "lucide-react";

export const AboutSection = () => {
  return (
    <section id="about" className="py-24 px-4 relative">
      {" "}
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
          About <span className="text-primary"> Me</span>
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
          <div className="space-y-6">
            <h3 className="text-2xl font-semibold">
              Passionate Frontend Developer 
            </h3>

            <p className="text-muted-foreground">
              I'm a React-First Frontend Developer focused on building clean, scalable, and user-friendly interfaces.
            </p>

          
            <p className="text-muted-foreground">
              I specialize in transforming UI/UX designs into high-quality, performant frontend experiences that scale. 
              Accessibility is a core part of my engineering process. I design interfaces that support all kinds of users :)
            </p>

            <p className="text-muted foreground">
              Alongside engineering, I have experience working in Agile teams, collaborating with designers, backend developers, testers, 
              and participating in code reviews to maintain consistent, maintainable codebases. 
            </p>

            <p className="text-muted-foreground">
              I thrive in collaborative, non-corporate teams - exactly like Promise Group's culture. 
            </p>

            <p className="text-muted-foreground">
              
            </p>

            <div className="flex flex-col sm:flex-row gap-4 pt-4 justify-center">
              <a href="#contact" className="cosmic-button">
                {" "}
                Get In Touch
              </a>

              <a
                href="/Ayat_Irfan_CV.pdf"
                download= "Ayat_Irfan_CV.pdf"
                className="px-6 py-2 rounded-full border border-primary text-primary hover:bg-primary/10 transition-colors duration-300"
              >
                Download CV
              </a>
            </div>
          </div>

          <div className="grid grid-cols-1 gap-6">
            <div className="gradient-border p-6 card-hover">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <Code className="h-6 w-6 text-primary" />
                </div>
                <div className="text-left">
                  <h4 className="font-semibold text-lg"> Frontend Development</h4>
                  <p className="text-muted-foreground">
                    Building responsive, scalable web applications using React.js (Hooks, Context API) and modern CSS with Tailwind.
                    Experienced in REST API integration, component-driven architecture, and performance optimization for high-quality user experiences.
                  </p>
                </div>
              </div>
            </div>

            <div className="gradient-border p-6 card-hover">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <User className="h-6 w-6 text-primary" />
                </div>
                <div className="text-left">
                  <h4 className="font-semibold text-lg">UI/UX & Accessibility</h4>
                  <p className="text-muted-foreground">
                    Designing and implementing accessible, user-centered interfaces following WCAG 2.2 standards. 
                    Skilled in Figma-based UI development and using evaluation tools like WAVE to ensure inclusivity and usability.
                  </p>
                </div>
              </div>
            </div>

            <div className="gradient-border p-6 card-hover">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <Briefcase className="h-6 w-6 text-primary" />
                </div>

                <div className="text-left">
                  <h4 className="font-semibold text-lg">Agile Project Collaboration</h4>
                  <p className="text-muted-foreground">
                    Working efficiently in Agile teams using Scrum and Kanban methodologies. 
                    Proficient with tools like Jira, Trello, Git, and CI/CD pipelines for seamless planning, collaboration, and deployment.
                  </p>
                </div>
              </div>
            </div>

            <div className="gradient-border p-6 card-hover">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <Briefcase className="h-6 w-6 text-primary" />
                </div>

                <div className="text-left">
                  <h4 className="font-semibold text-lg">Performance & Code Quality</h4>
                  <p className="text-muted-foreground">
                    Applying best practices in code reviews, reusable component design, state management, and performance optimization. 
                  </p>
                </div>
              </div>
            </div>

            

            
            






          </div>
        </div>
      </div>
    </section>
  );
};