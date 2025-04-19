// src/components/Resume.jsx
import React from "react";
import { useNavigate } from "react-router-dom";

const Resume = () => {
  const navigate = useNavigate();

  const handleViewMore = () => {
    navigate("/resume");
  };

  return (
    <div style={{
      padding: "4rem 1rem",
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      color: "#E0E0E0",
      fontFamily: "Courier New, monospace",
      animation: "fadeIn 1s ease-in-out",
      backgroundColor: "rgba(0, 0, 0, 0.6)",
      borderRadius: "20px",
      margin: "2rem auto",
      maxWidth: "1000px",
      width: "95%",
      boxShadow: "0 0 30px rgba(0,255,180,0.2)",
    }}>
      <h2 style={{
        fontSize: "2.5rem",
        color: "#00FFCC",
        marginBottom: "1rem",
        textAlign: "center",
        letterSpacing: "1.5px"
      }}>Résumé</h2>

      <div style={{
        display: "grid",
        gridTemplateColumns: "1fr 1fr",
        gap: "2rem",
        width: "100%",
        maxWidth: "900px"
      }}>
        {/* Education */}
        <div style={{
          background: "rgba(20, 20, 20, 0.8)",
          padding: "1.5rem",
          borderRadius: "15px",
          boxShadow: "0 0 10px rgba(0,255,180,0.1)"
        }}>
          <h3 style={{ color: "#00FFD5", fontSize: "1.4rem", marginBottom: "0.5rem" }}>Education</h3>
          <ul>
            <li>Advanced diploma in construction technology (2024 - present)</li>
            <li>Cybersecurity , SOD, Game programming - MINICT Rwanda & IHS Towers (2025)</li>
            <li>CS50 intro to computer science - Harvard university(2024)</li>
          </ul>
        </div>

        {/* Experience */}
        <div style={{
          background: "rgba(20, 20, 20, 0.8)",
          padding: "1.5rem",
          borderRadius: "15px",
          boxShadow: "0 0 10px rgba(0,255,180,0.1)"
               }}>
          <h3 style={{ color: "#00FFD5", fontSize: "1.4rem", marginBottom: "0.5rem" }}>Experience</h3>
          <ul>
            <li>Software Engineer - Freelance (2023 - Present)</li>
            <li>Cybersecurity - Freelance (2024)</li>
            <li>AI & Machine Learning Engineer - Independent Projects (2023 - Present)</li>
            <li>DevOps & Cloud Solutions Architect - Freelance (2024)</li>
            <li>System & Network Design Consultant - Independent (2023 - 2024)</li>
          </ul>

        </div>

        {/* Skills */}
        <div style={{
          background: "rgba(20, 20, 20, 0.8)",
          padding: "1.5rem",
          borderRadius: "15px",
          gridColumn: "span 2",
          boxShadow: "0 0 10px rgba(0,255,180,0.1)"
        }}>
          <h3 style={{ color: "#00FFD5", fontSize: "1.4rem", marginBottom: "0.5rem" }}>Skills</h3>
          <div style={{ display: "flex", flexWrap: "wrap", gap: "0.5rem" }}>
            {[
              "Cybersecurity",
              "Game Programming",
              "AI & Machine Learning",
              "Full-Stack Development",
              "DevOps & Cloud Engineering",
              "System Design",
              "REST APIs",
              "Secure Software Development"
            ].map(skill => (
              <span key={skill} style={{
                background: "rgba(0, 255, 180, 0.1)",
                border: "1px solid #00FFCC",
                borderRadius: "5px",
                padding: "0.4rem 0.8rem",
                fontSize: "0.9rem"
              }}>{skill}</span>
            ))}
          </div>
        </div>
      </div>

      {/* Buttons */}
      <div style={{
        display: "flex",
        gap: "1rem",
        marginTop: "2rem"
      }}>
        <button onClick={handleViewMore}
          style={{
            backgroundColor: "#00FFCC",
            color: "#000",
            padding: "0.7rem 1.4rem",
            borderRadius: "30px",
            fontWeight: "bold",
            fontSize: "1rem",
            textDecoration: "none",
            boxShadow: "0 0 15px rgba(0,255,180,0.4)",
            transition: "transform 0.3s ease",
          }}
          onMouseOver={e => e.target.style.transform = "scale(1.05)"}
          onMouseOut={e => e.target.style.transform = "scale(1)"}
        >
          Download CV
        </button>

        <button onClick={handleViewMore}
          style={{
            backgroundColor: "transparent",
            color: "#00FFCC",
            border: "2px solid #00FFCC",
            padding: "0.7rem 1.4rem",
            borderRadius: "30px",
            fontWeight: "bold",
            fontSize: "1rem",
            cursor: "pointer",
            transition: "transform 0.3s ease",
          }}
          onMouseOver={e => e.target.style.transform = "scale(1.05)"}
          onMouseOut={e => e.target.style.transform = "scale(1)"}
        >
          View More
        </button>
      </div>

      <style>{`
        @keyframes fadeIn {
          0% { opacity: 0; transform: translateY(30px); }
          100% { opacity: 1; transform: translateY(0); }
        }

        @media screen and (max-width: 768px) {
          div[style*="grid-template-columns"] {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </div>
  );
};

export default Resume;
