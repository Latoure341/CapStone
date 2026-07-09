import React, { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { SignUpContext } from "../../../context/SignUpContext";

const SignUpConfirm = () => {
  const navigate = useNavigate();
  const [modal, setModal] = useState(false);
  const { setSignUp } = useContext(SignUpContext);

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
      <p style={{ color: "black", fontWeight: "bold" }}>What is your role?</p>
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
            setSignUp(false);
            localStorage.setItem("category", JSON.stringify("user"));
            navigate("/login");
          }}
        >
          User
        </button>
        <button
          onClick={() => {
            setSignUp(false);
            localStorage.setItem("category", JSON.stringify("admin"));
            navigate("/login");
          }}
        >
          Admin
        </button>
      </div>
    </div>
  );
};

export default SignUpConfirm;
