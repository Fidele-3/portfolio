// src/pages/Contact.jsx
import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Contact from "../components/Contact";

const ContactPage = () => {
  return (
    <div style={{
      width: "100vw",
      minHeight: "100vh",
      backgroundImage: `url('./Contact.jpg')`,
      backgroundSize: "cover",
      backgroundPosition: "center",
      backgroundAttachment: "fixed",
      backgroundColor: "#000000",
      color: "#00ffcc",
      fontFamily: "monospace",
      display: "flex",
      flexDirection: "column",
      justifyContent: "space-between",
    }}>
      <Navbar />
      
      <main style={{
        flex: 1,
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        padding: "60px 10px",
      }}>
        <Contact />
      </main>

      <Footer />

      <style>
        {`
          body {
            margin: 0;
            padding: 0;
            box-sizing: border-box;
            overflow-x: hidden;
          }

          a:hover {
            transform: scale(1.05);
            transition: transform 0.2s ease-in-out;
            filter: drop-shadow(0 0 6px #00ffcc);
          }

          ::selection {
            background-color: #00ffcc;
            color: #000000;
          }

          @media only screen and (max-width: 768px) {
            main {
              padding: 40px 15px;
            }
          }
        `}
      </style>
    </div>
  );
};

export default ContactPage;
