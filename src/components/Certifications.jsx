import React from 'react';
import './CardSection.css';

const certs = [
  "AWS Certified Cloud Practitioner",
  "NPTEL : IoT Certification",
  "GUVI DSA with Java Course",
  "Internship Certification – Neyveli Lignite Corporation (NLC)"
];

const Certifications = () => {
  return (
    <div className="card-section">
      <h2 className="section-title">Certifications</h2>
      <div className="cards-list">
        {certs.map((cert, idx) => (
          <div key={idx} className="glass-card item-card cert-card">
            <span className="cert-icon">🏆</span>
            <h3 className="item-title">{cert}</h3>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Certifications;
