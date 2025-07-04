import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCode, faLaptopCode, faBrain, faGraduationCap, faServer, faDatabase, faNetworkWired, faRobot } from '@fortawesome/free-solid-svg-icons';

const About = () => {
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

  const cardVariants = {
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

  const skills = [
    { name: "Full-Stack Development", icon: faCode, description: "Building responsive web applications with modern frameworks and libraries." },
    { name: "AI & Machine Learning", icon: faRobot, description: "Implementing intelligent solutions using machine learning algorithms." },
    { name: "Software Engineering", icon: faLaptopCode, description: "Creating efficient, scalable, and maintainable software solutions." },
    { name: "Computer Science", icon: faNetworkWired, description: "Strong foundations in algorithms, data structures, and problem-solving." }
  ];

  return (
    <section id="about" className="py-5 section" ref={ref}>
      <div className="container">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="row"
        >
          <div className="col-lg-12 text-center mb-5">
            <motion.h2 
              className="section-title text-gradient"
              variants={itemVariants}
            >
              About Me
            </motion.h2>
            <motion.div 
              className="mx-auto" 
              style={{ maxWidth: "70px", height: "4px", background: "var(--primary-color)", borderRadius: "2px" }}
              variants={itemVariants}
            />
          </div>

          <div className="col-lg-6">
            <motion.div 
              className="mb-4"
              variants={itemVariants}
            >
              <h3 className="mb-3 text-white">Who I Am</h3>
              <p className="text-secondary">
                Aspiring Computer Science Engineer with strong foundation in programming, data structures, and web development technologies. 
                Currently pursuing BTech in CSE (2022–26) with an 8.71 CGPA at Vardhaman College of Engineering, Shamshabad.
              </p>
              <p className="text-secondary">
                Passionate about leveraging Artificial Intelligence, Machine Learning, and Full-Stack Development to create innovative solutions. 
                Seeking challenging opportunities to apply advanced technical skills in software engineering, data analytics, 
                and problem-solving to drive technological advancements and contribute to cutting-edge projects.
              </p>
            </motion.div>

            <motion.div variants={itemVariants}>
              <h3 className="mb-3 text-white">My Approach</h3>
              <p className="text-secondary">
                I believe in writing clean, efficient code and creating intuitive user experiences. My approach combines technical 
                expertise with creative problem-solving to deliver solutions that exceed expectations. I'm detail-oriented and 
                committed to continuous improvement in everything I build.
              </p>
            </motion.div>
          </div>

          <div className="col-lg-6">
            <div className="row g-4">
              {skills.map((skill, i) => (
                <div className="col-md-6" key={skill.name}>
                  <motion.div 
                    className="card-custom p-4 h-100 hover-lift"
                    custom={i}
                    variants={cardVariants}
                  >
                    <div className="d-flex align-items-center mb-3">
                      <div className="me-3 p-3 rounded-circle" style={{ background: "rgba(0, 195, 255, 0.1)" }}>
                        <FontAwesomeIcon icon={skill.icon} className="text-primary" size="lg" />
                      </div>
                      <h4 className="mb-0 fs-5 text-white">{skill.name}</h4>
                    </div>
                    <p className="text-secondary mb-0">{skill.description}</p>
                  </motion.div>
                </div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;