import styled from "styled-components";

export const HomeLayout = styled.div`


 .content {
    display: grid;
    grid-template-columns: repeat(5, 1fr);
    gap: 2rem;
}

    header{

        p {
        color: ${(props) => props.theme["--white-500"]};
        font-size: 1.5rem;
        font-weight: 400;
        line-height: 3rem;
        }
    }

    


    section {
    display: flex;
    justify-content: space-between;
    margin-bottom: 15rem;
    }


    .continueLoad {
    place-self: center;
    margin-top: 2rem;
    }

    .continueLoad button {
    color: white;
    width: 8rem;
    border: none;
    cursor: pointer;
    border-radius: 1rem;
    height: 4rem;
    background-color: ${(props) => props.theme["--gray-800"]};
    }

 button:hover{
    background-color: ${(props) => props.theme["--gray-400"]};
    }

@media screen and (max-width: 1280px){
    .content{
        grid-template-columns: 1fr 1fr 1fr 1fr;
        justify-content: center;
    }
}

@media screen and (max-width: 1024px){
    .content{
        grid-template-columns: 1fr 1fr 1fr ;
        justify-content: center;
    }
}

@media screen and (max-width: 800px){
    .content{
        grid-template-columns: 1fr 1fr ;

        section{
            justify-content: center;
        }
    }
}

@media screen and (max-width: 600px){
    .content{
        grid-template-columns: 1fr ;
        section{
            justify-content: center;
        }
    }
}

`