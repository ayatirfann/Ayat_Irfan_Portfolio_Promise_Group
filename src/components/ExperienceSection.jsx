export const ExperienceSection = () => {
  return (
    <section id="experience" className="py-24 px-4 relative">
      <div className="container mx-auto max-w-5xl">
        {/* Section Heading */}
        <h2 className="text-3xl md:text-4xl font-bold mb-16 text-center">
          Professional <span className="text-primary">Experience</span>
        </h2>

        {/* Position Info */}
        <div className="text-center mb-12">
          <h3 className="text-2xl font-semibold">Junior Software Developer</h3>
          <h4 className="font-bold text-primary">
            National Incubation Center for Aerospace Technologies (NICAT)
          </h4>
          <p className="text-sm text-muted-foreground mt-1 font-bold text-primary">
            July 2024 – Present
          </p>
        </div>

        {/* EXPERIENCE CARDS */}
        <div className="space-y-8">
          {/* DATABASE DESIGN & ANALYTICS */}
          <div className="gradient-border p-6 card-hover text-left space-y-3">
            <h4 className="font-semibold text-lg">
              React Frontend Development 
            </h4>
            <p className="text-muted-foreground">
              Developed and deployed multiply React interfaces used by industrial partners. 
              Built reusable UI components with clean state logic and module architecture. 
              Implemented WCAG-compliant UI elements to enhance accessibility. 
              Participated in team code reviews, improving code consistency.
            </p>
          </div>

          {/* DATA VISUALIZATION */}
          <div className="gradient-border p-6 card-hover text-left space-y-3">
            <h4 className="font-semibold text-lg">
              UI/UX Collaboration
            </h4>
            <p className="text-muted-foreground">
              Converted detailed Figma designs into pixel-perfect, responsive layouts. 
            </p>
          </div>

          {/* MACHINE LEARNING */}
          <div className="gradient-border p-6 card-hover text-left space-y-3">
            <h4 className="font-semibold text-lg">
              API Integration
            </h4>
            <p className="text-muted-foreground">
              Integrated RESTful services and optimized async operations. Ensured consistent 
              data flow across components. 
            </p>
          </div>

          {/* WEB DEVELOPMENT */}
          <div className="gradient-border p-6 card-hover text-left space-y-3">
            <h4 className="font-semibold text-lg">Software Audits & Performance Fixes</h4>
            <p className="text-muted-foreground">
              Audited frontend codebases for usability and bottlenecks. Produced reports with 
              recommendations for optimization. Improved load times, interaction speed, and UI responsiveness. 
            </p>
          </div>

          {/* SOFTWARE AUDIT */}
          <div className="gradient-border p-6 card-hover text-left space-y-3">
            <h4 className="font-semibold text-lg">
              Agile Teamwork
            </h4>
            <p className="text-muted-foreground">
              Used Git, JIRA, CI/CD pipelines. Worked in sprints & participated in daily standups.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
