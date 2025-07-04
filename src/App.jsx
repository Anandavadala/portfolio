import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa';
import 'bootstrap/dist/css/bootstrap.min.css';

export default function App() {
  return (
    <div className="container-fluid bg-dark text-white min-vh-100 py-5">
      <header className="text-center mb-5">
        <h1 className="display-4 text-info">Vadala Ananda Teertha</h1>
        <p className="lead">Full-Stack Developer | AI Enthusiast</p>

        <div className="d-flex justify-content-center gap-4 fs-4 my-3">
          <a href="mailto:anandavadala@gmail.com" className="text-white"><FaEnvelope /></a>
          <a href="https://github.com/Anandavadala" target="_blank" rel="noopener noreferrer" className="text-white"><FaGithub /></a>
          <a href="https://linkedin.com/in/anand-vadala-4773a0325" target="_blank" rel="noopener noreferrer" className="text-white"><FaLinkedin /></a>
        </div>

        <a
          href="/resume.pdf"
          download
          className="btn btn-info mt-3"
        >
          Download Resume
        </a>
      </header>

      <section className="mb-5">
        <h2 className="text-info mb-3">About Me</h2>
        <p>
          I'm an aspiring Computer Science Engineer with strong foundations in programming, full-stack development, and AI. Currently pursuing BTech in CSE (2022–26) with an 8.71 CGPA. Passionate about solving real-world problems through innovative tech.
        </p>
      </section>

      <section>
        <h2 className="text-info mb-3">🌟 Highlighted Project: BKeeper App</h2>
        <div className="bg-secondary p-4 rounded shadow">
          <h3 className="text-white">Note Keeper App</h3>
          <p className="text-light">
            A React-based note-taking application with dynamic UI, built using Material UI and localStorage integration. Users can create, update, and delete notes with ease.
          </p>
          <small className="text-muted">Technologies: React, JavaScript, Material UI, LocalStorage</small>
        </div>
      </section>

      <footer className="text-center text-muted mt-5">
        &copy; {new Date().getFullYear()} Vadala Ananda Teertha. All rights reserved.
      </footer>
    </div>
  );
}
