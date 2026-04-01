import './About.css';

function About() {
  return (
    <div className="about-page">
      <section className="section">
        <h1 className="section-title">About Me</h1>

        <div className="about-grid">
          <div className="about-card">
            <div className="about-icon">
              <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M20 21V19C20 17.9391 19.5786 16.9217 18.8284 16.1716C18.0783 15.4214 17.0609 15 16 15H8C6.93913 15 5.92172 15.4214 5.17157 16.1716C4.42143 16.9217 4 17.9391 4 19V21" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                <circle cx="12" cy="7" r="4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </div>
            <h3>Career Objective</h3>
            <p>
              Enthusiastic and detail-oriented web development fresher with a solid foundation
              in C, C++, Java, Python, HTML, SQL, JavaScript, and modern web frameworks.
              Seeking to leverage coding skills and passion for creating dynamic, user-friendly
              websites in a challenging web developer role. Experienced in leading team projects
              and ensuring smooth collaboration for timely and quality deliverables.
            </p>
          </div>

          <div className="about-card">
            <div className="about-icon leadership">
              <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M17 21V19C17 17.9391 16.5786 16.9217 15.8284 16.1716C15.0783 15.4214 14.0609 15 13 15H5C3.93913 15 2.92172 15.4214 2.17157 16.1716C1.42143 16.9217 1 17.9391 1 19V21" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M9 11C11.2091 11 13 9.20914 13 7C13 4.79086 11.2091 3 9 3C6.79086 3 5 4.79086 5 7C5 9.20914 6.79086 11 9 11Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M23 21V19C22.9993 18.1137 22.7044 17.2528 22.1614 16.5523C21.6184 15.8519 20.8581 15.3516 20 15.13" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M16 3.13C16.8604 3.35031 17.623 3.85071 18.1676 4.55232C18.7122 5.25392 19.0078 6.11683 19.0078 7.005C19.0078 7.89318 18.7122 8.75608 18.1676 9.45769C17.623 10.1593 16.8604 10.6597 16 10.88" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </div>
            <h3>Leadership & Extracurricular</h3>
            <p>
              Spearheaded the college Kabaddi team as Captain, leading the squad to a runner-up
              finish at the RTMNU Sports Event, demonstrating strong strategic thinking, teamwork,
              and high-pressure decision-making. Orchestrated the college's Discipline Committee,
              managing 20+ sports events and fostering teamwork amongst 200+ students.
            </p>
          </div>

          <div className="about-card highlight-card">
            <div className="about-icon startup">
              <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M12 2L2 7L12 12L22 7L12 2Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M2 17L12 22L22 17" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M2 12L12 17L22 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </div>
            <h3>Startup Experience</h3>
            <p>
              Built the complete website for Ejense Technology startup (
              <a href="http://ejense.in/" target="_blank" rel="noopener noreferrer" className="startup-link">
                ejense.in
              </a>
              ), a modern corporate website using React.js, Tailwind CSS, and MERN stack.
              Delivered a responsive, high-performance website that boosted brand visibility by 40%.
            </p>
          </div>
        </div>
      </section>

      <section className="section education-section">
        <h2 className="section-title">Education</h2>

        <div className="timeline">
          <div className="timeline-item">
            <div className="timeline-marker">
              <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M22 10V6C22 4.89543 21.1046 4 20 4H4C2.89543 4 2 4.89543 2 6V10" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
                <path d="M12 14V22" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
                <path d="M8 22H16" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
                <rect x="2" y="4" width="20" height="16" rx="2" stroke="currentColor" strokeWidth="2"/>
              </svg>
            </div>
            <div className="timeline-content card">
              <span className="timeline-date">2021 – 2025</span>
              <h3>B.Tech in Computer Science Engineering</h3>
              <p className="timeline-institution">Priyadarshini Bhagwati College of Engineering, Nagpur</p>
              <span className="timeline-grade">CGPA: 7.43/10</span>
            </div>
          </div>

          <div className="timeline-item">
            <div className="timeline-marker">
              <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M12 3L1 9L12 15L21 10.09" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M5 13.18V17.18C5 18.38 8.89 20.18 12 20.18C15.11 20.18 19 18.38 19 17.18V13.18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </div>
            <div className="timeline-content card">
              <span className="timeline-date">2020</span>
              <h3>XII (HSC), Maharashtra State Board</h3>
              <p className="timeline-institution">Shri Rajendra Junior College, Nagpur</p>
              <span className="timeline-grade">Percentage: 70.92%</span>
            </div>
          </div>

          <div className="timeline-item">
            <div className="timeline-marker ssc-marker">
              <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M14 2H6C5.46957 2 4.96086 2.21071 4.58579 2.58579C4.21071 2.96086 4 3.46957 4 4V20C4 20.5304 4.21071 21.0391 4.58579 21.4142C4.96086 21.7893 5.46957 22 6 22H18C18.5304 22 19.0391 21.7893 19.4142 21.4142C19.7893 21.0391 20 20.5304 20 20V8L14 2Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                <polyline points="14,2 14,8 20,8" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M12 18V12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M9 15L12 12L15 15" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </div>
            <div className="timeline-content card ssc-card">
              <span className="timeline-date">2018</span>
              <h3>X (SSC), Maharashtra State Board </h3>
              <p className="timeline-institution">Gayatri Convent, Nagpur</p>
              <span className="timeline-grade ssc-grade">Score: 90%</span>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default About;
