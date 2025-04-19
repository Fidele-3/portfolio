import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const About = () => {
  const skills = [
    {
      title: "Cybersecurity",
      desc:
        "Deep experience in system hardening, penetration testing, risk analysis, and secure architecture design. I build solutions with security as a priority, applying both offensive and defensive tactics to protect data and infrastructure.",
    },
    {
      title: "Game Programming",
      desc:
        "Skilled in crafting engaging game logic, real-time rendering, and optimized physics engines. I design immersive gameplay experiences with strong C# and Unity background, plus AI-driven character mechanics.",
    },
    {
      title: "AI & Machine Learning",
      desc:
        "From building neural networks to deploying NLP models, I leverage ML to solve real-world problems like prediction, automation, and intelligent data processing with frameworks like TensorFlow and PyTorch.",
    },
    {
      title: "Full-Stack Development",
      desc:
        "I architect robust front-end and back-end systems using React, Node.js, Django, PostgreSQL, and REST APIs. My focus is performance, accessibility, and clean, testable code across all layers.",
    },
    {
      title: "DevOps & Cloud Engineering",
      desc:
        "I design scalable CI/CD pipelines, automate deployments, and manage cloud resources using Docker, Kubernetes, GitHub Actions, and platforms like AWS and Azure for efficient, reliable delivery.",
    },
    {
      title: "System Design",
      desc:
        "Experienced in planning scalable, fault-tolerant software systems. I apply SOLID principles and domain-driven design to engineer clean, distributed services and microservices architectures.",
    },
    {
      title: "REST APIs",
      desc:
        "I create performant, well-documented, and secure REST APIs using Express, Django REST Framework, and Flask. My focus is on modular architecture and real-time data sync where necessary.",
    },
    {
      title: "Secure Software Development",
      desc:
        "Security isn’t an afterthought in my workflow. I follow secure coding standards (OWASP), use encryption techniques, and conduct code audits to build resilient applications from the ground up.",
    },
  ];

  return (
    <div
      style={{
        backgroundImage: `url('./About.jpg')`,
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
          color: "#00ff99",
          flex: 1,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          width: "100%",
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
          About Me
        </h1>

        <p
          style={{
            maxWidth: "900px",
            color: "rgba(255,255,255,0.8)",
            fontSize: "1.2rem",
            textAlign: "center",
            marginBottom: "2rem",
          }}
        >
          I am a multidisciplinary software engineer with a passion for building
          secure, scalable, and futuristic systems. Below are the areas I
          specialize in, each backed by hands-on experience and a hacker mindset.
        </p>

        <div
          style={{
            display: "flex",
            flexDirection: "column",
            gap: "2rem",
            width: "100%",
            maxWidth: "1100px",
          }}
        >
          {skills.map((skill, index) => (
            <div
              key={index}
              style={{
                borderLeft: "4px solid #00ff99",
                paddingLeft: "1rem",
                background: "rgba(0, 0, 0, 0.3)",
                borderRadius: "10px",
                boxShadow: "0 0 10px rgba(0,255,153,0.2)",
                transition: "transform 0.3s ease",
              }}
              onMouseEnter={(e) =>
                (e.currentTarget.style.transform = "scale(1.02)")
              }
              onMouseLeave={(e) =>
                (e.currentTarget.style.transform = "scale(1)")
              }
            >
              <h2
                style={{
                  fontSize: "1.8rem",
                  marginBottom: "0.5rem",
                  color: "#00ff99",
                  textShadow: "0 0 5px #00ff99",
                }}
              >
                {skill.title}
              </h2>
              <p
                style={{
                  fontSize: "1rem",
                  color: "rgba(255,255,255,0.8)",
                  lineHeight: "1.7",
                }}
              >
                {skill.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
      <Footer />

      
    </div>
    
    
  );
};

export default About;
