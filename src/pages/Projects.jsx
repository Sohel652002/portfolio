import './Projects.css';

function Projects() {
  const projects = [
    {
      title: "Ejense Technology Corporate Website",
      period: "March 2023 – May 2023",
      type: "Startup Project | Live Website",
      link: "http://ejense.in/",
      description: [
        "Built the complete corporate website for Ejense Technology startup using React.js and Tailwind CSS",
        "Engineered responsive corporate pages with structured layouts, improving brand visibility by 40%",
        "Developed modular React components including hero sections, service cards, feature blocks, and CTAs",
        "Created a clean, reusable code structure that reduced development time by 25%",
        "Implemented scalable architecture with optimized routing, achieving 35% faster load performance"
      ],
      tags: ["React.js", "Tailwind CSS", "Node.js", "MongoDB", "Express", "Production"]
    },
    {
      title: "Netflix-Style Streaming Interface",
      period: "Training Project",
      type: "AgarkarMedia Pvt. Ltd.",
      description: [
        "Engineered a Netflix-style web interface with multi-section, responsive homepage",
        "Integrated API-driven features connected to MongoDB and SQL-based backend services",
        "Optimized data flow and reduced rendering delays for smoother content delivery",
        "Developed scalable full-stack modules using MERN workflows and GitHub collaboration"
      ],
      tags: ["React.js", "Node.js", "MongoDB", "API Integration", "GitHub"]
    },
    {
      title: "Real-Time Stock Market Dashboard",
      period: "Internship Project",
      type: "Python Development | Ejense Technology",
      description: [
        "Engineered a real-time stock market dashboard using Python, REST APIs, and SQL",
        "Automated live data collection and trend analysis for 50+ stocks",
        "Improved monitoring efficiency by nearly 90% with interactive dashboards",
        "Implemented alert systems and visual charts to increase decision-making speed by ~40%"
      ],
      tags: ["Python", "REST APIs", "SQL", "Data Visualization", "Automation"]
    },
    {
      title: "Product Verification System",
      period: "Jan 2025",
      type: "Final Year Project",
      description: [
        "Developed a product verification system using smart contracts and Web3.js",
        "Enabled end-to-end product traceability and real-time QR-based authentication",
        "Integrated MetaMask authentication and React-based UI for secure interactions",
        "Implemented tamper-proof on-chain verification for product authenticity"
      ],
      tags: ["Web3.js", "React", "MetaMask", "Smart Contracts"]
    }
  ];

  return (
    <div className="projects-page">
      <section className="section">
        <h1 className="section-title">Featured Projects</h1>

        <div className="projects-grid">
          {projects.map((project, index) => (
            <div key={index} className={`project-card ${index === 0 ? 'highlight-project' : ''}`}>
              <div className="project-header">
                <span className="project-period">{project.period}</span>
                <span className="project-type">{project.type}</span>
              </div>

              <div className="project-title-wrapper">
                <h3 className="project-title">{project.title}</h3>
                {project.link && (
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="project-link"
                  >
                    <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M18 13V19C18 19.5304 17.7893 20.0391 17.4142 20.4142C17.0391 20.7893 16.5304 21 16 21H5C4.46957 21 3.96086 20.7893 3.58579 20.4142C3.21071 20.0391 3 19.5304 3 19V8C3 7.46957 3.21071 6.96086 3.58579 6.58579C3.96086 6.21071 4.46957 6 5 6H11" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                      <path d="M15 3H21V9" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                      <path d="M10 14L21 3" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                    Visit Site
                  </a>
                )}
              </div>

              <ul className="project-description">
                {project.description.map((item, i) => (
                  <li key={i}>{item}</li>
                ))}
              </ul>

              <div className="project-tags">
                {project.tags.map((tag, i) => (
                  <span key={i} className="tag">{tag}</span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}

export default Projects;
