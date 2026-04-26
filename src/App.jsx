import { ArrowUpRight, Layers3, Palette, Sparkles } from 'lucide-react';

import NavBar from './components/NavBar/NavBar.jsx';
import Grainient from './components/Grainient/Grainient';
import './App.css';

const highlights = [
  {
    icon: Sparkles,
    title: 'Summary',
    text: 'I am a game programmer third-year student in London. I am developing my programming and game development skills, and I keep improving through additional programming courses while seeking real-world experience.'
  },
  {
    icon: Layers3,
    title: 'Apart from Games',
    text: 'Outside creating games, I am an avid gamer and I explore many genres for ideas and inspiration. I also stay active through the gym and enjoy social activities like board games and team sports.'
  },
  {
    icon: Palette,
    title: 'Key Strengths',
    text: 'Experience working with groups and management, map building and level design practice, problem solving and adaptation, page translation, and work experience from simple jobs each year.'
  }
];

const projects = [
  {
    name: 'Education',
    summary: 'Kingston University - Computer Games Programming BSc (Hons), plus the General Assembly Software Engineering Bootcamp Online.'
  },
  {
    name: 'Experience',
    summary: 'I have built experience across C++ (3 years), C# (2 years), JavaScript (1 year), Python (1 year), and SQL (1 year). My work includes extensive C++ coursework, Unity C# development, JavaScript web foundations, React Expo projects, Python fundamentals, and SQL database coursework, all written as a short paragraph rather than bullet points.'
  },
  {
    name: 'Software and Tools',
    summary: 'Unity, Unreal Engine, Visual Studio 2022/2023, Oracle Apex, Excel, Cisco Packet Tracer, React Native Expo, Android Studio, PS5 Dev Kit, and Windows software environments.'
  },
  {
    name: 'Bilingual and Certificate',
    summary: 'English (9-10 years living in the UK), Spanish (native language). General Assembly Certificate of Completion - Software Engineering Bootcamp Online (420 hours, completion date: 06/03/2026).'
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
            <h1>London game developer</h1>
            <p className="lead">
              Game programmer third-year student. I am focused on developing stronger game programming and software engineering skills through university projects, coursework, and practical development work.
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
              <span>React</span>
              <span>C++</span>
              <span>C#</span>
              <span>JavaScript</span>
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

        <section className="highlights" id="services">
          {highlights.map(({ icon: Icon, title, text }) => (
            <article key={title} className="card-surface info-card">
              <Icon size={22} />
              <h2>{title}</h2>
              <p>{text}</p>
            </article>
          ))}
        </section>

        <section className="sections-grid" id="resume">
          {projects.map(({ name, summary }) => (
            <article key={name} className="card-surface section-card">
              <p className="section-label">Resume</p>
              <h2>{name}</h2>
              <p>{summary}</p>
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
            <p>
              My GitHub and portfolio include different kinds of work such as Java games, JSX pages, Django projects, mobile and desktop apps, Unity games, Unreal Engine projects, and other university builds. Examples include the project videos page, the trace app, the tracking game app, and the General Assembly app.
            </p>
            <div className="project-links">
              <a className="primary-action" href="https://mygameportfolio.tilda.ws/" target="_blank" rel="noreferrer">
                Project videos example <ArrowUpRight size={18} />
              </a>
              <a className="secondary-action" href="https://github.com/K2222810" target="_blank" rel="noreferrer">
                GitHub profile
              </a>
              <a className="secondary-action" href="https://tracking-game-app-56704e1f5fc3.herokuapp.com/" target="_blank" rel="noreferrer">
                Trace app example
              </a>
              <a className="secondary-action" href="https://general-assembly-app-5d60d220519e.herokuapp.com/" target="_blank" rel="noreferrer">
                General Assembly app example
              </a>
              <a className="secondary-action" href="https://trace-job-app.netlify.app/" target="_blank" rel="noreferrer">
                Trace job app example
              </a>
            </div>
          </div>
          <div className="project-strip" aria-hidden="true">
            <span />
            <span />
            <span />
          </div>
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
