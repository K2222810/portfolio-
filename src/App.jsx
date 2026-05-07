import { ArrowUpRight } from 'lucide-react';

import NavBar from './components/NavBar/NavBar.jsx';
import Grainient from './components/Grainient/Grainient';
import './App.css';

const educationCertificates = [
  {
    name: 'Education & Certificates',
    summary: 'Kingston University - Computer Games Programming BSc (Hons), focused on game systems, gameplay programming, and technical development foundations. Plus General Assembly Certificate of Completion - Software Engineering Bootcamp Online (420 hours, completed on 06/03/2026).',
    link: '/Certificate-of-Completion-alexbaynespineda12@gmail.com-1773866221.pdf'
  },
  {
    name: 'Career Growth',
    summary: 'I started in game development and expanded into software engineering to create more opportunities. I enjoy both paths and continue building skills across games and software projects.'
  }
];

const portfolioProjects = [
  {
    name: 'Trace Job App',
    summary: 'Full-stack job tracking application with modern front-end and deployment workflow.',
    readme: 'https://github.com/K2222810/trace-front-end',
    live: 'https://trace-job-app.netlify.app/'
  },
  {
    name: 'Tracking Game App (Django)',
    summary: 'Django-based tracking project focused on CRUD features and practical deployment.',
    readme: 'https://github.com/K2222810/Tracking-Games-Django',
    live: 'https://tracking-game-app-56704e1f5fc3.herokuapp.com/'
  },
  {
    name: 'General Assembly App',
    summary: 'GA project app showcasing full-stack fundamentals and deployment pipeline.',
    readme: 'https://github.com/K2222810/MEN-Stack-CRUD-App',
    live: 'https://general-assembly-app-5d60d220519e.herokuapp.com/'
  },
  {
    name: 'Portfolio Videos',
    summary: 'Project video showcase with gameplay and build examples across multiple projects.',
    readme: 'https://github.com/K2222810/portfolio-',
    live: 'https://mygameportfolio.tilda.ws/'
  }
];

