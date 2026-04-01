import { Link } from 'react-router-dom';
import './Home.css';

function Home() {
  return (
    <section className="hero">
      <div className="hero-content">
        <div className="hero-badge animate-fade-in">
          <span className="pulse-dot"></span> Fresher | Open to Opportunities
        </div>

        <h1 className="hero-title animate-fade-in">
          Hi, I'm <span className="gradient-text">Sohel Sheikh</span>
        </h1>

        <p className="hero-subtitle animate-fade-in">
          Full Stack Developer specializing in MERN Stack
        </p>

        <p className="hero-description animate-fade-in">
          B.Tech Computer Science graduate (2025) with hands-on experience in React.js, Node.js,
          Python, and modern web development. Passionate about creating dynamic, user-friendly
          web applications and innovative solutions. Built the complete website for Ejense Technology
          startup.
        </p>

        <div className="hero-cta animate-fade-in">
          <Link to="/projects" className="btn btn-primary">View My Work</Link>
          <Link to="/contact" className="btn btn-outline">Get In Touch</Link>
        </div>

        <div className="hero-stats animate-fade-in">
          <div className="stat-item">
            <span className="stat-number">5+</span>
            <span className="stat-label">Projects Completed</span>
          </div>
          <div className="stat-item">
            <span className="stat-number">Fresher</span>
            <span className="stat-label">Ready to Start</span>
          </div>
          <div className="stat-item">
            <span className="stat-number">10+</span>
            <span className="stat-label">Technologies</span>
          </div>
        </div>
      </div>

      <div className="hero-visual animate-fade-in">
        <div className="code-block">
          <pre><code>
{`const developer = {
  name: "Sohel Sheikh",
  role: "Full Stack Developer",
  skills: ["React", "Node.js",
           "Python", "MongoDB"],
  passion: "Building amazing",
  currently: "Open to work"
};`}
          </code></pre>
        </div>
      </div>
    </section>
  );
}

export default Home;
