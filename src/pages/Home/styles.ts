import styled from "styled-components";

export const HomeLayout = styled.div`

    

    header{
        display: flex;
        justify-content: center;
        align-items: center;
        p {
        color: ${(props) => props.theme["--white-500"]};
        font-size: 1.5rem;
        font-weight: 400;
        line-height: 3rem;
        }
    }

    > div{
        display: grid;
        grid-template-columns: repeat(5, 1fr);
        gap: 3rem;
    }

    main {
        display: grid;
        grid-template-columns: repeat(5, 1fr);
        gap: 2rem;

        section {
        display: flex;
        justify-content: center;
        margin-bottom: 1rem;
        }
    }

     > section{
        display: flex;
        justify-content: center;
        margin-top: 3rem;

        button{
        color: ${(props) => props.theme["--white-500"]};
        width: 6rem;
        display: flex;
        justify-content: center;
        align-items: center;
        gap: 0.2rem;
        height: 3rem;
        border: none;
        cursor: pointer;
        background-color: ${(props) => props.theme["--gray-800"]};

        &:hover{
            background-color: ${(props) => props.theme["--gray-400"]}
        }
    }

    .hidden{
        display: none;
    }
}
    

@media screen and (min-width: 1680px){
    main{
        gap: 3rem;

        section{
            justify-content: space-evenly;
        }
    }
}


@media screen and (max-width: 1280px){
    main{
        grid-template-columns: 1fr 1fr 1fr 1fr;
        justify-content: center;
    }
}

@media screen and (max-width: 1024px){
    main{
        grid-template-columns: 1fr 1fr 1fr ;
        justify-content: center;
    }
}

@media screen and (max-width: 800px){
    main{
        grid-template-columns: 1fr 1fr ;
        section{
            justify-content: center;
        }
    }
}

@media screen and (max-width: 640px){
    main{
        grid-template-columns: 1fr ;
        section{
            justify-content: center;
        }
    }
}

`