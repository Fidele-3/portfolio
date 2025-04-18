// src/components/Hero.jsx
import React from "react";

const Hero = () => {
  return (
    <section
      style={{
        minHeight: "100vh",
        width: "100%",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        flexDirection: "column",
        backgroundColor: "rgba(0, 0, 0, 0.2)", // transparent to reveal homepage bg
        color: "#00ffcc",
        padding: "2rem",
        fontFamily: "'Courier New', Courier, monospace",
        animation: "fadeIn 2s ease-in-out"
      }}
    >
      <style>
        {`
          @keyframes fadeIn {
            0% { opacity: 0; transform: translateY(-20px); }
            100% { opacity: 1; transform: translateY(0); }
          }

          .glow-text {
            text-shadow: 0 0 5px #00ffcc, 0 0 10px #00ffcc, 0 0 20px #00ffcc;
          }

          .typewriter {
            overflow: hidden;
            border-right: .15em solid #00ffcc;
            white-space: nowrap;
            animation: typing 3.5s steps(40, end), blink-caret .75s step-end infinite;
          }

          @keyframes typing {
            from { width: 0 }
            to { width: 100% }
          }

          @keyframes blink-caret {
            from, to { border-color: transparent }
            50% { border-color: #00ffcc; }
          }

          .hero-btn {
            background-color: rgba(0,255,204,0.1);
            border: 1px solid #00ffcc;
            color: #00ffcc;
            padding: 0.75rem 2rem;
            margin-top: 2rem;
            font-weight: bold;
            border-radius: 8px;
            cursor: pointer;
            transition: all 0.3s ease-in-out;
            text-decoration: none;
          }

          .hero-btn:hover {
            background-color: rgba(0,255,204,0.2);
            transform: scale(1.05);
            box-shadow: 0 0 8px #00ffcc;
          }

          @media (max-width: 768px) {
            .hero-container {
              padding: 1rem;
            }

            .hero-title {
              font-size: 2rem;
            }

            .hero-subtitle {
              font-size: 1rem;
            }
          }

          @media (min-width: 769px) {
            .hero-title {
              font-size: 3rem;
            }

            .hero-subtitle {
              font-size: 1.5rem;
            }
          }
        `}
      </style>

      <div className="hero-container" style={{ textAlign: "center", maxWidth: "900px" }}>
        <h1 className="hero-title glow-text typewriter">
          Hello, I'm NSANZUMUHIRE FIDELE
        </h1>
        <p className="hero-subtitle glow-text" style={{ marginTop: "1.5rem" }}>
          Full Stack Developer | Cybersecurity Enthusiast | AI Engineer
        </p>
        <a href="/about" className="hero-btn">
          Learn More About Me
        </a>
      </div>
    </section>
  );
};

export default Hero;
