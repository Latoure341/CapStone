import React from "react";
import { FooterContainer, FooterWrapper, FooterDiv, CopyrightDiv } from "./Footer.styled.js";

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
      </FooterWrapper>
      <CopyrightDiv>
        <span>© 2024 Airbnb, Inc.</span>
        <span>·</span>
        <span>Privacy</span>
        <span>·</span>
        <span>Terms</span>
        <span>·</span>
        <span>Sitemap</span>
      </CopyrightDiv>
    </FooterContainer>
  );
};

export default Footer;
