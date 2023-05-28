import styled from 'styled-components'

export const HeaderContainer = styled.header`
nav{
    background: ${(props) => props.theme['--gray-900']};
    color: ${(props) => props.theme['--white-500']};
    height: 66px;
    display: grid;
    grid-template-columns: 1fr 1fr;
    align-content: center;
    position: fixed;
    z-index: 100;

    button {
    background: none;
    color: ${(props) => props.theme['--white-500']};
    font-size: 1.1rem;
    height: 66px;
    width: 118px;
    border: none;
    transition: 0.3s;

    display: flex;
    align-items: center;
    justify-content: center;

    &:hover {
        background: ${(props) => props.theme['--gray-800']};
        cursor: pointer;

        }
    }
        
    .navSideLeft {
    width: 807px;
    display: flex;
    padding: 1rem;
    justify-content: flex-start;
    }

    .navSideRight {
    width: 549px;
    display: flex;
    justify-content: flex-end;
    padding: 1rem;
    }

    .profile {
    object-fit: cover;
    border-radius: 50%;
        }
    }
`
