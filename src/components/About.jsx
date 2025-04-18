// src/components/About.jsx
import React, { useEffect, useState } from "react";

const About = () => {
  const [textVisible, setTextVisible] = useState(false);
  useEffect(() => {
    const timeout = setTimeout(() => {
      setTextVisible(true);
    }, 500);
    return () => clearTimeout(timeout);
  }, []);

  const hackerColor = "rgba(0, 255, 128, 0.9)";
  const glowEffect = `0 0 5px ${hackerColor}, 0 0 10px ${hackerColor}, 0 0 20px ${hackerColor}`;

  const styles = {
    container: {
      width: "100%",
      padding: "4rem 1rem",
      backgroundColor: "transparent",
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      justifyContent: "center",
      fontFamily: "'Courier New', Courier, monospace",
      color: "#ffffff",
    },
    title: {
      fontSize: "2.5rem",
      fontWeight: "bold",
      color: hackerColor,
      textShadow: glowEffect,
      marginBottom: "2rem",
      textAlign: "center",
      opacity: textVisible ? 1 : 0,
      transform: textVisible ? "translateY(0)" : "translateY(-20px)",
      transition: "opacity 1s ease, transform 1s ease",
    },
    descriptionBox: {
      width: "100%",
      maxWidth: "900px",
      textAlign: "center",
      backgroundColor: "rgba(20, 20, 20, 0.5)",
      padding: "2rem",
      borderRadius: "1rem",
      boxShadow: glowEffect,
      marginBottom: "3rem",
    },
    descriptionText: {
      fontSize: "1rem",
      lineHeight: "1.6",
      color: "#dddddd",
      marginBottom: "1.5rem",
    },
    skillsContainer: {
      display: "flex",
      flexWrap: "wrap",
      justifyContent: "center",
      gap: "0.8rem",
    },
    skillBadge: {
      padding: "0.6rem 1.2rem",
      borderRadius: "9999px",
      backgroundColor: "rgba(0, 255, 128, 0.1)",
      color: hackerColor,
      fontWeight: "bold",
      fontSize: "0.95rem",
      boxShadow: glowEffect,
      cursor: "default",
      transition: "transform 0.3s ease",
    },
    button: {
      marginTop: "2rem",
      padding: "1rem 2.5rem",
      backgroundColor: "rgba(0, 255, 128, 0.2)",
      color: hackerColor,
      border: "2px solid rgba(0, 255, 128, 0.7)",
      fontWeight: "bold",
      fontSize: "1.1rem",
      borderRadius: "0.75rem",
      cursor: "pointer",
      textShadow: glowEffect,
      boxShadow: glowEffect,
      transition: "all 0.3s ease",
    },
    responsiveAdjustments: () => {
      const isMobile = window.innerWidth < 640;
      return {
        title: {
          fontSize: isMobile ? "2rem" : "3rem",
        },
        descriptionText: {
          fontSize: isMobile ? "0.95rem" : "1.2rem",
        },
        skillBadge: {
          fontSize: isMobile ? "0.85rem" : "1rem",
          padding: isMobile ? "0.5rem 1rem" : "0.7rem 1.5rem",
        },
        button: {
          fontSize: isMobile ? "1rem" : "1.1rem",
          padding: isMobile ? "0.9rem 2rem" : "1rem 2.5rem",
        },
        box: {
          padding: isMobile ? "1.5rem" : "2rem",
        },
      };
    },
  };

  const skills = [ 
    "Cybersecurity",
    "Game Programming",
    "AI & Machine Learning",
    "Full-Stack Development",
    "DevOps & Cloud Engineering",
    "System Design",
    "REST APIs",
    "Secure Software Development",
  ];

  const responsive = styles.responsiveAdjustments();

  return (
    <section id="about" style={styles.container}>
      <h2 style={{ ...styles.title, ...responsive.title }}>About Me</h2>
      <div style={{ ...styles.descriptionBox, ...responsive.box }}>
        <p style={{ ...styles.descriptionText, ...responsive.descriptionText }}>
          I'm a passionate and versatile software engineer with experience in
          multiple domains including full-stack development, cloud engineering,
          machine learning, and game programming. My goal is to develop secure,
          scalable, and elegant solutions that solve real-world problems using a
          hacker mindset.
        </p>
        <div style={styles.skillsContainer}>
          {skills.map((skill, index) => (
            <div
              key={index}
              style={{ ...styles.skillBadge, ...responsive.skillBadge }}
            >
              {skill}
            </div>
          ))}
        </div>
        <a href="/about">
          <button
            style={{ ...styles.button, ...responsive.button }}
            onMouseEnter={(e) =>
              (e.currentTarget.style.transform = "scale(1.1)")
            }
            onMouseLeave={(e) =>
              (e.currentTarget.style.transform = "scale(1)")
            }
          >
            View More
          </button>
        </a>
      </div>
    </section>
  );
};

export default About;
