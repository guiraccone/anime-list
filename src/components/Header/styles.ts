import styled from 'styled-components'

export const HeaderContainer = styled.header`
nav{
    background: ${(props) => props.theme['--gray-900']};
    color: ${(props) => props.theme['--white-500']};
    height: 4rem;
    width: 100%;
    display: flex;
    justify-content: space-around;
    flex-wrap: wrap;
    flex-direction: row;    
    position: fixed;
    z-index: 100;

    a, button {
    background: none;
    color: ${(props) => props.theme['--white-500']};
    font-size: 1.1rem;
    height: 66px;
    width: 118px;
    border: none;
    transition: 0.3s;
    text-decoration: none;

    display: flex;
    align-items: center;
    justify-content: center;

    &:hover {
        color: ${(props) => props.theme['--gray-100']};
        cursor: pointer;
        }
    }

    > button{
        display: none;
    }

    ul{
        display: flex;
        justify-content: space-between;
        li{
            list-style-type: none;
        } 
    }
    .active{
        color: ${(props) => props.theme['--blue']};
    }

    }

    @media screen and (max-width: 768px){
       nav ul{
        display: none;
       }

       nav button{
        display: block;
       }
    }
`
