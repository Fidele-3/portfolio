// src/components/Projects.jsx
import React from "react";
import { useNavigate } from "react-router-dom";

const Projects = () => {
  const navigate = useNavigate();

  const handleRedirect = () => {
    navigate("/projects");
  };

  const projects = [
    {
      title: "Signal Jamming Detection System",
      description:
        "An AI-powered signal jamming detection and mitigation system using HackRF, Raspberry Pi, ML models, GPS and a custom React Native + Django dashboard.",
      tech: ["Python", "HackRF", "ML", "Raspberry Pi", "Django", "React Native"],
    },
    {
      title: "Cyber Defense Simulation Game",
      description:
        "An educational game that teaches users how to protect infrastructure against cyberattacks. Features real-time attack vectors and response simulation.",
      tech: ["Unity", "C#", "Game Design", "Networking"],
    },
    {
      title: "DevOps CI/CD Pipeline",
      description:
        "Automated deployment of scalable cloud applications with Kubernetes, Jenkins, Docker, and GitHub Actions integrated into a professional CI/CD workflow.",
      tech: ["Jenkins", "Docker", "Kubernetes", "GitHub Actions", "AWS"],
    },
  ];

  return (
    <section
      id="projects"
      style={{
        backgroundColor: "rgba(20, 20, 20, 0.7)",
        padding: "4rem 1rem",
        color: "white",
      }}
    >
      <div
        style={{
          maxWidth: "1200px",
          margin: "0 auto",
          padding: "2rem",
          borderRadius: "1.5rem",
          background: "rgba(0,0,0,0.4)",
          border: "1px solid rgba(0, 255, 170, 0.2)",
          boxShadow: "0 0 25px rgba(0, 255, 170, 0.3)",
          backdropFilter: "blur(5px)",
          animation: "fadeIn 1.2s ease-in-out",
        }}
      >
        <h2
          style={{
            fontSize: "2.5rem",
            textAlign: "center",
            color: "#00ffaa",
            marginBottom: "2rem",
            textShadow: "0 0 6px #00ffaa",
            animation: "slideFromTop 0.8s ease-in-out",
          }}
        >
          Projects
        </h2>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
            gap: "2rem",
            animation: "fadeInUp 1.2s ease-in-out",
          }}
        >
          {projects.map((project, index) => (
            <div
              key={index}
              style={{
                padding: "1.5rem",
                borderRadius: "1rem",
                background: "rgba(15, 15, 15, 0.6)",
                border: "1px solid #00ffaa44",
                boxShadow: "0 0 10px #00ffaa33",
                transition: "transform 0.3s ease, box-shadow 0.3s ease",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = "translateY(-8px)";
                e.currentTarget.style.boxShadow = "0 0 15px #00ffaa66";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = "translateY(0)";
                e.currentTarget.style.boxShadow = "0 0 10px #00ffaa33";
              }}
            >
              <h3
                style={{
                  fontSize: "1.5rem",
                  marginBottom: "1rem",
                  color: "#00ffaa",
                  textShadow: "0 0 3px #00ffaa",
                }}
              >
                {project.title}
              </h3>
              <p style={{ marginBottom: "1rem", lineHeight: "1.6", color: "#ddd" }}>
                {project.description}
              </p>
              <div
                style={{
                  display: "flex",
                  flexWrap: "wrap",
                  gap: "0.5rem",
                  marginBottom: "1rem",
                }}
              >
                {project.tech.map((tech, i) => (
                  <span
                    key={i}
                    style={{
                      padding: "0.3rem 0.7rem",
                      background: "rgba(0,255,170,0.1)",
                      border: "1px solid #00ffaa55",
                      borderRadius: "1rem",
                      fontSize: "0.75rem",
                      color: "#00ffaa",
                    }}
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div style={{ textAlign: "center", marginTop: "3rem" }}>
          <button
            onClick={handleRedirect}
            style={{
              padding: "0.75rem 2rem",
              borderRadius: "1.5rem",
              fontWeight: "bold",
              background: "transparent",
              border: "2px solid #00ffaa",
              color: "#00ffaa",
              cursor: "pointer",
              fontSize: "1rem",
              boxShadow: "0 0 10px #00ffaa55",
              transition: "all 0.3s ease",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.backgroundColor = "#00ffaa22";
              e.currentTarget.style.transform = "scale(1.05)";
              e.currentTarget.style.boxShadow = "0 0 20px #00ffaaaa";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.backgroundColor = "transparent";
              e.currentTarget.style.transform = "scale(1)";
              e.currentTarget.style.boxShadow = "0 0 10px #00ffaa55";
            }}
          >
            View More
          </button>
        </div>
      </div>

      {/* Keyframe animations */}
      <style>{`
        @keyframes fadeIn {
          0% { opacity: 0; transform: scale(0.9); }
          100% { opacity: 1; transform: scale(1); }
        }
        @keyframes fadeInUp {
          0% { opacity: 0; transform: translateY(30px); }
          100% { opacity: 1; transform: translateY(0); }
        }
        @keyframes slideFromTop {
          0% { opacity: 0; transform: translateY(-30px); }
          100% { opacity: 1; transform: translateY(0); }
        }
      `}</style>
    </section>
  );
};

export default Projects;
