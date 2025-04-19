// src/components/Contact.jsx
import React, { useState } from "react";

import emailjs from "@emailjs/browser";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const handleSubmit = (e) => {
    e.preventDefault();

    emailjs
      .send(
        "service_vlrszop",               // Your Service ID
        "template_54mobbl",              // Your Template ID
        {
          from_name: formData.name,
          from_email: formData.email,
          message: formData.message,
        },
        "ezUmBoqb0L48oeJ2Z"           // Replace with your Public Key (found in EmailJS dashboard)
      )
      .then(
        () => {
          alert("Message sent successfully!");
          setFormData({ name: "", email: "", message: "" });
        },
        (error) => {
          console.error("EmailJS error:", error);
          alert("Failed to send message, please try again.");
        }
      );
  };
  return (
    <div style={{
      width: "100%",
      padding: "50px 10px",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      flexDirection: "column",
      backgroundColor: "rgba(0, 0, 0, 0.6)",
      color: "#00ffcc",
      fontFamily: "monospace",
    }}>
      <h2 style={{
        fontSize: "32px",
        marginBottom: "30px",
        textShadow: "0 0 10px #00ffcc",
        animation: "fadeDown 1.2s ease-out"
      }}>
        📞 Get in Touch
      </h2>

      <div style={{
        width: "100%",
        maxWidth: "600px",
        background: "rgba(0,0,0,0.3)",
        padding: "30px",
        borderRadius: "20px",
        boxShadow: "0 0 15px rgba(0,255,200,0.2)",
        animation: "fadeUp 1s ease-in",
      }}>
        <form onSubmit={handleSubmit} style={{ display: "flex", flexDirection: "column" }}>
          <label htmlFor="name" style={{ marginBottom: "5px" }}>Your Name</label>
          <input
            type="text"
            name="name"
            required
            onChange={handleChange}
            value={formData.name}
            style={{
              padding: "12px",
              marginBottom: "20px",
              backgroundColor: "transparent",
              border: "1px solid #00ffcc",
              color: "#fff",
              borderRadius: "8px",
            }}
          />

          <label htmlFor="email" style={{ marginBottom: "5px" }}>Email</label>
          <input
            type="email"
            name="email"
            required
            onChange={handleChange}
            value={formData.email}
            style={{
              padding: "12px",
              marginBottom: "20px",
              backgroundColor: "transparent",
              border: "1px solid #00ffcc",
              color: "#fff",
              borderRadius: "8px",
            }}
          />

          <label htmlFor="message" style={{ marginBottom: "5px" }}>Message</label>
          <textarea
            name="message"
            rows="5"
            required
            onChange={handleChange}
            value={formData.message}
            style={{
              padding: "12px",
              marginBottom: "20px",
              backgroundColor: "transparent",
              border: "1px solid #00ffcc",
              color: "#fff",
              borderRadius: "8px",
              resize: "none",
            }}
          />

          <button type="submit" style={{
            padding: "12px 25px",
            borderRadius: "10px",
            backgroundColor: "#00ffcc",
            color: "#000",
            border: "none",
            cursor: "pointer",
            fontWeight: "bold",
            transition: "all 0.3s ease-in-out",
            boxShadow: "0 0 10px #00ffcc",
          }}>
            Send Message
          </button>
        </form>

        <div style={{
          marginTop: "30px",
          display: "flex",
          justifyContent: "space-around",
          flexWrap: "wrap",
          gap: "15px"
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
            }}
          >
            💬 WhatsApp
          </a>

          <a
            href="mailto:fidelensanzumuhire9@gmail.com"
            //target="_blank"
            //rel="noopener noreferrer"
            style={{
              padding: "10px 20px",
              backgroundColor: "#ff0066",
              color: "#fff",
              borderRadius: "10px",
              fontWeight: "bold",
              textDecoration: "none",
              boxShadow: "0 0 10px #ff0066",
              display: "inline-block", 
              cursor: "pointer",        
            }}
            
          >
            ✉️ Email Me
          </a>

        </div> {/* Closing the missing div */}
        <div style={{ marginTop: "40px", textAlign: "center" }}>
          <a
            //href="/contact"
            style={{
              marginTop: "20px",
              display: "inline-block",
              backgroundColor: "transparent",
              color: "#00ffcc",
              border: "2px solid #00ffcc",
              borderRadius: "10px",
              padding: "10px 25px",
              fontWeight: "bold",
              textDecoration: "none",
              transition: "0.3s",
            }}
          >
            Thanks to get in touch
          </a>
        </div>
      </div>

      <style>
        {`
          @keyframes fadeDown {
            from { opacity: 0; transform: translateY(-40px); }
            to { opacity: 1; transform: translateY(0); }
          }

          @keyframes fadeUp {
            from { opacity: 0; transform: translateY(40px); }
            to { opacity: 1; transform: translateY(0); }
          }

          @media only screen and (max-width: 768px) {
            h2 {
              font-size: 24px !important;
            }
          }
        `}
      </style>
    </div>
  );
};

export default Contact;
