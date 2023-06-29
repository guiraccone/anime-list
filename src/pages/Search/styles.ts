import styled from "styled-components";

export const SearchContainer = styled.form`

    display: flex;
    justify-content: center;
    margin-top: 6rem;

    input{
        width: 100%;
        height: 3rem;
        padding: 1rem;
        font-size: 1rem;
        border-radius: 1rem 0 0 1rem ;
        border: none;
        font-family: 'Jost';
        font-weight: 500;

        &:focus{
            border: none;
        }
    }

    button{
        display: flex;
        justify-content: center;
        align-items: center;
        border-radius: 0 1rem 1rem 0 ;
        width: 7rem;
        height: 3rem;
        background: ${(props) => props.theme["--gray-900"]};
        border: none;
        color: ${(props) => props.theme["--white-500"]};
        cursor: pointer;
        &:hover{
            background: ${(props) => props.theme["--gray-400"]};
            span{
                color: ${(props) => props.theme["--gray-100"]};
            }
        }

    }
`

export const AnimeContainer = styled.section`
    display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr 1fr;
`
