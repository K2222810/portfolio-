import { useEffect, useState } from 'react';
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

const softwareProjects = [
  {
    name: 'Trace Job App',
    summary: 'Full-stack job tracking application, with frontend and backend using React Native.',
    readme: 'https://github.com/K2222810/trace-front-end',
    live: 'https://trace-job-app.netlify.app/'
  },
  {
    name: 'Tracking Game App (Django)',
    summary: 'Django-based tracking games progress project, focused on CRUD features and practical deployment.',
    readme: 'https://github.com/K2222810/Tracking-Games-Django',
    live: 'https://tracking-game-app-56704e1f5fc3.herokuapp.com/'
  },
  {
    name: 'Pizza App',
    summary: 'A GA project pizza app showcasing full-stack fundamentals and deployment pipeline .',
    readme: 'https://github.com/K2222810/MEN-Stack-CRUD-App',
    live: 'https://general-assembly-app-5d60d220519e.herokuapp.com/'
  },
  {
    name: 'Portfolio ',
    summary: 'My portfolio was build using reactive native,here is the link for my video .',
    readme: 'https://github.com/K2222810/portfolio-',
    video: 'https://mygameportfolio.tilda.ws/'
  }
];

const gameProjects = [
  {
    name: 'FireRate',
    summary: 'A sci-fi Unreal Engine prototype (FPS/third-person style) where the player tries to escape a lab. I did project from learning process from a online course to improve my unreal skills and im still thiking in improving it.',
    repo: 'https://github.com/K2222810/RateFire_FinalProject',
    video: 'https://www.youtube.com/watch?v=msiWj2yJwKQ'
  },
  {
    name: 'Shade',
    summary: 'A mobile Unity puzzle-platformer set in a bleak, colorless world. I built the coin, collision, save and load systems, handled map level design, created the menu, and supported the team with coding tasks.',
    video: 'https://www.youtube.com/watch?v=3HiHeiucQqQ'
  },
  {
    name: 'BombRush',
    summary: 'A multiplayer Unity project where two teams compete to score a ball. My role focused on applying the character work and contributing to the team project overall.',
    video: 'https://www.youtube.com/watch?v=jHBRqZchTLw'
  },
  {
    name: 'F&F',
    summary: 'My first solo Unity project from second year, built from scratch as a simple FPS game with three levels.',
    video: 'https://www.youtube.com/watch?v=_ik90bJEYoc'
  },{
    name: 'FPS unity game',
    summary: 'An FPS Unity project used to practice core shooting mechanics, systems, and gameplay fundamentals.',
    video: 'https://www.youtube.com/watch?v=gQCLTDqEEGA'
  },
  {
    name: 'Bounce Game',
    summary: 'A group puzzle game developed for PS5 using a dev kit to explore controller features. I implemented platform movement based on the controller’s horizontal angle and helped build the cannon, ball physics, and other features.',
    video: 'https://www.youtube.com/watch?v=bN5uhvKYoZc'
  },
  {
    name: 'Maze game',
    summary: 'My first group Unity project and a valuable portfolio piece. I handled the game’s level design, movement, and mapping, and I continue to improve it with new scripts, levels, and assets.',
    video: 'https://www.youtube.com/watch?v=kTHqkReTDfo&t=99s'
  },
  {
    name: 'Basic IA plataform game',
    summary: 'A Unity project template from Kingston University where I learned key systems such as pickups, animations, sound, pathways, scoring, AI diagrams, and triggers.',
    video: 'https://www.youtube.com/watch?v=MqwymnQOOs0&t=8s'
  },
  {
    name: 'Node experimentation',
    summary: 'An experimental project used to test ideas, systems, and gameplay mechanics during development.',
    video: 'https://www.youtube.com/watch?v=cdA5H5ISzqA'
  },
  {
    name: 'Dark Mines of london',
    summary: 'A C++ project where I handled the full gameplay flow, including design, animation, visuals, and code.',
    video: 'https://www.youtube.com/watch?v=IoFtzFKCHtE&t=28s'
  }
];

const createProjectSlides = (projects, slideSize = 2) =>
  projects.reduce((slides, project, index) => {
  const slideIndex = Math.floor(index / slideSize);

  if (!slides[slideIndex]) {
    slides[slideIndex] = [];
  }

  slides[slideIndex].push(project);
  return slides;
}, []);

