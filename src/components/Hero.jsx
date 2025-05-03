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
        backgroundColor: "rgba(0, 0, 0, 0.2)",
        color: "#00ffcc",
        padding: "2rem",
        fontFamily: "'Courier New', Courier, monospace",
        animation: "fadeIn 2s ease-in-out",
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
            animation: typing 10.5s steps(10000, end), blink-caret .40s step-end infinite;
          }

          @keyframes typing {
            from { width: 0 }
            to { width: 100% }
          }

          @keyframes blink-caret {
            from, to { border-color: transparent }
            50% { border-color: #00ffcc; }
          }

          .hero-container {
            text-align: center;
            width: 100%;
            max-width: 700px;
            padding: 1rem;
            box-sizing: border-box;
          }

          .hero-title {
            margin: 0 auto;
            font-size: 2rem;
          }

          .hero-subtitle {
            margin-top: 1.5rem;
            font-size: 1.25rem;
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
            display: inline-block;
          }

          .hero-btn:hover {
            background-color: rgba(0,255,204,0.2);
            transform: scale(1.05);
            box-shadow: 0 0 8px #00ffcc;
          }

          /* Medium and up (tablet, desktop) */
          @media (min-width: 769px) {
            .hero-title {
              font-size: 1.5rem;
            }

            .hero-subtitle {
              font-size: 1rem;
            }

            .hero-container {
              padding: 2rem;
            }
          }

          /* Small screen (phones) */
          @media (max-width: 768px) {
            .hero-title {
              font-size: 1rem;
            }

            .hero-subtitle {
              font-size: 0.8rem;
            }

            .hero-btn {
              padding: 0.6rem 1.5rem;
              font-size: 0.9rem;
            }

            .hero-container {
              padding: 1.2rem;
            }
          }

          /* Extra small screen (very small phones) */
          @media (max-width: 420px) {
            .hero-title {
              font-size: 0.9rem;
            }

            .hero-subtitle {
              font-size: 0.7rem;
            }

            .hero-btn {
              padding: 0.5rem 1.2rem;
              font-size: 0.8rem;
            }
          }
        `}
      </style>

      <div className="hero-container">
        <h1 className="hero-title glow-text typewriter">
          Hello, I'm NSANZUMUHIRE FIDELE
        </h1>
        <p className="hero-subtitle glow-text">
          Full Stack Developer | Cybersecurity Enthusiast | AI Engineer | Architect
        </p>
        <a href="/about" className="hero-btn">
          Learn More About Me
        </a>
      </div>
    </section>
  );
};

export default Hero;
