import styled from "styled-components";

export const LayoutContainer = styled.div`
    max-width: 85rem;
    display: grid;
    align-items: flex-start;

    grid-template-columns: 1fr;
    gap: 2rem;
    background: ${(props) => props.theme["--black"]};
    color: ${(props) => props.theme["--white-500"]};
`

export const OutletContainer = styled.div`
    padding: 4rem 8rem;
`