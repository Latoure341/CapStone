import styled from "styled-components";
import { media } from "../../styles/theme";

export const CtaContainer = styled.div`
  height: 65vh;
  margin: auto 2rem 2rem 2rem;
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: end;

  background-image: url("https://sm.pcmag.com/t/pcmag_me/news/a/a-big-chan/a-big-change-to-airbnb-fees-starts-today-heres-what-to-expec_apyy.1920.jpg");
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
  color: white;
  text-shadow: 0px 0px 5px rgba(0, 0, 0, 0.5);

  ${media.laptop} {
    height: 60vh;
    margin: auto 1.5rem 1.5rem 1.5rem;
  }

  ${media.tablet} {
    height: 55vh;
    margin: auto 1rem 1rem 1rem;
  }

  ${media.mobile} {
    height: 50vh;
    margin: auto 0.5rem 0.75rem 0.5rem;
  }
`;

export const CTADetails = styled.div`
  margin: 1rem auto;
  padding: 1rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  h4 {
    font-size: 1.5rem;
    padding: 0.5rem 0;
    margin: 0;
    text-align: center;
  }

  ${media.tablet} {
    padding: 0.75rem;

    h4 {
      font-size: 1.25rem;
    }
  }

  ${media.mobile} {
    h4 {
      font-size: 1rem;
    }
  }
`;

export const CtaButton = styled.button`
  background-color: white;
  color: rgb(222, 49, 81);
  border: none;
  padding: 10px 20px;
  border-radius: 5px;
  font-weight: bold;
  cursor: pointer;

  ${media.mobile} {
    padding: 8px 16px;
    font-size: 0.9rem;
  }
`;