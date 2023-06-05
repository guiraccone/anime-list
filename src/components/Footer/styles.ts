import styled from 'styled-components'

export const FooterContainer = styled.footer`


footer {
    width: 100%;
    display: flex;
    justify-content: space-around;

    background: linear-gradient(360deg, rgba(31, 111, 148, 0.59) 0%, rgba(0, 2, 21, 0) 100%);
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
}

`