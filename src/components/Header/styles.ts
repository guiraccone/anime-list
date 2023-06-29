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

    article{
            img{
                width: 10rem;
                height: 3rem;
            }
    }

    ul{
        display: flex;
        justify-content: space-between;
        li{
            list-style-type: none;
        } 
    }

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
    .active{
        color: ${(props) => props.theme['--blue']};
    }

    }

    section{
        position: absolute;
        width: 100%;
        height: 100%;
        top: 4rem;
        background: ${(props) => props.theme['--gray-800']};
        height: 20rem;
        transition: all 1s ease-out;        
        display: flex;
        justify-content: flex-start;

        ul{
            margin-left: 1rem;
            list-style-type: none;
            display: flex;
            flex-direction: column;
            justify-content: space-evenly;
            
            li {
                
                button{
                    background: none;
                    border: none;
                    color: ${(props) => props.theme['--white-500']};
                    display: flex;
                    align-items: center;
                    flex-direction: row;
                    justify-content: flex-start;
                    gap: 1rem;
                    width: 10rem;

                a{
                    text-decoration: none;
                    width: 100%;
                    display: flex;
                    gap: 0.4rem;
                    color: ${(props) => props.theme['--white-500']};
                }
            }
                
            }

        }
    }

    @media screen and (min-width: 640px){
        section{
            display: none;
        }
      
    }

    @media screen and (max-width: 640px){
        section{
            display: none;
        }
       nav ul{
        display: none;
       }

       nav button{
        display: block;
       }
    }
`
