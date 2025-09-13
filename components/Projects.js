import { useState } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import { faExternalLinkAlt } from '@fortawesome/free-solid-svg-icons';

const Projects = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  });

  const [activeProject, setActiveProject] = useState(null);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { y: 50, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.8,
        ease: "easeOut"
      }
    }
  };

  const projectVariants = {
    hidden: { y: 50, opacity: 0 },
    visible: i => ({
      y: 0,
      opacity: 1,
      transition: {
        delay: i * 0.1,
        duration: 0.6,
        ease: "easeOut"
      }
    })
  };

  const projects = [
    {
      id: 1,
      title: "Online Ayurvedic Products Tracking",
      description: "A ecommerce website, developed using JSP with comprehensive product management features. Developed responsive e-commerce platform for Ayurvedic products with comprehensive user and admin interfaces. Implemented secure product catalog, order tracking, and inventory management system using Java Server Pages (JSP).",
      image: "/images/ayurvedic-project.svg",
      technologies: ["HTML5", "CSS3", "MySQL", "Java Server Pages (JSP)", "Web Development"],
      github: "https://github.com/Anandavadala",
      live: "#",
      period: "Oct - Dec 2024"
    },
    {
      id: 2,
      title: "Rainfall Prediction through Machine Learning",
      description: "Advanced predictive model leveraging atmospheric data and machine learning algorithms. Developed machine learning model using advanced predictive algorithms for accurate rainfall forecasting. Implemented data preprocessing, feature engineering, and model optimization techniques.",
      image: "/images/ai-image-generator.svg",
      technologies: ["Python", "Pandas", "NumPy", "Scikit-learn", "Machine Learning", "Data Analytics", "XGBoost"],
      github: "https://github.com/Anandavadala",
      live: "#",
      period: "Oct - Nov 2024"
    },
    {
      id: 3,
      title: "Employee Turnover Tracking System",
      description: "Web application for comprehensive workforce analytics and prediction. Created web-based HR analytics tool to track and predict employee turnover patterns. Developed interactive dashboard for visualizing workforce trends and retention strategies.",
      image: "/images/ecommerce-platform.svg",
      technologies: ["HTML5", "CSS3", "JavaScript", "Web Development", "Data Visualization"],
      github: "https://github.com/Anandavadala",
      live: "#",
      period: "March - May 2023"
    },
    {
      id: 4,
      title: "Note Keeper App",
      description: "A React-based note-taking web application with dynamic UI and LocalStorage integration. Developed a fully functional note-taking web app with React, allowing users to create, edit, and delete notes dynamically. Enhanced UI using Material UI, improving user experience with modern design components.",
      image: "/images/bkeeper-app.svg",
      technologies: ["React.js", "Hooks", "JavaScript", "Material UI"],
      github: "https://github.com/Anandavadala",
      live: "#",
      period: "March 2025"
    }
  ];

  return (
    <section id="projects" className="py-5 section bg-darker" ref={ref}>
      <div className="container">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
        >
          <div className="text-center mb-5">
            <motion.h2 
              className="section-title text-gradient"
              variants={itemVariants}
            >
              My Projects
            </motion.h2>
            <motion.div 
              className="mx-auto" 
              style={{ maxWidth: "70px", height: "4px", background: "var(--primary-color)", borderRadius: "2px" }}
              variants={itemVariants}
            />
            <motion.p 
              className="text-secondary mt-4 mx-auto" 
              style={{ maxWidth: "700px" }}
              variants={itemVariants}
            >
              Here are some of my recent projects that showcase my skills and experience in web development and software engineering.
            </motion.p>
          </div>

          <div className="row g-4">
            {projects.map((project, i) => (
              <div className="col-md-6" key={project.id}>
                <motion.div 
                  className="card-custom overflow-hidden h-100 hover-lift"
                  custom={i}
                  variants={projectVariants}
                  onHoverStart={() => setActiveProject(project.id)}
                  onHoverEnd={() => setActiveProject(null)}
                  whileHover={{ y: -10 }}
                >
                  <div className="position-relative overflow-hidden" style={{ height: "200px" }}>
                    <img 
                      src={project.image} 
                      alt={project.title} 
                      className="w-100 h-100 object-fit-cover"
                      style={{ transition: "transform 0.5s ease" }}
                    />
                    <motion.div 
                      className="position-absolute top-0 start-0 w-100 h-100 d-flex align-items-center justify-content-center"
                      style={{ 
                        background: "rgba(0, 0, 0, 0.7)",
                        opacity: activeProject === project.id ? 1 : 0,
                        transition: "opacity 0.3s ease"
                      }}
                    >
                      <div className="d-flex gap-3">
                          {/* Removed GitHub and Open Project buttons as requested */}
                      </div>
                    </motion.div>
                  </div>
                  <div className="p-4">
                    <div className="d-flex justify-content-between align-items-start mb-2">
                      <h3 className="fs-4 text-white mb-0">{project.title}</h3>
                      {project.period && <span className="badge bg-primary-custom">{project.period}</span>}
                    </div>
                    <p className="text-secondary mb-3">{project.description}</p>
                    <div className="d-flex flex-wrap gap-2">
                      {project.technologies.map(tech => (
                        <span key={tech} className="skill-badge">{tech}</span>
                      ))}
                    </div>
                  </div>
                </motion.div>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;