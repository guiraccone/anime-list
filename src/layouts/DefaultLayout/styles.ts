import styled from "styled-components";

export const LayoutContainer = styled.div`
    background: ${(props) => props.theme["--black"]};
    color: ${(props) => props.theme["--white-500"]};
    overflow-y: initial !important;

    @media (min-width: 1601px) {
        font-size: 2em;
    }


`

export const OutletContainer = styled.div`
  padding: 4rem 8rem;

  @media (max-width: 768px) {
    padding: 3rem 6rem;
  }

  @media (max-width: 480px) {
    padding: 2rem 4rem;
  }

  @media (max-width: 320px) {
    padding: 1rem 2rem;
  }
`;