import styled from "styled-components";

export const LayoutContainer = styled.div`
    background: ${(props) => props.theme["--black"]};
    color: ${(props) => props.theme["--white-500"]};
    overflow-y: initial !important

`

export const OutletContainer = styled.div`
    padding: 4rem 8rem;
`