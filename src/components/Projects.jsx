import React from 'react';
import './Projects.css';

const projects = [
  {
    id: 1,
    title: "Smart Surveillance System",
    type: "IoT & AI Based Project",
    duration: "Jun 2024 – Apr 2026",
    description: "An advanced AI-based surveillance system using PIR, IR, ultrasonic, and voice sensors for comprehensive security.",
    points: [
      "Developed an AI-based surveillance system using multiple sensors.",
      "Implemented real-time monitoring and automation using Raspberry Pi."
    ],
    tags: ["Raspberry Pi", "IoT", "AI", "Sensors"]
  },
  {
    id: 2,
    title: "Smart Bus Tracking & Attendance System",
    type: "IoT Based Project",
    duration: "Feb 2026 – Present",
    description: "A comprehensive solution for student safety and attendance management during transit.",
    points: [
      "Designed an IoT-based bus attendance and tracking system.",
      "Developed real-time student tracking using barcode scanning with ESP32."
    ],
    tags: ["ESP32", "IoT", "Barcode Scanning", "Real-time Tracking"]
  }
];

const Projects = () => {
  return (
    <section id="projects" className="section-padding">
      <div className="container">
        <h2 className="section-title">Featured Projects</h2>
        <div className="projects-grid">
          {projects.map((project) => (
            <div key={project.id} className="glass-card project-card">
              <div className="project-content">
                <div className="project-header">
                  <span className="project-type">{project.type}</span>
                  <span className="project-duration">{project.duration}</span>
                </div>
                <h3 className="project-title">{project.title}</h3>
                <p className="project-desc">{project.description}</p>
                <ul className="project-points">
                  {project.points.map((point, index) => (
                    <li key={index}>✨ {point}</li>
                  ))}
                </ul>
                <div className="project-tags">
                  {project.tags.map((tag, index) => (
                    <span key={index} className="tag">{tag}</span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
