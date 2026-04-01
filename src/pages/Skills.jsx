import './Skills.css';

function Skills() {
  const skillCategories = [
    {
      title: "Programming Languages",
      icon: "code",
      skills: ["C", "C++", "Java", "Python"]
    },
    {
      title: "Web Technologies",
      icon: "web",
      skills: ["HTML5", "CSS3", "JavaScript", "React.js", "Node.js", "Express"]
    },
    {
      title: "Database Management",
      icon: "database",
      skills: ["MongoDB", "SQL", "Database Design"]
    },
    {
      title: "Modern Web Tools",
      icon: "tools",
      skills: ["Tailwind CSS", "Vite", "REST APIs", "Git & GitHub"]
    },
    {
      title: "Development Tools",
      icon: "dev",
      skills: ["VS Code", "IntelliJ IDEA", "MySQL", "Canva"]
    },
    {
      title: "Coursework",
      icon: "academic",
      skills: ["OOPs", "DBMS", "Data Structures", "Algorithms", "Operating Systems"]
    }
  ];

  const internships = [
    {
      company: "AgarkarMedia Pvt. Ltd.",
      role: "Web Developer (MERN Stack) Intern",
      period: "March 2023 – May 2023",
      highlights: [
        "Built responsive corporate websites using React.js and Tailwind CSS",
        "Improved brand visibility by 40% for client websites"
      ]
    },
    {
      company: "Ejense Technology",
      role: "MERN Stack & Python Development Intern",
      period: "Training Period",
      highlights: [
        "Developed complete startup website: http://ejense.in/",
        "Created real-time stock market dashboard with Python and APIs",
        "Reduced development time by 25% with modular components"
      ]
    }
  ];

  return (
    <div className="skills-page">
      <section className="section">
        <h1 className="section-title">Technical Skills</h1>

        <div className="skills-grid">
          {skillCategories.map((category, index) => (
            <div key={index} className="skill-category">
              <div className="skill-category-header">
                <div className={`skill-icon icon-${category.icon}`}>
                  <SkillIcon name={category.icon} />
                </div>
                <h3>{category.title}</h3>
              </div>
              <div className="skill-items">
                {category.skills.map((skill, i) => (
                  <span key={i} className="skill-tag">{skill}</span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="section internship-section">
        <h2 className="section-title">Internship Experience</h2>

        <div className="internship-grid">
          {internships.map((internship, index) => (
            <div key={index} className="internship-card">
              <div className="internship-header">
                <h3>{internship.company}</h3>
                <span className="internship-period">{internship.period}</span>
              </div>
              <p className="internship-role">{internship.role}</p>
              <ul className="internship-highlights">
                {internship.highlights.map((highlight, i) => (
                  <li key={i}>{highlight}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}

function SkillIcon({ name }) {
  const icons = {
    code: (
      <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M16 18L22 12L16 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M8 6L2 12L8 18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    ),
    web: (
      <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="2"/>
        <ellipse cx="12" cy="12" rx="10" ry="4" stroke="currentColor" strokeWidth="2"/>
        <path d="M12 2V22" stroke="currentColor" strokeWidth="2"/>
      </svg>
    ),
    database: (
      <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <ellipse cx="12" cy="5" rx="9" ry="3" stroke="currentColor" strokeWidth="2"/>
        <path d="M3 5V19C3 20.6569 7.02944 22 12 22C16.9706 22 21 20.6569 21 19V5" stroke="currentColor" strokeWidth="2"/>
        <path d="M3 12C3 13.6569 7.02944 15 12 15C16.9706 15 21 13.6569 21 12" stroke="currentColor" strokeWidth="2"/>
      </svg>
    ),
    tools: (
      <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    ),
    dev: (
      <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect x="2" y="3" width="20" height="14" rx="2" stroke="currentColor" strokeWidth="2"/>
        <path d="M8 21H16" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
        <path d="M12 17V21" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
      </svg>
    ),
    academic: (
      <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M12 3L1 9L12 15L21 10.09" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M5 13.18V17.18C5 18.38 8.89 20.18 12 20.18C15.11 20.18 19 18.38 19 17.18V13.18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    )
  };

  return icons[name] || null;
}

export default Skills;
