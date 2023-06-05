import styled from "styled-components";

export const HomeLayout = styled.div`

  
 .content {
    display: flex;
    flex-direction: column;
    gap: 15rem;
}

 h1 {
    color: var(--white-500);
    font-weight: 400;
    padding: 1rem 0;
}

 hr {
    border-radius: 3px;
}

 section {
    display: flex;
    justify-content: space-between;
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

@media screen and (max-width: 768px){
    section{
        flex-direction: column;
        gap: 10rem;
    }
}

`