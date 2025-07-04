import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faTimes } from '@fortawesome/free-solid-svg-icons';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navVariants = {
    hidden: { opacity: 0, y: -20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { 
        duration: 0.5, 
        ease: "easeInOut" 
      } 
    }
  };

  const menuVariants = {
    closed: { 
      opacity: 0,
      x: '100%',
      transition: {
        duration: 0.5,
        ease: "easeInOut"
      }
    },
    open: { 
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.5,
        ease: "easeInOut"
      }
    }
  };

  const linkVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: i => ({
      opacity: 1,
      x: 0,
      transition: {
        delay: i * 0.1,
        duration: 0.5,
        ease: "easeOut"
      }
    })
  };

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Projects', href: '#projects' },
    { name: 'Skills', href: '#skills' },
    { name: 'Contact', href: '#contact' }
  ];

  return (
    <motion.nav 
      className={`fixed-top py-3 ${scrolled ? 'bg-dark shadow' : 'bg-transparent'}`}
      style={{ transition: 'all 0.3s ease' }}
      initial="hidden"
      animate="visible"
      variants={navVariants}
    >
      <div className="container d-flex justify-content-between align-items-center">
        <motion.a 
          href="#home" 
          className="text-gradient fw-bold fs-4 text-decoration-none"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          Ananda<span className="text-white">Dev</span>
        </motion.a>

        {/* Desktop Navigation */}
        <div className="d-none d-md-flex">
          {navLinks.map((link, i) => (
            <motion.a
              key={link.name}
              href={link.href}
              className="mx-3 text-white text-decoration-none hover-bright"
              custom={i}
              variants={linkVariants}
              whileHover={{ y: -3 }}
              whileTap={{ y: 0 }}
            >
              {link.name}
            </motion.a>
          ))}
        </div>

        {/* Mobile Navigation Toggle */}
        <motion.button
          className="btn text-white d-md-none border-0"
          onClick={() => setIsOpen(!isOpen)}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
        >
          <FontAwesomeIcon icon={isOpen ? faTimes : faBars} size="lg" />
        </motion.button>

        {/* Mobile Navigation Menu */}
        <motion.div 
          className="position-fixed top-0 end-0 h-100 bg-dark p-5 d-md-none"
          style={{ 
            width: '250px', 
            zIndex: 1000,
            boxShadow: '-5px 0 15px rgba(0,0,0,0.3)'
          }}
          initial="closed"
          animate={isOpen ? "open" : "closed"}
          variants={menuVariants}
        >
          <div className="d-flex flex-column align-items-center mt-5 pt-5">
            {navLinks.map((link, i) => (
              <motion.a
                key={link.name}
                href={link.href}
                className="my-3 text-white text-decoration-none fs-5"
                onClick={() => setIsOpen(false)}
                custom={i}
                variants={linkVariants}
                whileHover={{ x: 5, color: 'var(--primary-color)' }}
              >
                {link.name}
              </motion.a>
            ))}
          </div>
        </motion.div>
      </div>
    </motion.nav>
  );
};

export default Navbar;