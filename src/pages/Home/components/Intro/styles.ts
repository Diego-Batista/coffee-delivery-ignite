import styled from "styled-components";
import IntroBackgroundImg from "../../../../assets/intro-background.png"
import { rgba } from "polished";
import { TitleText } from "../../../../components/Typograph";

export const IntroContainer = styled.section`
  width: 100%;
  height: 34rem;
  background: ${({ theme }) => `url(${IntroBackgroundImg}) no-repeat center,
      linear-gradient(
        0deg,
        ${theme.colors["base-white"]} 0%,
        ${rgba(theme.colors["base-background"], 0.2)} 50%,
        ${theme.colors["base-background"]} 100%
      )`};
  background-size: cover;

  display: flex;
  align-items: center;
  justify-content: center;

  @media (max-width: 768px) {
    padding: 1rem;
    margin-top: 3.5rem
  }

  
`

export const IntroContent = styled.div`
    display: flex;

    align-items: center;
    justify-content: space-between;
    gap: 3.5rem;

    @media (max-width: 768px) {
        flex-direction: column-reverse;

        > img {
          width: 20rem;
        }

        > div {
          > section {
            h3 {
              font-size: 1rem;
            }
          }
        }
    }

    
    
`

export const IntroTitle = styled(TitleText)`
    margin-bottom: 1rem;

    @media (max-width: 768px) {
          font-size: 2rem;  
          line-height: 2.3rem;
    }
`

export const BenefitsContainer = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: 1fr 1fr;
  row-gap: 1.5rem;
  margin-top: 4.125rem;

  @media (max-width: 768px) {
    display: block;
    margin-top: 2rem;
  }
  
`