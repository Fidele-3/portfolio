import React from "react";
import { FaEnvelope, FaPhone, FaMapMarkerAlt, FaGithub, FaLinkedin } from "react-icons/fa";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
const ResumePage = () => {
  return (
    <div
      style={{
        minHeight: "100vh",
        backgroundColor: "rgb(10, 10, 10)",
        color: "#e0e0e0",
        padding: "2rem",
        fontFamily: "Segoe UI, Tahoma, Geneva, Verdana, sans-serif",
        display: "flex",
        justifyContent: "center",
      }}
    >
      <Navbar />
      
            <div
              style={{
                padding: "2rem",
                color: "#00ff99",
                flex: 1,
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                width: "100%",
              }}
            ></div>
      <div
        style={{
          maxWidth: "900px",
          width: "100%",
          background: "rgba(20, 20, 20, 0.95)",
          border: "2px solid rgba(0,255,0,0.3)",
          borderRadius: "15px",
          padding: "2rem",
          boxShadow: "0 0 15px rgba(0,255,0,0.3)",
        }}
      >
        {/* Header: Image & Name */}
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            flexWrap: "wrap",
            alignItems: "center",
            justifyContent: "space-between",
            marginBottom: "2rem",
          }}
        >
          <div style={{ display: "flex", alignItems: "center" }}>
            <img
              src="./profile.png"
              alt="NSANZUMUHIRE FIDELE"
              style={{
                width: "120px",
                height: "120px",
                borderRadius: "50%",
                border: "2px solid #0f0",
                marginRight: "1.5rem",
                objectFit: "cover",
              }}
            />
            <div>
              <h1 style={{ fontSize: "2rem", margin: "0", color: "#0f0" }}>
                NSANZUMUHIRE FIDELE
              </h1>
              <p style={{ fontSize: "1rem", color: "#ccc" }}>Kigali, Rwanda</p>
            </div>
          </div>

          <div style={{ textAlign: "right", marginTop: "1rem" }}>
            <p style={{ margin: "0.3rem 0" }}>
              <FaEnvelope style={{ color: "#0f0", marginRight: "8px" }} />
              fidelensanzumuhire9@gmail.com
            </p>
            <p style={{ margin: "0.3rem 0" }}>
              <FaPhone style={{ color: "#0f0", marginRight: "8px" }} />
              +250 786 161 794
            </p>
            <p style={{ margin: "0.3rem 0" }}>
              <FaGithub style={{ color: "#0f0", marginRight: "8px" }} />
              <a
                href="https://github.com/Fidele-3"
                target="_blank"
                rel="noopener noreferrer"
                style={{ color: "#0ff", textDecoration: "none" }}
              >
                GitHub
              </a>
            </p>
            <p style={{ margin: "0.3rem 0" }}>
              <FaLinkedin style={{ color: "#0f0", marginRight: "8px" }} />
              <a
                href="https://www.linkedin.com/in/nsanzumuhire-fid%C3%A8le-b23aa9325?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
                target="_blank"
                rel="noopener noreferrer"
                style={{ color: "#0ff", textDecoration: "none" }}
              >
                LinkedIn
              </a>
            </p>
          </div>
        </div>

        {/* Sections */}
        <div style={{ marginBottom: "1.5rem" }}>
          <h2 style={{ color: "#0f0", borderBottom: "1px solid #0f0" }}>
            🎯 Professional Summary
          </h2>
          <p style={{ marginTop: "0.5rem" }}>
          Versatile and passionate Software Developer, Cybersecurity Enthusiast, and AI/ML Explorer with a strong foundation in engineering principles and user-centric design. Demonstrated expertise in building efficient, scalable, and secure software solutions across diverse domains. Deeply committed to continuous learning and innovation, with hands-on experience in full-stack development, system architecture, and emerging technologies in artificial intelligence and machine learning. Adept at identifying and mitigating security vulnerabilities while implementing best practices in cybersecurity. Known for a proactive problem-solving approach, collaborative mindset, and the ability to transform complex technical challenges into intuitive, impactful digital experiences.
          </p>
        </div>

        <div style={{ marginBottom: "1.5rem" }}>
          <h2 style={{ color: "#0f0", borderBottom: "1px solid #0f0" }}>
            🧠 Core Skills & Technologies
          </h2>
          <ul style={{ columns: 2, listStyleType: "square", paddingLeft: "1.2rem" }}>
            <li>Python</li>
            <li>JavaScript</li>
            <li>C#, Pygame</li>
            <li>TensorFlow</li>
            <li>Ethical Hacking</li>
            <li>Django</li>
            <li>Unity Engine</li>
            <li>AWS & Azure</li>
            <li>AutoCAD, Rhino, Civil 3D</li>
            <li>Smart Cities, IoT</li>
            <li>Agile, CI/CD</li>
            <li>Git & GitHub</li>
          </ul>
        </div>

        <div style={{ marginBottom: "1.5rem" }}>
          <h2 style={{ color: "#0f0", borderBottom: "1px solid #0f0" }}>📜 Certifications</h2>
          <ul style={{ paddingLeft: "1.2rem" }}>
            <li>Risk Management Framework – NIST, USA government cyber agency</li>
            <li>Advanced Cybersecurity – MINICT Rwanda & IHS Towers</li>
            <li>Advanced Software/Game Development – MINICT Rwanda & IHS Towers</li>
            <li>AI & ML Algorithms – Udacity & MINICT Rwanda</li>
            <li>Smart Cities – World Bank </li>
            <li>CS50 – Harvard University </li>
          </ul>
        </div>

        <div style={{ marginBottom: "1.5rem" }}>
          <h2 style={{ color: "#0f0", borderBottom: "1px solid #0f0" }}>🎓 Education</h2>
          <p>Advanced Degree in Construction Technology</p>
          <p>Institution: RP-Kigal colege</p>
          <p>2024-Present </p>
        </div>

        <div style={{ marginBottom: "1.5rem" }}>
          <h2 style={{ color: "#0f0", borderBottom: "1px solid #0f0" }}>
            🧪 Practical Experience
          </h2>
          <p>Freelance Software Developer & AI/Cybersecurity Practitioner</p>
          <p>
            - Built secure Django/React apps <br />
            - ML for signal jamming <br />
            - Ethical hacking simulations <br />
            - DevOps pipelines and tools <br />
            - Unity game dev
          </p>
        </div>

        <div style={{ marginBottom: "1.5rem" }}>
          <h2 style={{ color: "#0f0", borderBottom: "1px solid #0f0" }}>
            🏗️ Engineering & Design Background
          </h2>
          <p>
            - 3D models in Revit, Rhino <br />
            - ETABS for analysis <br />
            - AutoCAD & Civil 3D for urban plans <br />
            - Smart sensors for simulation
          </p>
        </div>

        <div style={{ marginBottom: "1.5rem" }}>
          <h2 style={{ color: "#0f0", borderBottom: "1px solid #0f0" }}>
            🔍 Project Highlights
          </h2>
          <ul style={{ paddingLeft: "1.2rem" }}>
            <li>
              <strong>Signal Jamming & Detection Platform:</strong> Full AI-integrated system using
              HackRF & ML.
            </li>
            <li>
              <strong>CyberSim Game Project:</strong> Unity-based ethical hacking teaching sim.
            </li>
            <li>
              <strong>Smart City AI Dashboard:</strong> Real-time ML + Firebase dashboards.
            </li>
            <li>
              <strong>CyberRunner Game:</strong> Python game teaching cyber awareness.
            </li>
          </ul>
        </div>

        <div style={{ marginBottom: "1.5rem" }}>
          <h2 style={{ color: "#0f0", borderBottom: "1px solid #0f0" }}>🗣️ Languages</h2>
          <ul style={{ paddingLeft: "1.2rem" }}>
            <li>Kinyarwanda – Native</li>
            <li>English – Fluent</li>
            <li>French – Intermediate</li>
          </ul>
        </div>

        <div>
          <h2 style={{ color: "#0f0", borderBottom: "1px solid #0f0" }}>
            👨‍💻 Portfolio & Availability
          </h2>
          <p>
            GitHub:{' '}
            <a
              href="https://github.com/Fidele-3"
              target="_blank"
              rel="noopener noreferrer"
              style={{ color: "#0ff" }}
            >
              github.com/Fidele-3
            </a>
          </p>
          <p>
            LinkedIn:{' '}
            <a
              href="https://www.linkedin.com/in/nsanzumuhire-fid%C3%A8le-b23aa9325?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
              target="_blank"
              rel="noopener noreferrer"
              style={{ color: "#0ff" }}
            >
              linkedin.com/in/NSANZUMUHIRE-FIDELE
            </a>
          </p>
          <p>Availability: Open to freelance, remote, or full-time</p>
        </div>

        {/* Download Button */}
        <div style={{ marginTop: "2rem", textAlign: "center" }}>
          <button
            onClick={() => window.print()}
            style={{
              background: "#0f0",
              color: "#000",
              padding: "0.7rem 2rem",
              fontSize: "1rem",
              borderRadius: "10px",
              border: "none",
              cursor: "pointer",
              transition: "0.3s",
              boxShadow: "0 0 10px #0f0",
            }}
            onMouseOver={(e) => (e.target.style.background = "#0ff")}
            onMouseOut={(e) => (e.target.style.background = "#0f0")}
          >
            Download CV
          </button>
        </div>
      </div>
      
    </div>
  );
};

export default ResumePage;
