import { motion } from 'framer-motion';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope, faArrowUp, faPhone } from '@fortawesome/free-solid-svg-icons';

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5,
        ease: "easeOut"
      }
    }
  };

  const socialLinks = [
    { icon: faEnvelope, href: "mailto:anandavadala@gmail.com", label: "Email" },
    { icon: faPhone, href: "tel:+916303833767", label: "Phone" },
    { icon: faGithub, href: "https://github.com/Anandavadala", label: "GitHub" },
    { icon: faLinkedin, href: "https://linkedin.com/in/anand-vadala-4773a0325", label: "LinkedIn" }
  ];

  return (
    <footer className="py-5 bg-dark">
      <div className="container">
        <motion.div
          className="row g-4 align-items-center"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={containerVariants}
        >
          <div className="col-lg-4 text-center text-lg-start">
            <motion.a 
              href="#home" 
              className="text-gradient fw-bold fs-4 text-decoration-none"
              variants={itemVariants}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Ananda<span className="text-white">Dev</span>
            </motion.a>
            <motion.p 
              className="text-secondary mt-3 mb-0"
              variants={itemVariants}
            >
              Creating innovative solutions through code and creativity.
            </motion.p>
          </div>

          <div className="col-lg-4 text-center">
            <motion.div 
              className="d-flex justify-content-center gap-4"
              variants={itemVariants}
            >
              {socialLinks.map((link) => (
                <motion.a
                  key={link.label}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="social-icon"
                  aria-label={link.label}
                  whileHover={{ 
                    y: -5, 
                    backgroundColor: "var(--primary-color)",
                    color: "var(--dark-bg)",
                    transition: { duration: 0.3 }
                  }}
                  whileTap={{ scale: 0.9 }}
                >
                  <FontAwesomeIcon icon={link.icon} />
                </motion.a>
              ))}
            </motion.div>
          </div>

          <div className="col-lg-4 text-center text-lg-end">
            <motion.div variants={itemVariants}>
              <motion.button
                onClick={scrollToTop}
                className="btn btn-outline-custom btn-sm rounded-circle p-3"
                aria-label="Scroll to top"
                whileHover={{ y: -5 }}
                whileTap={{ y: 0 }}
              >
                <FontAwesomeIcon icon={faArrowUp} />
              </motion.button>
            </motion.div>
            <motion.p 
              className="text-secondary mt-3 mb-0"
              variants={itemVariants}
            >
              &copy; {new Date().getFullYear()} Vadala Ananda Teertha. All rights reserved.
            </motion.p>
          </div>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;