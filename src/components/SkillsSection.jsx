import { useState } from "react";
import { cn } from "@/lib/utils";

const skills = [
  // Frontend
  { name: "React", level: 90, category: "frontend" },
  { name: "Tailwind CSS", level: 90, category: "frontend" },
  { name: "Figma-to-React Implementation", level: 90, category: "frontend" },
  { name: "WCAG 2.2", level: 90, category: "frontend" },
  { name: "JavaScript", level: 90, category: "frontend" },
  { name: "HTML, CSS", level: 90, category: "frontend" },
  { name: "Responsive Web Design", level: 90, category: "frontend" },
  { name: "React Native", level: 90, category: "frontend" },


  // Backend
  { name: "Node.js", level: 70, category: "backend" },
  { name: "Express", level: 70, category: "backend" },
  { name: "Firebase", level: 85, category: "backend" },
  { name: "PHP", level: 50, category: "backend" },
  { name: "MySQL/PostgreSQL", level: 90, category: "backend" },
  { name: "Cloud Deployment Workflows", level: 90, category: "backend" },

  // Databases
  { name: "SQL (Database design/ Schema creation)", level: 82, category: "databases" },
  { name: "Firestore", level: 50, category: "databases" },
   
  // Data Analysis
  { name: "Pandas", level: 65, category: "data analysis" },
  { name: "Numpy", level: 65, category: "data analysis" },
  { name: "Matplotlib", level: 60, category: "data analysis" },
  { name: "Scikit-Learn", level: 65, category: "data analysis" },
  { name: "OpenCV", level: 60, category: "data analysis" },
  { name: "TensorFlow", level: 60, category: "data analysis" },
  { name: "SQL (Querying & Analysis)", level: 81, category: "data analysis" },
  { name: "Excel", level:80, category: "data analysis" },
  { name: "Power BI", level: 80, category: "data analysis" },

  //Machine learning 
  { name: "DeepFace", level: 50, category: "machine learning" },
  { name: "YOLO v8", level: 70, category: "machine learning" },
  { name: "Tensorflow", level: 70, category: "machine learning" },

  // Programming Languages 
  { name: "Python", level: 75, category: "programming languages" },
  { name: "HTML/CSS", level: 85, category: "programming languages" },
  { name: "JavaScript", level: 75, category: "programming languages" },
  { name: "SQL", level: 80, category: "programming languages" },
  { name: "Assembly", level: 40, category: "programming languages" },

  //project management 
  { name: "Agile (Scrum, Kanban)", level: 80, category: "project management" },
  { name: "Trello", level: 80, category: "project management" },
  { name: "Spring Planning & Execution", level: 80, category: "project management" },
  { name: "Backlog Grooming", level: 70, category: "project management" },
  { name: "Team Collaboration", level: 90, category: "project management" },
  { name: "Stakeholder Communication", level: 75, category: "project management" },

  // Research 
  { name: "Literature Reviews", level: 90, category: "research" },
  { name: "Data Collection", level: 70, category: "research" },
  { name: "Qualitative Analysis", level: 70, category: "research" },
  { name: "Quantitative Analysis", level: 70, category: "research" },
  { name: "Report Writing", level: 90, category: "research" },
  { name: "Citation Management", level: 90, category: "research" },

  //FRONTEND ENGINEERING 
  { name: "REST API Integration", level: 90, category: "frontend engineering" },
  { name: "Git, GitHub, CI/CD", level: 90, category: "frontend engineering" },
  { name: "Agile (Scrum, Kanban)", level: 90, category: "frontend engineering" },
  { name: "Code Reviews and Best Practices", level: 90, category: "frontend engineering" },
];

const categories = ["all", "frontend", "frontend engineering", "backend", "machine learning",];

export const SkillsSection = () => {
  const [activeCategory, setActiveCategory] = useState("all");

  const filteredSkills = skills.filter(
    (skill) => activeCategory === "all" || skill.category === activeCategory
  );
  return (
    <section id="skills" className="py-24 px-4 relative bg-secondary/30">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
          My <span className="text-primary"> Skills</span>
        </h2>

        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((category, key) => (
            <button
              key={key}
              onClick={() => setActiveCategory(category)}
              className={cn(
                "px-5 py-2 rounded-full transition-colors duration-300 capitalize",
                activeCategory === category
                  ? "bg-primary text-primary-foreground"
                  : "bg-secondary/70 text-forefround hover:bd-secondary"
              )}
            >
              {category}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredSkills.map((skill, key) => (
            <div
              key={key}
              className="bg-card p-6 rounded-lg shadow-xs card-hover"
            >
              <div className="text-left mb-4">
                <h3 className="font-semibold text-lg"> {skill.name}</h3>
              </div>
              <div className="w-full bg-secondary/50 h-2 rounded-full overflow-hidden">
                <div
                  className="bg-primary h-2 rounded-full origin-left animate-[grow_1.5s_ease-out]"
                  style={{ width: skill.level + "%" }}
                />
              </div>

              <div className="text-right mt-1">
                <span className="text-sm text-muted-foreground">
                  {skill.level}%
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};