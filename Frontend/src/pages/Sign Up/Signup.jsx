

import React, { useContext} from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import Logo from "../../assets/airbnb.svg?react";
import { IoIosMenu } from "react-icons/io";
import { MdAccountCircle } from "react-icons/md";
import { CiGlobe, CiSearch } from "react-icons/ci";
import { LoginContainer, ParagraphWrapper } from "../Login/Login.styled.js";
import { SignUpContainer } from "./Signup.styled.js";
import {
  NavContainer,
  NavSecondContainer,
  MenuAccount,
  LogoWrapper,
} from "../../components/NavBar/NavBar.styled.js";
import { useState } from "react";
import SignUpConfirm from "../../components/Modals/SignUpConfirm/SignUpConfirm.jsx";
import { SignUpContext } from "../../context/SignUpContext.jsx";

const apiBaseUrl = import.meta.env.VITE_API_BASE_URL;

const Signup = () => {
  const navigate = useNavigate();
  const [name, setName] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [modal, setModal] = useState(false);
  const { signUp, setSignUp } = useContext(SignUpContext);

  const handleSignup = (e) => {
    e.preventDefault();
    // Handle login logic here
    // After successful login, navigate to the listing page
    axios
      .post(`${apiBaseUrl}/api/user/register`, { name, email, password, confirmPassword, category: JSON.parse(localStorage.getItem("category")) })
      .then((response) => {
        // Handle successful login
  
        
      })
      .catch((error) => {
        // Handle login error
        console.error("Signup error:", error);
      });
  };

  return (
    <>
      <NavContainer>
        <LogoWrapper>
          <Logo className="logo" />
        </LogoWrapper>

        <NavSecondContainer>
          <p onClick={() => console.log("Become a host clicked")}>
            Become a host
          </p>
          <CiGlobe />
          <MenuAccount>
            <IoIosMenu />
            <MdAccountCircle />
          </MenuAccount>
        </NavSecondContainer>
      </NavContainer>

      <SignUpContainer>
        <h1>Sign Up</h1>
        <form>
          <span>
            <label htmlFor="email">Full Name:</label>
            <input
              type="text"
              id="name"
              name="username"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
            />
          </span>
          <span>
            <label htmlFor="email">Email:</label>
            <input
              type="email"
              id="email"
              name="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </span>
          <span>
            <label htmlFor="password">Password:</label>
            <input
              type="password"
              id="password"
              name="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </span>
          <span>
            <label htmlFor="password">Confirm Password:</label>
            <input
              type="password"
              id="Confirmpassword"
              name="Confirmpassword"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              required
            />
          </span>
          <p>Forgot Password ?</p>
          <button
            type="submit"
            onClick={(e) => { 
              setSignUp(true);
              handleSignup(e);
              
            }}
          >
            Create an account
          </button>
          <ParagraphWrapper>
            You have an account already?{" "}
            <span className="signup" onClick={() => navigate("/login")}>
              Log In
            </span>
          </ParagraphWrapper>
        </form>
        { signUp && (
          <SignUpConfirm />
        )}
      </SignUpContainer>
    </>
  );
};

export default Signup;
