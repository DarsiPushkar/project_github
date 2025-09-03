import React from "react";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const navigate = useNavigate();

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh",
        backgroundColor: "#f0f2f5",
        fontFamily: "Arial, sans-serif",
      }}
    >
      <h1 style={{ marginBottom: "40px", color: "#333" }}>Welcome</h1>
      <div style={{ display: "flex", gap: "20px" }}>
        <button
          onClick={() => navigate("/login")}
          style={{
            padding: "12px 25px",
            fontSize: "16px",
            fontWeight: "bold",
            borderRadius: "8px",
            border: "none",
            backgroundColor: "#4CAF50",
            color: "white",
            cursor: "pointer",
            transition: "all 0.3s ease",
          }}
          onMouseOver={(e) => (e.target.style.backgroundColor = "#45a049")}
          onMouseOut={(e) => (e.target.style.backgroundColor = "#4CAF50")}
        >
          Login
        </button>

        <button
          onClick={() => navigate("/register")}
          style={{
            padding: "12px 25px",
            fontSize: "16px",
            fontWeight: "bold",
            borderRadius: "8px",
            border: "none",
            backgroundColor: "#008CBA",
            color: "white",
            cursor: "pointer",
            transition: "all 0.3s ease",
          }}
          onMouseOver={(e) => (e.target.style.backgroundColor = "#007bb5")}
          onMouseOut={(e) => (e.target.style.backgroundColor = "#008CBA")}
        >
          Signup
        </button>
      </div>
    </div>
  );
};

export default Home;
