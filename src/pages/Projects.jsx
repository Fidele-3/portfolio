import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const Projects = () => {
  const projectList = [
    {
      title: "Signal Jamming Detection System",
      description:
        "An AI-powered signal jamming detection and mitigation system using HackRF, Raspberry Pi, machine learning models, GPS, and a custom React Native + Django dashboard. It can jam and detect interference across multiple bands, intelligently analyze patterns, and visualize real-time signal health.",
      tech: ["Python", "HackRF", "ML", "Raspberry Pi", "Django", "React Native"],
    },
    {
      title: "Cyber Defense Simulation Game",
      description:
        "An educational game designed to teach users how to protect infrastructure from real-time cyberattacks. Includes attack vectors like DDoS, phishing, and malware. Players simulate defense responses while managing limited resources. Ideal for learning cybersecurity under pressure.",
      tech: ["Unity", "C#", "Game Design", "Networking"],
    },
    {
      title: "DevOps CI/CD Pipeline",
      description:
        "End-to-end CI/CD pipeline for deploying scalable cloud-native applications. Features Jenkins automation, containerization with Docker, orchestration via Kubernetes, and secure GitHub Actions integrations. Supports blue-green deployments, rollback, and real-time monitoring.",
      tech: ["Jenkins", "Docker", "Kubernetes", "GitHub Actions", "AWS"],
    },
  ];

  return (
    <div
      style={{
        backgroundImage: `url('./HomeBackground.jpg')`,
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
        minHeight: "100vh",
        fontFamily: "'Courier New', Courier, monospace",
        display: "flex",
        flexDirection: "column",
      }}
    >
      <Navbar />

      <div
        style={{
          padding: "2rem",
          flex: 1,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          color: "#00ff99",
        }}
      >
        <h1
          style={{
            fontSize: "3rem",
            fontWeight: "bold",
            marginBottom: "1rem",
            color: "#00ff99",
            textShadow: "0 0 5px #00ff99",
            textAlign: "center",
          }}
        >
          Projects
        </h1>

        <p
          style={{
            maxWidth: "900px",
            color: "rgba(255,255,255,0.8)",
            fontSize: "1.2rem",
            textAlign: "center",
            marginBottom: "2.5rem",
          }}
        >
          These are a few of my best projects — each built with strategic
          intent, security-first principles, and scalable system design. I blend
          theory with practical application to solve real-world challenges.
        </p>

        {/* Responsive Grid */}
        <div
          style={{
            display: "flex",
            flexWrap: "wrap",
            justifyContent: "center",
            gap: "2rem",
            width: "100%",
            maxWidth: "1200px",
          }}
        >
          {projectList.map((project, index) => (
            <div
              key={index}
              style={{
                flex: "1 1 100%",
                maxWidth: "100%",
                backgroundColor: "rgba(0, 0, 0, 0.4)",
                border: "1px solid rgba(0,255,153,0.4)",
                borderRadius: "12px",
                padding: "1.5rem",
                boxShadow: "0 0 12px rgba(0,255,153,0.2)",
                transition: "transform 0.3s ease, box-shadow 0.3s ease",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = "scale(1.03)";
                e.currentTarget.style.boxShadow =
                  "0 0 15px rgba(0,255,153,0.5)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = "scale(1)";
                e.currentTarget.style.boxShadow =
                  "0 0 12px rgba(0,255,153,0.2)";
              }}
              className="project-card"
            >
              <h2
                style={{
                  fontSize: "1.5rem",
                  fontWeight: "bold",
                  color: "#00ff99",
                  marginBottom: "0.5rem",
                  textShadow: "0 0 5px #00ff99",
                }}
              >
                {project.title}
              </h2>

              <p
                style={{
                  color: "rgba(255,255,255,0.85)",
                  fontSize: "1rem",
                  lineHeight: "1.6",
                  marginBottom: "1rem",
                }}
              >
                {project.description}
              </p>

              <div style={{ display: "flex", flexWrap: "wrap", gap: "0.5rem" }}>
                {project.tech.map((tech, i) => (
                  <span
                    key={i}
                    style={{
                      backgroundColor: "rgba(0, 255, 153, 0.1)",
                      color: "#00ff99",
                      border: "1px solid #00ff99",
                      padding: "0.3rem 0.6rem",
                      borderRadius: "5px",
                      fontSize: "0.85rem",
                      textShadow: "0 0 2px #00ff99",
                    }}
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Projects;
