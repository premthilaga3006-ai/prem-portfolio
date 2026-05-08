import React from 'react';
import './CardSection.css';

const education = [
  {
    institution: "KPR Institute of Engineering and Technology (KPRIET)",
    degree: "Bachelor of Engineering (B.E) – Electronics and Communication Engineering",
    duration: "2023 - 2027",
    score: "CGPA: 7.39"
  },
  {
    institution: "CKPK Higher Secondary School",
    degree: "Higher Secondary Certificate (HSC)",
    duration: "2021 - 2023",
    score: "75.5%"
  }
];

const Education = () => {
  return (
    <div className="card-section">
      <h2 className="section-title">Education</h2>
      <div className="cards-list">
        {education.map((edu, idx) => (
          <div key={idx} className="glass-card item-card">
            <h3 className="item-title">{edu.institution}</h3>
            <p className="item-subtitle">{edu.degree}</p>
            <div className="item-meta">
              <span className="duration">{edu.duration}</span>
              <span className="score tag">{edu.score}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Education;
