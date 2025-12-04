import { ArrowRight, Github, ExternalLink } from "lucide-react";

import IntelliSlot from "../assets/IntelliSlot.png";
import intelli1 from "../assets/intelli1.png"; 
import intelli2 from "../assets/intelli2.png"; 
import intelli3 from "../assets/intelli3.png"; 
import intelli4 from "../assets/intelli4.png"; 
import intelli5 from "../assets/intelli5.png"; 
import intelli6 from "../assets/intelli6.png"; 

import DepotParcelSystem from "../assets/DepotParcelSystem.png";
import Muscript from "../assets/Muscript.png";

import Kovakara from "../assets/kovakarahome.png";
import kovakara1 from "../assets/kovakara1.png"; 
import kovakara2 from "../assets/kovakara2.png"
import kovakara3 from "../assets/kovakara3.png"
import kovakara4 from "../assets/kovakara4.png"
import kovakara5 from "../assets/kovakara5.png"
import kovakara6 from "../assets/kovakara6.png"
import kovakara7 from "../assets/kovakara7.png"
import kovakara8 from "../assets/kovakara8.png"
import kovakara9 from "../assets/kovakara9.png"
import kovakara10 from "../assets/kovakara10.png"
import kovakara11 from "../assets/kovakara11.png"
import kovakara12 from "../assets/kovakara12.png"
import kovakara13 from "../assets/kovakara13.png"
import kovakara14 from "../assets/kovakara14.png"
import kovakara15 from "../assets/kovakara15.png"
import kovakara16 from "../assets/kovakara16.png"
import kovakara17 from "../assets/kovakara17.png"

import { useState } from "react";

const projects = [
  {
    id: 1,
    title: "Kovakara International",
    description:
      "Built responsive, component-based UI using modern React patterns. Integrated REST APIs and optimized state flow. Converted Figma prototypes into pixel-perfect production interfaces. Improved performance through lazy loading, memoization, and code splitting. Mobile-first UI.",
    images: [Kovakara, kovakara1, kovakara2, kovakara3, kovakara4, kovakara5, kovakara8, kovakara6, kovakara7, kovakara9, kovakara10, kovakara11, kovakara12, kovakara13, kovakara14, kovakara15, kovakara16, kovakara17], // multiple images here
    demoUrl: "https://www.kovakara.com",
    tags: ["React.js", "JavaScript", "Tailwind CSS", "REST APIs", "PHP", "Vite"],
    githubUrl: "https://github.com/Explorerbees/kovakara-react-website",
  },
  {
    id: 2,
    title: "Intelli-Slot",
    description:
      "Admin dashboard with real-time slot monitoring. Live sync via Socket.io & Firebase Realtime Database. Clean UI and optimized component structure with conditional rendering.",
    images: [IntelliSlot, intelli1, intelli2, intelli3, intelli4, intelli5, intelli6], 
    tags: ["React.js", "Firebase Realtime Database", "Socket.io", "Node.js", "Express", "JavaScript/CSS"],
    githubUrl: "https://github.com/ayatirfann/Database-Systems-Distinction",
  },
  {
    id: 3,
    title: "Muscript",
    description:
      "Clean, distraction-free UI. Local storage system for journaling. Modular React Native components. Smooth cross-platform experience.",
    images: [Muscript],
    tags: ["React Native", "JavaScript", "AsyncStorage"],
    githubUrl: "https://github.com/ayatirfann/Mobile-Computing-Distinction-",
  },
  {
    id: 4,
    title: "Depot Parcel System",
    description:
      "Designed and implemented a parcel management system simulating real-world depot operations. Enabled workers to process customer queues, calculate fees, and release parcels efficiently. Applied three-tier architecture principles with clear separation of data, logic, and presentation layers. Implemented an MVC-based GUI for dynamic updates across parcel and customer panels. Developed core OOP classes such as Parcel, Customer, and Worker, applying composition and association principles. Utilized the Singleton Pattern for centralized logging and event tracking. Built the GUI entirely with Java components, ensuring modularity, responsiveness, and maintainability. Version-controlled iterative progress using Git to document implementation milestones.",
    images: [DepotParcelSystem],
    tags: ["Java", "OOP", "Microservices", "Software Architecture Principles"],
    githubUrl: "https://github.com/ayatirfann/Mobile-Computing-Distinction-",
  },
];