const getYouTubeVideoId = (url) => {
  const match = url.match(/(?:youtube\.com\/watch\?v=|youtu\.be\/)([^&?/]+)/);
  return match ? match[1] : null;
};

const getYouTubeEmbedUrl = (url) => {
  const videoId = getYouTubeVideoId(url);
  return videoId ? `https://www.youtube.com/embed/${videoId}` : null;
};

const softwareProjectSlides = createProjectSlides(softwareProjects, 2);
const gameProjectSlides = createProjectSlides(gameProjects, 2);

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
  const [activeSoftwareSlide, setActiveSoftwareSlide] = useState(0);
  const [activeGameSlide, setActiveGameSlide] = useState(0);
  const [isSoftwareOpen, setIsSoftwareOpen] = useState(true);
  const [isGameOpen, setIsGameOpen] = useState(true);

  useEffect(() => {
    const animatedElements = document.querySelectorAll('.reveal-on-scroll');

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          entry.target.classList.toggle('is-visible', entry.isIntersecting);
        });
      },
      {
        threshold: 0.2,
        rootMargin: '0px 0px -8% 0px'
      }
    );

    animatedElements.forEach((element) => observer.observe(element));

    return () => observer.disconnect();
  }, []);

  const showPreviousSoftwareSlide = () => {
    setActiveSoftwareSlide((currentSlide) =>
      currentSlide === 0 ? softwareProjectSlides.length - 1 : currentSlide - 1
    );
  };

  const showNextSoftwareSlide = () => {
    setActiveSoftwareSlide((currentSlide) => (currentSlide + 1) % softwareProjectSlides.length);
  };

  const showPreviousGameSlide = () => {
    setActiveGameSlide((currentSlide) =>
      currentSlide === 0 ? gameProjectSlides.length - 1 : currentSlide - 1
    );
  };

  const showNextGameSlide = () => {
    setActiveGameSlide((currentSlide) => (currentSlide + 1) % gameProjectSlides.length);
  };

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
        <header className="hero card-surface reveal-on-scroll" id="about">
          <div className="hero-copy">
            <p className="eyebrow">Alejandro Bayne</p>
            <h1>Software & Games Programmer</h1>
            <p className="lead">
              London-based programmer with a focus on game development and software engineering. I build practical projects, work well in teams, and continuously improve through real-world development and structured learning.
            </p>

            <div className="hero-actions">
              <a className="primary-action" href="#software-projects">
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
            <article key={name} className="card-surface section-card reveal-on-scroll">
              <h2>{name}</h2>
              <p>{summary}</p>
            </article>
          ))}
        </section>

        <section className="skills-panel card-surface reveal-on-scroll" id="skills">
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

        <section className="projects-panel card-surface reveal-on-scroll" id="projects">
          <div>
            <p className="eyebrow">Projects</p>
            <h2>Project categories</h2>
            <p>
              My portfolio is split into two independent sections below.
            </p>
          </div>
        </section>

        <section className="projects-panel card-surface reveal-on-scroll" id="software-projects">
          <div>
            <div className="project-category-header">
              <h3 className="project-category-title">Software Engineering</h3>
              <button
                type="button"
                className="secondary-action project-collapse-button"
                onClick={() => setIsSoftwareOpen((current) => !current)}
                aria-expanded={isSoftwareOpen}
                aria-controls="software-projects-content"
              >
                {isSoftwareOpen ? 'Compress' : 'Open'}
              </button>
            </div>
            <div
              id="software-projects-content"
              className={`project-content-wrap ${isSoftwareOpen ? 'is-open' : 'is-closed'}`}
              aria-hidden={!isSoftwareOpen}
            >
              <div className="project-content-inner">
                <div className="project-carousel" aria-live="polite">
                  <div
                    className="project-track"
                    style={{ transform: `translateX(-${activeSoftwareSlide * 100}%)` }}
                  >
                    {softwareProjectSlides.map((slide, index) => (
                      <div className="project-slide" key={`software-slide-${index}`}>
                        <div className="project-cards">
                          {slide.map((project) => (
                            <article key={project.name} className="project-card reveal-on-scroll">
                              <h3>{project.name}</h3>
                              <p>{project.summary}</p>
                              <div className="project-links">
                                {project.live && (
                                  <a className="primary-action" href={project.live} target="_blank" rel="noreferrer">
                                    Live app <ArrowUpRight size={18} />
                                  </a>
                                )}
                                {project.video && (
                                  <a className="primary-action" href={project.video} target="_blank" rel="noreferrer">
                                    Watch video <ArrowUpRight size={18} />
                                  </a>
                                )}
                              </div>
                            </article>
                          ))}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
                <div className="project-controls">
                  <button
                    type="button"
                    className="secondary-action project-nav-button"
                    onClick={showPreviousSoftwareSlide}
                    aria-label="Show previous software projects"
                  >
                    &lt;
                  </button>
                  <button
                    type="button"
                    className="secondary-action project-nav-button"
                    onClick={showNextSoftwareSlide}
                    aria-label="Show next software projects"
                  >
                    &gt;
                  </button>
                  <span className="project-indicator">
                    {activeSoftwareSlide + 1} / {softwareProjectSlides.length}
                  </span>
                </div>
                
              </div>
            </div>
          </div>
        </section>

        <section className="projects-panel card-surface reveal-on-scroll" id="game-projects">
          <div>
            <div className="project-category-header">
              <h3 className="project-category-title">Game Projects</h3>
              <button
                type="button"
                className="secondary-action project-collapse-button"
                onClick={() => setIsGameOpen((current) => !current)}
                aria-expanded={isGameOpen}
                aria-controls="game-projects-content"
              >
                {isGameOpen ? 'Compress' : 'Open'}
              </button>
            </div>
            <div
              id="game-projects-content"
              className={`project-content-wrap ${isGameOpen ? 'is-open' : 'is-closed'}`}
              aria-hidden={!isGameOpen}
            >
              <div className="project-content-inner">
                <div className="project-carousel" aria-live="polite">
                  <div className="project-track" style={{ transform: `translateX(-${activeGameSlide * 100}%)` }}>
                    {gameProjectSlides.map((slide, index) => (
                      <div className="project-slide" key={`game-slide-${index}`}>
                        <div className="project-cards">
                          {slide.map((project) => {
                            const embedUrl = getYouTubeEmbedUrl(project.video);

                            return (
                              <article key={project.name} className="project-card reveal-on-scroll">
                                <h3>{project.name}</h3>
                                {embedUrl && (
                                  <div className="project-video-embed">
                                    <iframe
                                      src={embedUrl}
                                      title={`${project.name} video`}
                                      loading="lazy"
                                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                                      referrerPolicy="strict-origin-when-cross-origin"
                                      allowFullScreen
                                    />
                                  </div>
                                )}
                                <p>{project.summary}</p>
                              </article>
                            );
                          })}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
                <div className="project-controls">
                  <button
                    type="button"
                    className="secondary-action project-nav-button"
                    onClick={showPreviousGameSlide}
                    aria-label="Show previous game projects"
                  >
                    &lt;
                  </button>
                  <button
                    type="button"
                    className="secondary-action project-nav-button"
                    onClick={showNextGameSlide}
                    aria-label="Show next game projects"
                  >
                    &gt;
                  </button>
                  <span className="project-indicator">
                    {activeGameSlide + 1} / {gameProjectSlides.length}
                  </span>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="card-surface info-card outside-work-card reveal-on-scroll" id="outside-work">
          <h2>My life outside programming</h2>
          <p>
            Outside of programming, I enjoy playing video games, staying active at the gym, and spending time with friends on the weekends. Whether it’s going out for drinks, relaxing together, or playing games competitively and casually, I enjoy speding my time alone mostly but i value social skills to communicate and work well with others.
          </p>
        </section>

        <section className="contact-panel card-surface reveal-on-scroll" id="contact">
          <div>
            <p className="eyebrow">Contact</p>
            <h2>Contact me if you are interested in my work and progress.</h2>
            <p>
              Phone: +44 7412 750723<br />
              Email: Alexbaynespineda12@gmail.com<br />
              GitHub: <a href="https://github.com/K2222810" target="_blank" rel="noreferrer">https://github.com/K2222810</a><br />
              LinkedIn: <a href="https://www.linkedin.com/in/alejandro-bayne-10b890372/" target="_blank" rel="noreferrer">https://www.linkedin.com/in/alejandro-bayne-10b890372/</a>
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
