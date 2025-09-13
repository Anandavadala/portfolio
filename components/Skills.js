import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const Skills = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };
  
  // Animation variants for certificates and internships
  const cardHoverVariants = {
    rest: { scale: 1, boxShadow: "0px 4px 20px rgba(0, 0, 0, 0.1)" },
    hover: { 
      scale: 1.03, 
      boxShadow: "0px 10px 25px rgba(0, 195, 255, 0.2)",
      transition: { duration: 0.3, ease: "easeOut" }
    }
  };
  
  const certCardVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: i => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: i * 0.1,
        duration: 0.5,
        ease: "easeOut"
      }
    })
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  };

  const progressVariants = {
    hidden: { width: 0 },
    visible: width => ({
      width: `${width}%`,
      transition: {
        duration: 1.2,
        ease: "easeInOut"
      }
    })
  };

  // Education details from LaTeX resume
  const education = [
    {
      degree: "Bachelor of Technology in Computer Science and Engineering",
      institution: "Vardhaman College of Engineering, Shamshabad",
      board: "JNTUH",
      score: "CGPA: 8.71",
      period: "2022-26"
    },
    {
      degree: "Intermediate in MPC",
      institution: "Narayana College, Madhapur, Hyderabad",
      board: "Telangana Board of Intermediate Education (TGBIE)",
      score: "Percentage: 95.6",
      period: "2020-22"
    },
    {
      degree: "Xth Class",
      institution: "Narayana CO School, Shankharpally",
      board: "Telangana Board of Secondary Education (BSET)",
      score: "CGPA: 10",
      period: "2020"
    }
  ];

  const technicalSkills = [
  { name: "C/C++", level: 100 },
  { name: "Python", level: 100 },
  { name: "JavaScript", level: 100 },
  { name: "HTML/CSS", level: 100 },
  { name: "React.js", level: 100 },
  { name: "Node.js", level: 100 },
  { name: "Java Server Pages (JSP)", level: 100 },
  { name: "SQL", level: 100 },
  { name: "Java", level: 100 }
  ];

  const frameworks = [
    "React.js",
    "Express.js",
    "Bootstrap",
    "Material UI",
    "C++ STL",
    "Python ML Libraries"
  ];

  const databases = [
    "MongoDB",
    "MySQL",
    "PostgreSQL",
    "SQL Databases"
  ];

  const certifications = [
    "The Complete Web Development Bootcamp - Dr. Angela Yu (2025)",
    "MongoDB Core Certification - MongoDB University (July 2024)",
    "Data Analytics and Visualization Job Simulation - Accenture (January 2025)",
    "SQL Fundamentals - HackerRank (May 2024)",
    "Augmented Reality and ARCore - Coursera (June 2024)",
    "Generative AI - Great Learning (June 2024)",
    "HTML5, CSS3, JavaScript - Infosys Springboard (March 2025)",
    "Front End Web Developer - Infosys Springboard (March 2025)"
  ];

  const internships = [
    {
      title: "Front-end Development Intern",
      company: "Cognifyz, Hyderabad",
      period: "Feb - current 2025",
      type: "Remote",
      description: "Developed responsive and interactive web applications using modern web technologies including HTML5, CSS3, JavaScript, and React.js"
    },
    {
      title: "Artificial Intelligence Intern",
      company: "NIELIT Virtual Academy, Hyderabad",
      period: "August - October 2024",
      type: "Remote",
      description: "Completed comprehensive 8-week intensive program in Artificial Intelligence, Machine Learning, and Deep Learning technologies"
    }
  ];

  const softSkills = [
    "Problem Solving",
    "Continuous Learning",
    "Teamwork",
    "Adaptability",
    "Communication"
  ];

  const tools = [
    "Node.js",
    "VS Code",
    "Git & GitHub",
    "Express.js",
    "Unix Command Line",
    "MongoDB Compass"
  ];

  const relevantCoursework = [
    "Data Structures & Algorithms",
    "Operating Systems",
    "Object-Oriented Programming",
    "Database Management Systems",
    "Data Science",
    "Cybersecurity",
    "Software Engineering"
  ];

  return (
    <section id="skills" className="py-5 section" ref={ref}>
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
              Skills & Expertise
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
              My technical toolkit and professional capabilities that I bring to every project.
            </motion.p>
          </div>

          {/* Education Section */}
          <motion.div 
            className="row mb-5"
            variants={containerVariants}
          >
            <div className="col-12">
              <motion.h3 
                className="fs-4 text-white mb-4"
                variants={itemVariants}
              >
                Education
              </motion.h3>
              
              <div className="row g-4">
                {education.map((edu, index) => (
                  <div className="col-lg-4" key={index}>
                    <motion.div 
                      className="card-custom p-4 h-100 hover-lift"
                      variants={itemVariants}
                    >
                      <h4 className="fs-5 text-white mb-2">{edu.degree}</h4>
                      <p className="text-primary mb-1">{edu.institution}</p>
                      <p className="text-secondary mb-1 small">{edu.board}</p>
                      <div className="d-flex justify-content-between mt-3">
                        <span className="badge bg-primary-custom">{edu.score}</span>
                        <span className="text-secondary small">{edu.period}</span>
                      </div>
                    </motion.div>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Skills Section */}
          <div className="row g-4">
            <div className="col-lg-6">
              <motion.h3 
                className="fs-4 text-white mb-4"
                variants={itemVariants}
              >
                Technical Skills
              </motion.h3>
              
              {technicalSkills.map((skill) => (
                <motion.div 
                  key={skill.name} 
                  className="mb-4"
                  variants={itemVariants}
                >
                  <div className="d-flex justify-content-between mb-2">
                    <span className="text-white">{skill.name}</span>
                    <span className="text-secondary">{skill.level}%</span>
                  </div>
                  <div className="progress" style={{ height: "8px", backgroundColor: "var(--light-bg)" }}>
                    <motion.div
                      className="progress-bar"
                      style={{ 
                        background: "linear-gradient(90deg, var(--primary-color), var(--secondary-color))",
                        borderRadius: "4px"
                      }}
                      custom={skill.level}
                      variants={progressVariants}
                    />
                  </div>
                </motion.div>
              ))}
            </div>

            <div className="col-lg-6">
              <div className="row">
                <div className="col-md-6">
                  <motion.h3 
                    className="fs-4 text-white mb-4"
                    variants={itemVariants}
                  >
                    Frameworks & Libraries
                  </motion.h3>
                  
                  <motion.ul 
                    className="list-unstyled"
                    variants={containerVariants}
                  >
                    {frameworks.map((framework) => (
                      <motion.li 
                        key={framework} 
                        className="mb-3 d-flex align-items-center"
                        variants={itemVariants}
                      >
                        <div className="me-3 p-2 rounded-circle" style={{ background: "rgba(0, 195, 255, 0.1)" }}>
                          <div className="bg-primary rounded-circle" style={{ width: "8px", height: "8px" }}></div>
                        </div>
                        <span className="text-white">{framework}</span>
                      </motion.li>
                    ))}
                  </motion.ul>
                </div>
                
                <div className="col-md-6">
                  <motion.h3 
                    className="fs-4 text-white mb-4"
                    variants={itemVariants}
                  >
                    Databases & Cloud
                  </motion.h3>
                  
                  <motion.ul 
                    className="list-unstyled"
                    variants={containerVariants}
                  >
                    {databases.map((db) => (
                      <motion.li 
                        key={db} 
                        className="mb-3 d-flex align-items-center"
                        variants={itemVariants}
                      >
                        <div className="me-3 p-2 rounded-circle" style={{ background: "rgba(0, 195, 255, 0.1)" }}>
                          <div className="bg-primary rounded-circle" style={{ width: "8px", height: "8px" }}></div>
                        </div>
                        <span className="text-white">{db}</span>
                      </motion.li>
                    ))}
                  </motion.ul>
                </div>
              </div>
            </div>
          </div>

          {/* Internships Section */}
          <motion.div 
            className="row mb-5 mt-5"
            variants={containerVariants}
          >
            <div className="col-12">
              <motion.h3 
                className="fs-4 text-white mb-4"
                variants={itemVariants}
              >
                Internships
              </motion.h3>
              
              <div className="row g-4">
                {internships.map((internship, index) => (
                  <div className="col-lg-6" key={index}>
                    <motion.div 
                      className="card-custom p-4 h-100"
                      custom={index}
                      variants={certCardVariants}
                      initial="hidden"
                      animate={inView ? "visible" : "hidden"}
                      whileTap={{ scale: 0.98 }}
                      whileHover={{
                        scale: 1.03, 
                        boxShadow: "0px 10px 25px rgba(0, 195, 255, 0.2)",
                        transition: { duration: 0.3, ease: "easeOut" }
                      }}
                    >
                      <motion.div
                        initial={{ x: -20, opacity: 0 }}
                        animate={{ x: 0, opacity: 1 }}
                        transition={{ delay: 0.2, duration: 0.5 }}
                      >
                        <h4 className="fs-5 text-white mb-2">{internship.title}</h4>
                        <p className="text-primary mb-1">{internship.company}</p>
                        <div className="d-flex justify-content-between mb-3">
                          <motion.span 
                            className="badge bg-primary-custom"
                            whileHover={{ scale: 1.1, y: -2 }}
                            transition={{ type: "spring", stiffness: 400 }}
                          >
                            {internship.type}
                          </motion.span>
                          <span className="text-secondary small">{internship.period}</span>
                        </div>
                        <p className="text-secondary small">{internship.description}</p>
                      </motion.div>
                    </motion.div>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Additional Skills Section */}
          <div className="row g-4 mb-5">
            <div className="col-lg-4">
              <motion.h3 
                className="fs-4 text-white mb-4"
                variants={itemVariants}
              >
                Development Tools
              </motion.h3>
              
              <motion.ul 
                className="list-unstyled"
                variants={containerVariants}
              >
                {tools.map((tool) => (
                  <motion.li 
                    key={tool} 
                    className="mb-3 d-flex align-items-center"
                    variants={itemVariants}
                  >
                    <div className="me-3 p-2 rounded-circle" style={{ background: "rgba(0, 195, 255, 0.1)" }}>
                      <div className="bg-primary rounded-circle" style={{ width: "8px", height: "8px" }}></div>
                    </div>
                    <span className="text-white">{tool}</span>
                  </motion.li>
                ))}
              </motion.ul>
            </div>

            <div className="col-lg-4">
              <motion.h3 
                className="fs-4 text-white mb-4"
                variants={itemVariants}
              >
                Soft Skills
              </motion.h3>
              
              <motion.ul 
                className="list-unstyled"
                variants={containerVariants}
              >
                {softSkills.map((skill) => (
                  <motion.li 
                    key={skill} 
                    className="mb-3 d-flex align-items-center"
                    variants={itemVariants}
                  >
                    <div className="me-3 p-2 rounded-circle" style={{ background: "rgba(0, 195, 255, 0.1)" }}>
                      <div className="bg-primary rounded-circle" style={{ width: "8px", height: "8px" }}></div>
                    </div>
                    <span className="text-white">{skill}</span>
                  </motion.li>
                ))}
              </motion.ul>
            </div>

            <div className="col-lg-4">
              <motion.h3 
                className="fs-4 text-white mb-4"
                variants={itemVariants}
              >
                Relevant Coursework
              </motion.h3>
              
              <motion.ul 
                className="list-unstyled"
                variants={containerVariants}
              >
                {relevantCoursework.map((course) => (
                  <motion.li 
                    key={course} 
                    className="mb-3 d-flex align-items-center"
                    variants={itemVariants}
                  >
                    <div className="me-3 p-2 rounded-circle" style={{ background: "rgba(0, 195, 255, 0.1)" }}>
                      <div className="bg-primary rounded-circle" style={{ width: "8px", height: "8px" }}></div>
                    </div>
                    <span className="text-white">{course}</span>
                  </motion.li>
                ))}
              </motion.ul>
            </div>
          </div>

          {/* Certifications Section */}
          <motion.div 
            className="row mb-5"
            variants={containerVariants}
          >
            <div className="col-12">
              <motion.h3 
                className="fs-4 text-white mb-4"
                variants={itemVariants}
              >
                Certifications & Achievements
              </motion.h3>
              
              <div className="row g-3">
                {certifications.map((cert, index) => (
                  <div className="col-lg-6" key={index}>
                    <motion.div 
                      className="card-custom p-3 h-100"
                      custom={index}
                      variants={certCardVariants}
                      initial="hidden"
                      animate={inView ? "visible" : "hidden"}
                      whileTap={{ scale: 0.98 }}
                      whileHover={{
                        scale: 1.03, 
                        boxShadow: "0px 10px 25px rgba(0, 195, 255, 0.2)",
                        transition: { duration: 0.3, ease: "easeOut" }
                      }}
                    >
                      <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.1 * index, duration: 0.5 }}
                      >
                        <motion.p 
                          className="text-white mb-0 small"
                          whileHover={{ color: "var(--primary-color)" }}
                        >
                          {cert}
                        </motion.p>
                      </motion.div>
                    </motion.div>
                  </div>
                ))}
              </div>
              
              <motion.div 
                className="mt-4 p-3 card-custom"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3, duration: 0.6 }}
                whileHover={{
                  scale: 1.02, 
                  boxShadow: "0px 10px 25px rgba(0, 195, 255, 0.2)",
                  transition: { duration: 0.3, ease: "easeOut" }
                }}
                whileTap={{ scale: 0.98 }}
              >
                <motion.div
                  initial={{ y: 20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ delay: 0.5, duration: 0.7 }}
                >
                  <motion.h5 
                    className="text-white mb-2"
                    whileHover={{ color: "var(--primary-color)" }}
                  >
                    HackerRank Achievement
                  </motion.h5>
                  <motion.p 
                    className="text-secondary mb-0 small"
                    initial={{ x: -10, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{ delay: 0.7, duration: 0.5 }}
                  >
                    5 badges earned on coding platform with ID kranthivadala8
                  </motion.p>
                </motion.div>
              </motion.div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;