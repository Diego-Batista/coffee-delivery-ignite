import styled from "styled-components";

interface ContainerProps {
    iconBg: string
}

export const Container = styled.div<ContainerProps>`
  display: flex;
  align-items: center;
  

  > div {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 2rem;
    height: 2rem;
    background: ${({ iconBg }) => iconBg};
    border-radius: 999px;

    > svg {
        color: #fff
    }
  }

  > p {
    margin-left: 0.75rem
  }
`