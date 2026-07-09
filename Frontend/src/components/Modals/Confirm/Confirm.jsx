import React, { useState } from "react";
import { useNavigate } from "react-router-dom";


const Confirm = () => {
  const [modal, setModal] = useState(false);
    const navigate = useNavigate();

  return (
    <div
      style={{
        textAlign: "center",
        marginTop: "20px",
        backgroundColor: "white",
        position: "absolute",
        top: "35%",
        left: "30%",
        zIndex: 1000,
        padding: "40px",
        borderRadius: "5px",
        boxShadow: "0 14px 50px rgba(0, 0, 0, 0.3)",
      }}
    >
      <p style={{ color: "green" }}>Logged in successfully!</p>
      <div
        style={{
          display: "flex",
          gap: "10px",
          justifyContent: "center",
          marginTop: "20px",
        }}
      >
        <button
          onClick={() => {
            setModal(false);
            navigate("/");
          }}
        >
          Home
        </button>
        <button
          onClick={() => {
            if (JSON.parse(localStorage.getItem("category")) === "admin") {
              navigate("/admin");
            }
            
          }}
        >
          Admin Dashboard
        </button>
      </div>
      <button
      style={{
        marginTop: "20px",
        backgroundColor: "#007bff",
        color: "white",
        border: "none",
        padding: "10px 20px",
        borderRadius: "5px",
        cursor: "pointer",
      }}
          onClick={() => {
            setModal(false);
            navigate("/listing");
          }}
        >
          Listings Dashboard
        </button>
    </div>
  );
};

export default Confirm;
