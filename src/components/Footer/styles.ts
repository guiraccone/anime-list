import styled from 'styled-components'

export const FooterContainer = styled.footer`

    width: 100%;
    height: 10rem;
    display: flex;
    justify-content: space-around;
    align-items: center;

    background: linear-gradient(360deg, rgba(1, 12, 54, 0.59) 0%, rgba(0, 2, 21, 0) 100%);
    padding: 1rem 4rem;

    span {
    color: ${(props) => props.theme['--gray-100']};
    }

    select {
    background: none;
    border: none;
    color: ${(props) => props.theme['--white-500']};
    transition: 0.4s;
    width: 200px;

        &:hover, :focus {
        background-color: ${(props) => props.theme['--gray-800']}
        }

        option {
        background: ${(props) => props.theme['--gray-800']}
        }
    }


`