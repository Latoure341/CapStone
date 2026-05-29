import React from "react";
import { CiGlobe } from "react-icons/ci";
import { IoLogoFacebook } from "react-icons/io5";
import { FaTwitter } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FooterContainer, FooterWrapper,
  FooterDiv, CopyrightDiv, 
  SocialsWrapper } from "./Footer.styled.js";

const Footer = () => {
  return (
    <FooterContainer>
      <FooterWrapper>
        <FooterDiv>
          <h2>Support</h2>
          <span>Help Center</span>
          <span>Safety Information</span>
          <span>Cancellation option</span>
          <span>Our Covid-19 Response</span>
          <span>Supporting people with disabilities</span>
          <span>Reporting a neighborhood concern</span>
        </FooterDiv>
        <FooterDiv>
          <h2>Community</h2>
          <span>Airbnb.org: disaster relief housing</span>
          <span>Support: Afghan Refugees</span>
          <span>Cancellation option</span>
          <span>Celebrating diversity and belonging</span>
          <span>Combating discriminatino</span>
        </FooterDiv>
        <FooterDiv>
          <h2>Hosting</h2>
          <span>Try hosting</span>
          <span>AirCover: protection for Hosts</span>
          <span>Explore hosting resources</span>
          <span>Visit our community forum</span>
          <span>How to host responsibly</span>
        </FooterDiv>
        <FooterDiv>
          <h2>About</h2>
          <span>Newsroom</span>
          <span>Learn about new features</span>
          <span>Learn from our founders</span>
          <span>Careers</span>
          <span>Investors</span>
          <span>Airbnb Luxe</span>
        </FooterDiv>
      </FooterWrapper>
      <FooterWrapper copywright={true}>
        <CopyrightDiv>
        <span>© 2024 Airbnb, Inc.</span>
        <span>·</span>
        <span>Privacy</span>
        <span>·</span>
        <span>Terms</span>
        <span>·</span>
        <span>Sitemap</span>
      </CopyrightDiv>
      <SocialsWrapper>
        <span>
          <CiGlobe />
        <p>English (US)</p>
        <p>$</p>
        <p>USD</p>
        </span>
        <span>
          <IoLogoFacebook />
          <FaTwitter/>
          <FaInstagram/>
        </span>
      </SocialsWrapper>
      </FooterWrapper>
    </FooterContainer>
  );
};

export default Footer;
