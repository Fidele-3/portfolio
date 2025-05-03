// src/components/Navbar.jsx
import React, { useState, useEffect } from "react";
import { useLocation, Link } from "react-router-dom";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);
  const location = useLocation();

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
      if (window.innerWidth >= 768) setMenuOpen(false);
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const navLinks = [
    { name: "Home", href: "/home" },
    { name: "About", href: "/about" },
    { name: "Projects", href: "/projects" },
    { name: "Resume", href: "/resume" },
    { name: "Contact", href: "/contact" },
  ];

  const styles = {
    navWrapper: {
      position: "fixed",
      top: 0,
      left: 0,
      width: "100%",
      zIndex: 1000,
      background: "rgba(0, 0, 0, 0.85)",
      backdropFilter: "blur(10px)",
      color: "#00ffcc",
      boxShadow: "0 2px 20px rgba(0, 255, 180, 0.3)",
      borderBottom: "1px solid rgba(0, 255, 180, 0.2)",
    },
    container: {
      maxWidth: "1200px",
      margin: "0 auto",
      padding: "0.8rem 1.2rem",
      display: "flex",
      alignItems: "center",
      justifyContent: "space-between",
      fontFamily: "'Courier New', Courier, monospace",
      flexWrap: "wrap",
    },
    brandWrapper: {
      display: "flex",
      alignItems: "center",
      flex: "1 1 auto",
      minWidth: "0",
    },
    brand: {
      fontSize: "1.4rem",
      fontWeight: "bold",
      letterSpacing: "2px",
      color: "#00ffc3",
      textShadow: "0 0 10px #00ffc3",
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      lineHeight: "1.2",
    },
    logoImg: {
      width: "35px",
      height: "35px",
      marginRight: "10px",
      borderRadius: "50%",
      border: "2px solid #00ffc3",
      boxShadow: "0 0 5px #00ffc3",
      flexShrink: 0,
    },
    navLinks: {
      display: isMobile ? "none" : "flex",
      gap: "1.5rem",
      listStyle: "none",
      flex: "1 1 auto",
      justifyContent: "flex-end",
      alignItems: "center",
    },
    navLink: (active) => ({
      color: active ? "#00ffcc" : "#88f2e2",
      textDecoration: "none",
      padding: "8px 14px",
      borderRadius: "10px",
      background: active
        ? "rgba(0, 255, 180, 0.2)"
        : "transparent",
      boxShadow: active
        ? "0 0 10px rgba(0, 255, 180, 0.5)"
        : "none",
      fontWeight: active ? "bold" : "normal",
      transition: "all 0.3s ease",
      fontSize: "1rem",
    }),
    hamburger: {
      fontSize: "28px",
      color: "#00ffc3",
      display: isMobile ? "block" : "none",
      background: "transparent",
      border: "none",
      cursor: "pointer",
      marginLeft: "auto",
    },
    mobileMenu: {
      display: menuOpen ? "block" : "none",
      background: "rgba(0, 0, 0, 0.95)",
      borderTop: "1px solid rgba(0, 255, 180, 0.2)",
      width: "100%",
      padding: "1rem",
    },
    mobileLink: {
      display: "block",
      color: "#00ffc3",
      textDecoration: "none",
      padding: "12px 0",
      borderBottom: "1px solid rgba(0,255,180,0.1)",
      fontSize: "1.2rem",
      fontWeight: "bold",
      textAlign: "left",
      transition: "color 0.3s ease",
    },
  };

  return (
    <header style={styles.navWrapper}>
      <div style={styles.container}>
        <div style={styles.brandWrapper}>
          <img
            src="./profile.png"
            alt="Logo"
            style={styles.logoImg}
          />
          <div style={styles.brand}>
            NSANZUMUHIRE <br />
            FIDELE
          </div>
        </div>

        <nav style={styles.navLinks}>
          {navLinks.map((link) => (
            <Link
              key={link.name}
              to={link.href}
              style={styles.navLink(location.pathname === link.href)}
            >
              {link.name}
            </Link>
          ))}
        </nav>

        <button
          style={styles.hamburger}
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          ☰
        </button>
      </div>

      {/* Mobile Dropdown */}
      {isMobile && menuOpen && (
        <div style={styles.mobileMenu}>
          {navLinks.map((link) => (
            <Link
              key={link.name}
              to={link.href}
              onClick={() => setMenuOpen(false)}
              style={{
                ...styles.mobileLink,
                color:
                  location.pathname === link.href
                    ? "#00ffc3"
                    : "#88f2e2",
              }}
            >
              {link.name}
            </Link>
          ))}
        </div>
      )}
    </header>
  );
}
