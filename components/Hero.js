import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope, faArrowDown } from '@fortawesome/free-solid-svg-icons';

const Hero = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  });

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

  const socialVariants = {
    hidden: { scale: 0, opacity: 0 },
    visible: i => ({
      scale: 1,
      opacity: 1,
      transition: {
        delay: 1 + (i * 0.2),
        duration: 0.5,
        type: "spring",
        stiffness: 200
      }
    })
  };

  const scrollDownVariants = {
    hidden: { opacity: 0, y: -20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        delay: 1.8,
        duration: 0.5,
        ease: "easeOut",
        repeat: Infinity,
        repeatType: "reverse",
        repeatDelay: 0.5
      }
    }
  };

  const socialLinks = [
    { icon: faEnvelope, href: "mailto:anandavadala@gmail.com", label: "Email" },
    { icon: faGithub, href: "https://github.com/Anandavadala", label: "GitHub" },
    { icon: faLinkedin, href: "https://linkedin.com/in/anand-vadala-4773a0325", label: "LinkedIn" }
  ];
  
  // Personal details from LaTeX resume
  const personalDetails = {
    name: "Vadala Ananda Teertha",
    rollNo: "22881A0559",
    phone: "+91-6303833767",
    email: "anandavadala@gmail.com",
    title: "Computer Science and Engineering Student",
    tagline: "Aspiring Computer Science Engineer with strong foundation in programming and web development"
  };

  return (
    <section id="home" className="min-vh-100 d-flex align-items-center position-relative" ref={ref}>
      <div className="container">
        <motion.div
          className="row align-items-center"
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
        >
          <div className="col-lg-8 mx-auto text-center">
            <motion.div 
              className="profile-image-container mb-4"
              variants={itemVariants}
            >
              <img 
                src="/images/profile.svg" 
                alt="Profile" 
                className="profile-image rounded-circle mx-auto d-block" 
                style={{ width: "150px", height: "150px", border: "5px solid var(--primary-color)" }} 
              />
            </motion.div>
            <motion.span 
              className="badge bg-primary-custom mb-3 px-3 py-2"
              variants={itemVariants}
            >
              Welcome to my portfolio
            </motion.span>
            
            <motion.h1 
              className="display-3 fw-bold mb-4 text-gradient"
              variants={itemVariants}
            >
              {personalDetails.name}
            </motion.h1>
            
            <motion.div 
              className="mb-4"
              variants={itemVariants}
            >
              <h2 className="fs-3 text-white mb-3">{personalDetails.title}</h2>
              <p className="lead text-secondary mb-4">
                {personalDetails.tagline}
              </p>
              <p className="text-secondary">
                <span className="me-3"><strong>Roll No:</strong> {personalDetails.rollNo}</span>
                <span><strong>Phone:</strong> {personalDetails.phone}</span>
              </p>
            </motion.div>
            
            <motion.div 
              className="d-flex justify-content-center gap-3 mb-5"
              variants={itemVariants}
            >
              <motion.a 
                href="#projects" 
                className="btn btn-primary-custom btn-lg hover-lift"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                View My Work
              </motion.a>
              
              <motion.a 
                href="/resume.pdf" 
                download 
                className="btn btn-outline-custom btn-lg hover-lift"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Download Resume
              </motion.a>
                {/* Removed Download Other Resume button as requested */}
            </motion.div>
            
            <motion.div 
              className="d-flex justify-content-center gap-4"
              variants={itemVariants}
            >
              {socialLinks.map((link, i) => (
                <motion.a
                  key={link.label}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="social-icon"
                  aria-label={link.label}
                  custom={i}
                  variants={socialVariants}
                  whileHover={{ 
                    y: -5, 
                    backgroundColor: "var(--primary-color)",
                    color: "var(--dark-bg)",
                    transition: { duration: 0.3 }
                  }}
                  whileTap={{ scale: 0.9 }}
                >
                  <FontAwesomeIcon icon={link.icon} size="lg" />
                </motion.a>
              ))}
            </motion.div>
          </div>
        </motion.div>
      </div>
      
      <motion.div 
        className="position-absolute bottom-0 start-50 translate-middle-x mb-4 text-center"
        variants={scrollDownVariants}
        initial="hidden"
        animate="visible"
      >
        <p className="mb-2 small text-secondary">Scroll Down</p>
        <FontAwesomeIcon icon={faArrowDown} className="text-primary" />
      </motion.div>
    </section>
  );
};

export default Hero;