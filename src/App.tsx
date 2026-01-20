import "./App.css";
import atulImage from "./assets/atul.png";

function App() {
  return (
    <>
      <nav className="navbar">
        <div className="logo">ATUL</div>
        <ul className="nav-links">
          <li>
            <a href="#home">Home</a>
          </li>
          <li>
            <a href="#experience">Experience</a>
          </li>
          <li>
            <a href="#projects">Projects</a>
          </li>
          <li>
            <a href="#skills">Skills</a>
          </li>
          <li>
            <a href="#achievements">Achievements</a>
          </li>
          <li>
            <a href="#contact">Contact</a>
          </li>
        </ul>
      </nav>

      <section className="hero" id="home">
        <div className="hero-content">
          <div className="hero-text">
            <h1>Hi, I'm Atul</h1>
            <h2>Software Developer</h2>
            <p>
              B.Tech CSE Student at IIIT Ranchi | Full-Stack Developer |
              Passionate about building scalable applications and solving
              complex problems
            </p>
            <div className="social-links">
              <a
                href="https://github.com/atul753590"
                target="_blank"
                rel="noopener noreferrer"
              >
                GitHub
              </a>
              <a
                href="https://linkedin.com/in/atul753590"
                target="_blank"
                rel="noopener noreferrer"
              >
                LinkedIn
              </a>
              <a href="mailto:atul753590@gmail.com">Email</a>
            </div>
          </div>
          <div className="hero-image">
            <div className="image-container">
              <img src={atulImage} alt="Atul" />
            </div>
          </div>
        </div>
      </section>

      <section id="experience">
        <h2 className="section-title">Experience</h2>
        <div className="experience-grid">
          <div className="experience-card">
            <h3>Software Development Intern</h3>
            <div className="company">Fairdeal.Market</div>
            <div className="date">Sep 2025 - Present | Onsite</div>
            <ul>
              <li>
                Developed and integrated new features into the company's
                platform to enhance warehouse and order management efficiency
              </li>
              <li>
                Implemented a real-time warehouse management feature using
                React.js and Svelte, enabling companies to update warehouse
                status, modify operating timings, and manage order slots
                directly from the dashboard
              </li>
              <li>
                Built RESTful APIs to support complete CRUD operations for
                warehouse and order management features
              </li>
              <li>
                Implemented a logging system to detect and monitor backend
                errors effectively
              </li>
              <li>
                Collaborated across frontend and backend teams to ensure smooth
                data flow and high system performance
              </li>
            </ul>
          </div>

          <div className="experience-card">
            <h3>Software Development Intern</h3>
            <div className="company">Oasis Infobyte</div>
            <div className="date">Nov 2023 - Dec 2023 | Remote</div>
            <ul>
              <li>
                Developed cross-platform mobile applications using Flutter,
                ensuring compatibility across both Android and iOS by leveraging
                a single codebase architecture
              </li>
              <li>
                Gained hands-on experience in building responsive and visually
                appealing UI components using Flutter widgets and CustomPainter,
                which improved user engagement
              </li>
              <li>
                Optimized application performance by implementing efficient
                state management techniques like Provider and Riverpod, reducing
                app rebuild times and improving overall performance
              </li>
            </ul>
          </div>
        </div>
      </section>

      <section id="projects">
        <h2 className="section-title">Personal Projects</h2>
        <div className="project-grid">
          <div className="project-card">
            <h3>Kisaanhelp</h3>
            <div className="tech">Node.js | Express.js | MongoDB</div>
            <ul>
              <li>
                Built a RESTful API to serve crop-specific information including
                benefits, diseases, and environmental requirements using only
                the crop name as input
              </li>
              <li>
                Implemented crop-specific search functionality that enabled the
                identification of human and animal diseases and their associated
                benefits
              </li>
              <li>
                Devised real-time update capabilities in the API to keep crop
                information current and provide users with instant feedback
              </li>
              <li>
                Achieved improvement in API response time by optimizing database
                queries and API endpoint handling
              </li>
            </ul>
          </div>

          <div className="project-card">
            <h3>Hospital Management System</h3>
            <div className="tech">
              Node.js | Express.js | MongoDB | React.js | JWT
            </div>
            <ul>
              <li>
                Developed a full-stack hospital management system with secure
                JWT authentication
              </li>
              <li>
                Streamlined core workflows like patient records, appointment
                booking, and billing automation
              </li>
              <li>
                Implemented role-based access control for data protection and
                optimized API endpoints
              </li>
              <li>
                Built a real-time doctor appointment module with booking,
                rescheduling, and cancellation capabilities
              </li>
              <li>
                Achieved a reduction in admin tasks and faster appointment
                scheduling through process automation
              </li>
            </ul>
          </div>
        </div>
      </section>

      <section id="skills">
        <h2 className="section-title">Technical Skills</h2>
        <div className="skills-container">
          <div className="skill-category">
            <h3>Languages</h3>
            <div className="skill-tags">
              <span className="skill-tag">C</span>
              <span className="skill-tag">C++</span>
              <span className="skill-tag">JavaScript</span>
              <span className="skill-tag">Python</span>
              <span className="skill-tag">Dart</span>
              <span className="skill-tag">HTML</span>
              <span className="skill-tag">CSS</span>
            </div>
          </div>

          <div className="skill-category">
            <h3>Frontend</h3>
            <div className="skill-tags">
              <span className="skill-tag">React.js</span>
              <span className="skill-tag">Svelte</span>
              <span className="skill-tag">Flutter</span>
            </div>
          </div>

          <div className="skill-category">
            <h3>Backend</h3>
            <div className="skill-tags">
              <span className="skill-tag">Node.js</span>
              <span className="skill-tag">Express.js</span>
              <span className="skill-tag">RESTful APIs</span>
              <span className="skill-tag">Postman</span>
            </div>
          </div>

          <div className="skill-category">
            <h3>Databases & Cloud</h3>
            <div className="skill-tags">
              <span className="skill-tag">MongoDB</span>
              <span className="skill-tag">Firebase</span>
              <span className="skill-tag">MySQL</span>
              <span className="skill-tag">AWS</span>
              <span className="skill-tag">Docker</span>
              <span className="skill-tag">Kafka</span>
            </div>
          </div>

          <div className="skill-category">
            <h3>Developer Tools</h3>
            <div className="skill-tags">
              <span className="skill-tag">Git</span>
              <span className="skill-tag">GitHub</span>
              <span className="skill-tag">VS Code</span>
              <span className="skill-tag">CI/CD</span>
            </div>
          </div>

          <div className="skill-category">
            <h3>Coursework</h3>
            <div className="skill-tags">
              <span className="skill-tag">DSA</span>
              <span className="skill-tag">Operating Systems</span>
              <span className="skill-tag">DBMS</span>
              <span className="skill-tag">Computer Networks</span>
              <span className="skill-tag">Systems Design</span>
            </div>
          </div>
        </div>
      </section>

      <section id="achievements">
        <h2 className="section-title">Achievements</h2>
        <div className="achievements-list">
          <div className="achievement-item">
            <strong>600+ DSA Problems Solved</strong> across LeetCode and
            GeeksforGeeks
          </div>
          <div className="achievement-item">
            <strong>LeetCode Maximum Rating: 1575</strong> | CodeChef Maximum
            Rating: 1500
          </div>
          <div className="achievement-item">
            <strong>Runner-Up, House of Hackers Hackathon</strong> — IIIT Ranchi
            (April 2023)
          </div>
          <div className="achievement-item">
            <strong>Global Rank 162 in CodeChef Division 3</strong> among 30K+
            participants
          </div>
        </div>
      </section>

      <section id="contact">
        <h2 className="section-title">Get In Touch</h2>
        <div className="contact-info">
          <div className="contact-item">
            <strong>Email:</strong>
            <br />
            <a href="mailto:atul753590@gmail.com">atul753590@gmail.com</a>
          </div>
          <div className="contact-item">
            <strong>Phone:</strong>
            <br />
            <a href="tel:+917535909782">+91-7535909782</a>
          </div>
          <div className="contact-item">
            <strong>Location:</strong>
            <br />
            IIIT Ranchi, India
          </div>
        </div>
      </section>
    </>
  );
}

export default App;
