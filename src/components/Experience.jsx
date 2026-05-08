import React from 'react';
import { motion } from 'framer-motion';
import './Experience.css';
import expBg from '../assets/experience-bg.png';

const experiences = [
  {
    id: 1,
    role: "Control and Instrumentation Intern",
    company: "Neyveli Lignite Corporation (NLC)",
    duration: "Jan 2025 – Feb 2025",
    points: [
      "Gained practical exposure to industrial power plant operations and monitoring systems.",
      "Worked with sensors, control panels, and instrumentation systems.",
      "Learned industrial automation and process monitoring concepts."
    ]
  },
  {
    id: 2,
    role: "Industrial Training",
    company: "Hyundai Transys",
    duration: "Jun 2025 – Jul 2025",
    points: [
      "Learned automotive manufacturing workflows and quality control processes.",
      "Observed production systems and industrial automation techniques.",
      "Gained hands-on exposure to industrial production environments."
    ]
  }
];

const Experience = () => {
  return (
    <section id="experience" className="experience-section section-padding">
      {/* Background Image Container */}
      <div className="exp-background-container">
        <motion.img 
          src={expBg} 
          alt="Prem Kumar R Background" 
          className="exp-background-image ai-glow"
          initial={{ opacity: 0, x: -100, scale: 0.95 }}
          whileInView={{ opacity: 1, x: 0, scale: 1 }}
          viewport={{ once: false, amount: 0.3 }}
          transition={{ duration: 1.5, ease: "easeOut" }}
        />
      </div>

      <div className="container experience-content-wrapper">
        <motion.h2 
          className="section-title text-center"
          initial={{ opacity: 0, y: -50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.5 }}
          transition={{ duration: 0.8 }}
        >
          Work Experience
        </motion.h2>
        
        <div className="experience-grid">
          {experiences.map((exp, index) => (
            <motion.div 
              key={exp.id} 
              className="glass-card experience-card"
              initial={{ opacity: 0, x: 100 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: false, amount: 0.5 }}
              transition={{ delay: index * 0.3, duration: 0.8, ease: "easeOut" }}
            >
              <div className="experience-header">
                <h3 className="role">{exp.role}</h3>
                <span className="duration">{exp.duration}</span>
              </div>
              <h4 className="company text-gradient">{exp.company}</h4>
              <ul className="experience-points">
                {exp.points.map((point, idx) => (
                  <li key={idx}>
                    <span className="bullet"></span>
                    {point}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
