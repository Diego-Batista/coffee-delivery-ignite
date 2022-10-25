import styled from "styled-components";

export const CompleteOrderContainer = styled.form`
  margin-top: 2.5rem;
  display: flex;
  justify-content: space-between;
  gap: 2rem;

  @media (max-width: 768px) {
    flex-direction: column;
    padding-left: 1rem;
    padding-right: 1rem;
  }
`

export const SectionBaseStyle = styled.div`
    width: 100%;
    background:  ${({ theme }) => theme.colors["base-card"]};
    border-radius: 6px;
    padding: 2.5rem;

    @media (max-width: 768px) {
      padding: 1.5rem;
    }
`