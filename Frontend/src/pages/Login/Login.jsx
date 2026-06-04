import React from "react";
import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { LoginContainer } from "./Login.styled.js";
import Logo from "../../assets/airbnb.svg?react";
import { IoIosMenu } from "react-icons/io";
import { MdAccountCircle } from "react-icons/md";
import { CiGlobe, CiSearch } from "react-icons/ci";
import {
  NavContainer,
  NavSecondContainer,
  MenuAccount,
  LogoWrapper
} from "../../components/NavBar/NavBar.styled.js";

const Login = () => {
    const navigate = useNavigate();
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const handleLogin = (e) => {
        e.preventDefault();
        // Handle login logic here
        // After successful login, navigate to the listing page
        axios.post("http://localhost:5000/api/user/login", { email, password })
            .then((response) => {
                // Handle successful login
                navigate("/listing");
            })
            .catch((error) => {
                // Handle login error
                console.error("Login error:", error);
            });
    };

  return (
    <>
      <NavContainer>
        <LogoWrapper>
          <Logo className="logo" />
        </LogoWrapper>-

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

      <LoginContainer>
        <h1>Login</h1>
        <form>
            <span>
                <label htmlFor="email">Email:</label>
                <input type="email" id="email" name="email" value={email} onChange={(e) => setEmail(e.target.value)} required />
            </span>
            <span>
                <label htmlFor="password">Password:</label>
                <input type="password" id="password" name="password" value={password} onChange={(e) => setPassword(e.target.value)} required />
            </span>
            <p>Forgot Password ?</p>
            <button type="submit" onClick={(e) => {handleLogin(e)}}>Login</button>
        </form>
      </LoginContainer>
    </>
  );
};

export default Login;
