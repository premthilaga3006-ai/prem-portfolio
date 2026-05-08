import React from 'react';
import { motion } from 'framer-motion';
import { Typewriter } from 'react-simple-typewriter';
import Tilt from 'react-parallax-tilt';
import './Hero.css';
import heroImg from '../assets/hero.png';

const Hero = () => {
  return (
    <section id="about" className="hero section-padding">
      {/* Background Particles/Orbs */}
      <div className="hero-background">
        <div className="orb orb-1"></div>
        <div className="orb orb-2"></div>
        <div className="orb orb-3"></div>
      </div>

      <div className="container hero-container">
        <motion.div 
          className="hero-content"
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <motion.div 
            className="badge glass-card"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.5 }}
          >
            Hi, I'm Prem Kumar R 👋
          </motion.div>
          <h1 className="hero-title">
            Aspiring <br />
            <span className="text-gradient" style={{ display: 'inline-block', minHeight: '1.2em' }}>
              <Typewriter
                words={['Software Engineer', 'IoT Specialist', 'Java Developer', 'Tech Innovator']}
                loop={true}
                cursor
                cursorStyle='_'
                typeSpeed={70}
                deleteSpeed={50}
                delaySpeed={1000}
              />
            </span>
          </h1>
          <motion.p 
            className="hero-description"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6, duration: 0.8 }}
          >
            Motivated Electronics and Communication Engineering student with strong foundations in Java, C, IoT, and cloud computing. Experienced in developing smart surveillance and automation projects using sensors and AI-based technologies.
          </motion.p>
          <motion.div 
            className="hero-cta"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8, duration: 0.5 }}
          >
            <a href="#projects" className="btn btn-primary">View My Work</a>
            <a href="https://github.com/premthilaga3006-ai" target="_blank" rel="noreferrer" className="btn btn-outline">GitHub Profile</a>
          </motion.div>
          <motion.div 
            className="contact-info glass-card"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1, duration: 0.5 }}
          >
            <div className="contact-item">
              <span className="icon">📧</span>
              <span>premthilaga3006@gmail.com</span>
            </div>
            <div className="contact-item">
              <span className="icon">📱</span>
              <span>+91 6379835879</span>
            </div>
            <div className="contact-item">
              <span className="icon">💼</span>
              <a href="https://linkedin.com/in/premkumar-engineering" target="_blank" rel="noreferrer">LinkedIn</a>
            </div>
          </motion.div>
        </motion.div>
      </div>

      {/* Hero Visual moved OUTSIDE container to span full window */}
      <motion.div 
        className="hero-visual"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1, ease: "easeOut" }}
      >
        <Tilt 
          className="tilt-container"
          tiltMaxAngleX={15}
          tiltMaxAngleY={15}
          perspective={1000}
          scale={1.05}
          transitionSpeed={2000}
          gyroscope={true}
        >
          <div className="image-container walking-entry">
            <img src={heroImg} alt="Prem Kumar R" className="hero-photo ai-glow" />
          </div>
        </Tilt>
      </motion.div>
    </section>
  );
};

export default Hero;
