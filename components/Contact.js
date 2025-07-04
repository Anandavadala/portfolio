import { useState } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faPhone, faMapMarkerAlt, faUser, faMessage, faLocationDot } from '@fortawesome/free-solid-svg-icons';
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  
  const [formStatus, setFormStatus] = useState({
    submitted: false,
    success: false,
    message: ''
  });

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

  const contactInfoVariants = {
    hidden: { x: -50, opacity: 0 },
    visible: i => ({
      x: 0,
      opacity: 1,
      transition: {
        delay: i * 0.1,
        duration: 0.6,
        ease: "easeOut"
      }
    })
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // In a real application, you would send the form data to a server
    // For this demo, we'll just simulate a successful submission
    setFormStatus({
      submitted: true,
      success: true,
      message: 'Thank you for your message! I will get back to you soon.'
    });
    
    // Reset form after submission
    setFormData({
      name: '',
      email: '',
      subject: '',
      message: ''
    });
    
    // Reset status after 5 seconds
    setTimeout(() => {
      setFormStatus({
        submitted: false,
        success: false,
        message: ''
      });
    }, 5000);
  };

  const contactInfo = [
    { icon: faEnvelope, title: "Email", value: "anandavadala@gmail.com", link: "mailto:anandavadala@gmail.com" },
    { icon: faPhone, title: "Phone", value: "+91 6303833767", link: "tel:+916303833767" },
    { icon: faMapMarkerAlt, title: "Location", value: "Hyderabad, India", link: "https://maps.google.com/?q=Hyderabad,India" }
  ];

  return (
    <section id="contact" className="py-5 section bg-darker" ref={ref}>
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
              Get In Touch
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
              Have a project in mind or want to discuss potential opportunities? Feel free to reach out!
            </motion.p>
          </div>

          <div className="row g-4">
            <div className="col-lg-5">
              <motion.div 
                className="card-custom p-4 h-100"
                variants={itemVariants}
              >
                <h3 className="fs-4 text-white mb-4">Contact Information</h3>
                
                <div className="d-flex flex-column gap-4">
                  {contactInfo.map((info, i) => (
                    <motion.a
                      key={info.title}
                      href={info.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-decoration-none"
                      custom={i}
                      variants={contactInfoVariants}
                      whileHover={{ x: 5, transition: { duration: 0.3 } }}
                    >
                      <div className="d-flex align-items-center">
                        <div className="me-3 p-3 rounded-circle" style={{ background: "rgba(0, 195, 255, 0.1)" }}>
                          <FontAwesomeIcon icon={info.icon} className="text-primary" />
                        </div>
                        <div>
                          <h4 className="fs-6 text-white mb-1">{info.title}</h4>
                          <p className="text-secondary mb-0">{info.value}</p>
                        </div>
                      </div>
                    </motion.a>
                  ))}
                </div>
                
                <div className="mt-5">
                  <h4 className="fs-6 text-white mb-3">Follow Me</h4>
                  <div className="d-flex gap-3">
                    <motion.a 
                      href="https://github.com/Anandavadala" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="social-icon"
                      whileHover={{ 
                        y: -5, 
                        backgroundColor: "var(--primary-color)",
                        color: "var(--dark-bg)",
                        transition: { duration: 0.3 }
                      }}
                    >
                      <FontAwesomeIcon icon={faGithub} />
                    </motion.a>
                    <motion.a 
                      href="https://linkedin.com/in/anand-vadala-4773a0325" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="social-icon"
                      whileHover={{ 
                        y: -5, 
                        backgroundColor: "var(--primary-color)",
                        color: "var(--dark-bg)",
                        transition: { duration: 0.3 }
                      }}
                    >
                      <FontAwesomeIcon icon={faLinkedin} />
                    </motion.a>
                  </div>
                </div>
              </motion.div>
            </div>

            <div className="col-lg-7">
              <motion.div 
                className="card-custom p-4 h-100"
                variants={itemVariants}
              >
                <h3 className="fs-4 text-white mb-4">Send Me a Message</h3>
                
                {formStatus.submitted && (
                  <motion.div 
                    className={`alert ${formStatus.success ? 'alert-success' : 'alert-danger'} mb-4`}
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0 }}
                  >
                    {formStatus.message}
                  </motion.div>
                )}
                
                <form onSubmit={handleSubmit}>
                  <div className="row g-3">
                    <div className="col-md-6">
                      <div className="form-floating mb-3">
                        <input
                          type="text"
                          className="form-control bg-light-bg text-white border-0"
                          id="name"
                          name="name"
                          placeholder="Your Name"
                          value={formData.name}
                          onChange={handleChange}
                          required
                          style={{ backgroundColor: "var(--light-bg)" }}
                        />
                        <label htmlFor="name" className="text-secondary">Your Name</label>
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="form-floating mb-3">
                        <input
                          type="email"
                          className="form-control bg-light-bg text-white border-0"
                          id="email"
                          name="email"
                          placeholder="Your Email"
                          value={formData.email}
                          onChange={handleChange}
                          required
                          style={{ backgroundColor: "var(--light-bg)" }}
                        />
                        <label htmlFor="email" className="text-secondary">Your Email</label>
                      </div>
                    </div>
                    <div className="col-12">
                      <div className="form-floating mb-3">
                        <input
                          type="text"
                          className="form-control bg-light-bg text-white border-0"
                          id="subject"
                          name="subject"
                          placeholder="Subject"
                          value={formData.subject}
                          onChange={handleChange}
                          required
                          style={{ backgroundColor: "var(--light-bg)" }}
                        />
                        <label htmlFor="subject" className="text-secondary">Subject</label>
                      </div>
                    </div>
                    <div className="col-12">
                      <div className="form-floating mb-3">
                        <textarea
                          className="form-control bg-light-bg text-white border-0"
                          id="message"
                          name="message"
                          placeholder="Your Message"
                          value={formData.message}
                          onChange={handleChange}
                          required
                          style={{ height: "150px", backgroundColor: "var(--light-bg)" }}
                        ></textarea>
                        <label htmlFor="message" className="text-secondary">Your Message</label>
                      </div>
                    </div>
                    <div className="col-12">
                      <motion.button
                        type="submit"
                        className="btn btn-primary-custom btn-lg w-100 hover-lift"
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                      >
                        Send Message
                      </motion.button>
                    </div>
                  </div>
                </form>
              </motion.div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;