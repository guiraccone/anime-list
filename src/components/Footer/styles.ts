import styled from 'styled-components'

export const FooterContainer = styled.footer`

div {
    width: 100%;
    height: 401px;
    background: linear-gradient(360deg, rgba(31, 111, 148, 0.59) 0%, rgba(0, 2, 21, 0) 100%);
    margin-top: 10rem;
    display: flex;
    flex-direction: column;
}


div hr {
    width: 100%;
}

footer {
    width: 100%;
    display: flex;
    height: 100%;
    align-items: flex-end;
    padding: 1rem 4rem;
}

footer span {
    color: ${(props) => props.theme['--gray-100']};
}

footer select {
    background: none;
    border: none;
    color: ${(props) => props.theme['--white-500']};
    cursor: pointer;
    transition: 0.4s;
    width: 200px;
}

footer select:hover, :focus {
    background-color: ${(props) => props.theme['--gray-800']}
}

 footer select option {
    background: ${(props) => props.theme['--gray-800']}
}


footer select,
option:focus {
    border: ${(props) => props.theme['--white-500']};
}
`