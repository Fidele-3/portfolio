// src/components/Footer.jsx
import React from "react";

const Footer = () => {
  return (
    <footer style={{
      width: "98%",
      backgroundColor: "rgba(0, 0, 0, 0.7)",
      padding: "40px 20px",
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      color: "#00ffcc",
      fontFamily: "monospace",
      fontSize: "16px",
      boxShadow: "0 -5px 15px rgba(0,255,204,0.1)",
    }}>
      <div style={{
        width: "100%",
        maxWidth: "1000px",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        flexWrap: "wrap",
        textAlign: "center",
        marginBottom: "30px",
      }}>
        <div style={{ flex: "1", minWidth: "250px", marginBottom: "20px" }}>
          <h3 style={{
            fontSize: "20px",
            textShadow: "0 0 10px #00ffcc",
            marginBottom: "10px",
          }}>📍 Address</h3>
          <p style={{ color: "#ccc" }}>
            Kicukiro, Kigali City <br />
            Rwanda
          </p>
        </div>

        <div style={{ flex: "1", minWidth: "250px", marginBottom: "20px" }}>
          <h3 style={{
            fontSize: "20px",
            textShadow: "0 0 10px #00ffcc",
            marginBottom: "10px",
          }}>📧 Contact Me</h3>
          <div style={{
            display: "flex",
            justifyContent: "center",
            gap: "15px",
            flexWrap: "wrap"
          }}>
            <a
              href="https://wa.me/250786161794"
              target="_blank"
              rel="noopener noreferrer"
              style={{
                padding: "10px 20px",
                backgroundColor: "#25D366",
                color: "#000",
                borderRadius: "10px",
                fontWeight: "bold",
                textDecoration: "none",
                boxShadow: "0 0 10px #25D366",
                transition: "transform 0.3s",
              }}
              onMouseOver={(e) => e.currentTarget.style.transform = "scale(1.05)"}
              onMouseOut={(e) => e.currentTarget.style.transform = "scale(1)"}
            >
              💬 WhatsApp
            </a>

            <a
              href="mailto:fidelensanzumuhire9@gmail.com"
              style={{
                padding: "10px 20px",
                backgroundColor: "#ff0066",
                color: "#fff",
                borderRadius: "10px",
                fontWeight: "bold",
                textDecoration: "none",
                boxShadow: "0 0 10px #ff0066",
                transition: "transform 0.3s",
              }}
              onMouseOver={(e) => e.currentTarget.style.transform = "scale(1.05)"}
              onMouseOut={(e) => e.currentTarget.style.transform = "scale(1)"}
            >
              ✉️ Email
            </a>
          </div>
        </div>
      </div>

      <div style={{
        borderTop: "1px solid rgba(0,255,204,0.2)",
        paddingTop: "20px",
        textAlign: "center",
        width: "100%",
        maxWidth: "1000px"
      }}>
        <p style={{ fontSize: "14px", color: "#aaa" }}>
          &copy; {new Date().getFullYear()} NSANZUMUHIRE FIDELE. All Rights Reserved.
        </p>
      </div>

      <style>{`
        @media only screen and (max-width: 768px) {
          footer {
            font-size: 14px;
          }
          footer h3 {
            font-size: 18px;
          }
        }
      `}</style>
    </footer>
  );
};

export default Footer;
