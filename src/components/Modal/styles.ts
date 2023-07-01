import styled from "styled-components";

export const ModalLayout = styled.div`
    position: fixed;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    z-index: 100;
    padding: 3rem;
    background: rgba(0,0,0 ,0.8);
    overflow-y: auto;
    transition: 1ms;


    display: flex;
    justify-content: space-around;
    flex-wrap: wrap;

    div, section{
        display: flex;
        flex-direction: column;
        width: 50%;
        img{
            width: 60%;
            object-fit: contain;
        }
        button{
            width: 30%;
            background: none;
            color: ${(props) => props.theme["--white-500"]};
            place-self: center;
            border: 0.1rem solid ${(props) => props.theme["--white-300"]};
            cursor: pointer;
            transition: 0.2s;
            border-radius: 0.5rem;

            &:hover{
                background: ${(props) => props.theme["--blue-900"]};
            }
        }
    }
    section{
        gap: 1rem;
    }

    @media screen and (max-width: 640px){
        flex-direction: column;
        flex-wrap: nowrap;
        justify-content: flex-start;
        align-items: center;
       section{
        display: flex;
        justify-content: center;
        align-items: center;
        width: 70%;

        span{
                display: flex;
                justify-content: center;
            }
       }
       div{
        img{
            width: 10rem;
            object-fit: contain;
        }
       }
    }
    

    

`