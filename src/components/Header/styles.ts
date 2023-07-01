import styled from 'styled-components'

export const HeaderContainer = styled.header`
nav{
    background: ${(props) => props.theme['--blue-900']};
    color: ${(props) => props.theme['--white-500']};
    height: 4rem;
    width: 100%;
    display: flex;
    justify-content: space-around;
    flex-wrap: wrap;
    flex-direction: row;    
    position: fixed;
    z-index: 100;
    overflow: hidden;
    
    ul{
        display: flex;
        justify-content: space-between;
        gap: 1rem;
        li{
            list-style-type: none;
            img{
                width: 8rem;
                height: 3rem;
            }
        } 
    }

    a, button {
    background: none;
    color: ${(props) => props.theme['--white-500']};
    font-size: 1.1rem;
    height: 100%;
    width: 90%;
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
    }

`
