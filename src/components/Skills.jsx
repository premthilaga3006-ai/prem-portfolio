import React from 'react';
import './Skills.css';

const skillCategories = [
  {
    category: "Languages",
    skills: ["Java Programming", "Embedded C", "C Programming"]
  },
  {
    category: "Concepts",
    skills: ["Object-Oriented Programming (OOP)"]
  },
  {
    category: "Hardware & Design",
    skills: ["Circuit Design", "PCB Design", "Electronics Components"]
  },
  {
    category: "Cloud Technologies",
    skills: ["AWS Cloud Fundamentals"]
  }
];

const Skills = () => {
  return (
    <section id="skills" className="section-padding">
      <div className="container">
        <h2 className="section-title">Technical Skills</h2>
        <div className="skills-container glass-card">
          {skillCategories.map((cat, idx) => (
            <div key={idx} className="skill-category">
              <h3 className="category-title">{cat.category}</h3>
              <div className="skills-list">
                {cat.skills.map((skill, index) => (
                  <div key={index} className="skill-badge">
                    {skill}
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
