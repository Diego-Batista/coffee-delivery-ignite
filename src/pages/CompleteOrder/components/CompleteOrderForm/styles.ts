import styled from "styled-components";

export const CompleteOrderFormContainer = styled.div`
    display: flex;
    flex-direction: column;
    gap: 0.75rem;
    width: 40rem;
`

export const SectionBaseStyle = styled.div`
    width: 100%;
    background:  ${({ theme }) => theme.colors["base-card"]};
    border-radius: 6px;
    padding: 2.5rem;
`