const skillIcons = [
  { name: 'C++', src: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/cplusplus/cplusplus-original.svg' },
  { name: 'C#', src: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/csharp/csharp-original.svg' },
  { name: 'JavaScript', src: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg' },
  { name: 'React', src: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg' },
  { name: 'React Native', src: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg' },
  { name: 'Python', src: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg' },
  { name: 'HTML', src: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg' },
  { name: 'CSS', src: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg' },
  { name: 'Django', src: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/django/django-plain.svg' },
  { name: 'Unity', src: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/unity/unity-original.svg' },
  { name: 'Unreal Engine', src: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/unrealengine/unrealengine-original.svg' },
  { name: 'Visual Studio', src: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/visualstudio/visualstudio-plain.svg' }
];

function App() {
  return (
    <>
      <div className="page-background" aria-hidden="true">
        <Grainient
          color1="#2a83b5"
          color2="#6ddaf1"
          color3="#bbfaff"
          timeSpeed={0.5}
          warpStrength={0.7}
          warpFrequency={3.5}
          warpSpeed={5}
          warpAmplitude={42}
          grainAmount={0.14}
          contrast={1.35}
          saturation={1.12}
          zoom={0.95}
        />
      </div>

      <NavBar />

      <main className="portfolio-shell">
        <header className="hero card-surface" id="about">
          <div className="hero-copy">
            <p className="eyebrow">Alejandro Bayne</p>
            <h1>Software & Games Programmer</h1>
            <p className="lead">
              London-based programmer with a focus on game development and software engineering. I build practical projects, work well in teams, and continuously improve through real-world development and structured learning.
            </p>

            <div className="hero-actions">
              <a className="primary-action" href="#projects">
                View projects <ArrowUpRight size={18} />
              </a>
              <a className="secondary-action" href="#contact">
                Contact me
              </a>
            </div>

            <div className="hero-meta">
              <span>Unity</span>
              <span>Unreal Engine</span>
              <span>React Native</span>
              <span>Mobile & Web Apps</span>
              <span>Gameplay Systems</span>
            </div>
          </div>

          <div className="hero-visual">
            <div className="visual-frame">
              <div className="visual-glow" />
              <div className="visual-card">
                <div className="visual-card-top">
                  <span className="status-dot" />
                  <span>Profile snapshot</span>
                </div>
                <div className="visual-grid">
                  <div>
                    <strong>Location</strong>
                    <p>London, United Kingdom</p>
                  </div>
                  <div>
                    <strong>Education</strong>
                    <p>Kingston University, 2022-2025</p>
                  </div>
                  <div>
                    <strong>Language</strong>
                    <p>English (fluent), Spanish (native)</p>
                  </div>
                  <div>
                    <strong>Focus</strong>
                    <p>Gameplay systems and programming</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </header>

        <section className="sections-grid" id="education">
          {educationCertificates.map(({ name, summary, link }) => (
            <article key={name} className="card-surface section-card">
              <h2>{name}</h2>
              <p>{summary}</p>
              {link && (
                <a className="secondary-action" href={link} target="_blank" rel="noreferrer">
                  View certificate
                </a>
              )}
            </article>
          ))}
        </section>

        <section className="skills-panel card-surface" id="skills">
          <div>
            <p className="eyebrow">Skills</p>
            <h2>Technical profile and current growth areas.</h2>
            <p>
              I combine gameplay programming with team collaboration, level design, debugging, adaptation, and practical project delivery across university and external coursework.
            </p>
          </div>
          <div className="skill-tags" aria-label="Skills list">
            {skillIcons.map(({ name, src }) => (
              <article key={name} className="skill-card">
                <img src={src} alt={`${name} logo`} loading="lazy" />
                <span>{name}</span>
              </article>
            ))}
          </div>
        </section>

        <section className="projects-panel card-surface" id="projects">
          <div>
            <p className="eyebrow">Projects</p>
            <h2>GA projects and other builds</h2>
            <p>
              A selection of deployed projects with direct links to github code and each live app.
            </p>
            <div className="project-cards">
              {portfolioProjects.map((project) => (
                <article key={project.name} className="project-card">
                  <h3>{project.name}</h3>
                  <p>{project.summary}</p>
                  <div className="project-links">
                    <a className="secondary-action" href={project.readme} target="_blank" rel="noreferrer">
                      github code
                    </a>
                    <a className="primary-action" href={project.live} target="_blank" rel="noreferrer">
                      Live app <ArrowUpRight size={18} />
                    </a>
                  </div>
                </article>
              ))}
            </div>
            <a className="secondary-action" href="https://github.com/K2222810" target="_blank" rel="noreferrer">
              View all repositories on GitHub
            </a>
            <a className="secondary-action" href="https://github.com/K2222810/portfolio-" target="_blank" rel="noreferrer">
              Portfolio code on GitHub
            </a>
          </div>
        </section>

        <section className="card-surface info-card outside-work-card" id="outside-work">
          <h2>My life outside programming</h2>
          <p>
            Outside of programming, I enjoy playing video games, staying active at the gym, and spending time with friends on the weekends. Whether it’s going out for drinks, relaxing together, or playing games competitively and casually, I enjoy speding my time alone mostly but i value social skills to communicate and work well with others.
          </p>
        </section>

        <section className="contact-panel card-surface" id="contact">
          <div>
            <p className="eyebrow">Contact</p>
            <h2>Contact me if you are interested in my work and progress.</h2>
            <p>
              Phone: +44 7412 750723<br />
              Email: Alexbaynespineda12@gmail.com
            </p>
          </div>
          <a className="primary-action" href="mailto:Alexbaynespineda12@gmail.com">
            Send email <ArrowUpRight size={18} />
          </a>
        </section>
      </main>
    </>
  );
}

export default App;
