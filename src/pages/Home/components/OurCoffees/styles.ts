import styled from "styled-components";

export const OurCoffeesContainer = styled.div`
    width: 100%;
    margin-top: 32px;

    @media (max-width: 768px) {
        padding: 1rem;
        
        > h1 {
            margin-top: 1rem;
        }
    }
`

export const CoffeeList = styled.div`
    width: 100%;
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    column-gap: 2rem;
    row-gap: 2.5rem;
    margin-top: 3.5rem;

    @media (max-width: 768px) {
        width: 100%;
        grid-column-start: 1;
        display: block;
        grid-template-columns: repeat(1, 1fr);
        padding-left: 1rem;
        padding-right: 1rem;
  }
`