export const ProjectsSection = () => {
  const [activeProject, setActiveProject] = useState(null);
  const [activeImageIndex, setActiveImageIndex] = useState(0);

  const handleNextImage = () => {
    setActiveImageIndex((prevIndex) =>
      prevIndex === activeProject.images.length - 1 ? 0 : prevIndex + 1
    );
  };

  const handlePrevImage = () => {
    setActiveImageIndex((prevIndex) =>
      prevIndex === 0 ? activeProject.images.length - 1 : prevIndex - 1
    );
  };

  const openProject = (project) => {
    setActiveProject(project);
    setActiveImageIndex(0); // reset to first image on open
  };

  return (
    <section id="projects" className="py-24 px-4 relative">
      <div className="container mx-auto max-w-9xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
          Featured <span className="text-primary"> Projects </span>
        </h2>

        <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
          Some repositories are private due to academic or confidentiality reasons.
          If you'd like to view specific projects, feel free to reach out and I'll
          be happy to provide access.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, key) => (
            <div
              key={key}
              className="group bg-card rounded-lg overflow-hidden shadow-xs card-hover"
            >
              <div className="h-48 overflow-hidden">
                {/* Show first image as thumbnail */}
                <img
                  src={project.images[0]}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
              </div>

              <div className="p-6">
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag, idx) => (
                    <span
                      key={idx}
                      className="px-2 py-1 text-xs font-medium border rounded-full bg-secondary text-secondary-foreground"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <h3 className="text-xl font-semibold mb-1">{project.title}</h3>

                <button
                onClick={() => openProject(project)}
                className="cosmic-button mb-3">
                Read More
                </button>


                <div className="flex justify-between items-center">
                  <div className="flex space-x-3">
                    {project.demoUrl && (
                    <a
                    href={project.demoUrl}
                    target="_blank"
                    className="text-foreground/80 hover:text-primary transition-colors duration-300"
                    >
                <ExternalLink size={20} />
                  </a>
                    )}

                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-foreground/80 hover:text-primary transition-colors duration-300"
                    >
                      <Github size={20} />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <a
            className="cosmic-button w-fit flex items-center mx-auto gap-2"
            target="_blank"
            href="https://github.com/ayatirfann"
            rel="noopener noreferrer"
          >
            Check My Github <ArrowRight size={16} />
          </a>
        </div>
      </div>

      {activeProject && (
        <div className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center z-50 p-4 animate-fade-in">
          <div className="bg-card rounded-lg w-full max-w-[90vw] max-h-[90vh] shadow-lg p-6 relative overflow-y-auto">
            {/* CLOSE BUTTON */}
            <button
              onClick={() => setActiveProject(null)}
              className="absolute top-3 right-3 text-muted-foreground hover:text-primary"
            >
              ✕
            </button>

            {/* IMAGE CAROUSEL */}
            <div className="relative max-h-[80vh] overflow-auto rounded-lg mx-auto">
            <img
            src={activeProject.images[activeImageIndex]}
            alt={`${activeProject.title} image ${activeImageIndex + 1}`}
            className="block mx-auto max-w-full max-h-[80vh] object-contain"/>

              {/* Prev Button */}
              <button
                onClick={handlePrevImage}
                className="absolute top-1/2 left-2 -translate-y-1/2 bg-black/50 text-white rounded-full p-1 hover:bg-black/70"
                aria-label="Previous Image"
              >
                ‹
              </button>
              {/* Next Button */}
              <button
                onClick={handleNextImage}
                className="absolute top-1/2 right-2 -translate-y-1/2 bg-black/50 text-white rounded-full p-1 hover:bg-black/70"
                aria-label="Next Image"
              >
                ›
              </button>
            </div>

            {/* TITLE */}
            <h2 className="text-2xl font-semibold mt-4">{activeProject.title}</h2>

            {/* TAGS */}
            <div className="flex flex-wrap gap-2 my-3">
              {activeProject.tags.map((tag, idx) => (
                <span
                  key={idx}
                  className="px-2 py-1 text-xs font-medium border rounded-full bg-secondary text-secondary-foreground"
                >
                  {tag}
                </span>
              ))}
            </div>

            {/* DESCRIPTION */}
            <p className="text-muted-foreground mb-4">{activeProject.description}</p>

            {/* GITHUB LINK */}
            <a
              href={activeProject.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="text-primary font-medium underline"
            >
              View on GitHub
            </a>
          </div>
        </div>
      )}
    </section>
  );
};
