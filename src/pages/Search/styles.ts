import styled from "styled-components";

export const PageContainer = styled.div`

h1{
    margin-top: 1rem;
}

main{
    > div{
        margin-top: 100%;
    }
}

form{
    display: flex;
    justify-content: center;
    margin-top: 3rem;

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
}



`
export const AnimeContainer = styled.section`
  display: grid;
  grid-template-columns: repeat(5, 1fr);

  @media screen and (max-width: 800px) {
    grid-template-columns: 1fr 1fr;
  }

  @media screen and (max-width: 600px) {
    grid-template-columns: 1fr;
  }

  @media screen and (min-width: 800px) {
    grid-template-columns: 1fr 1fr 1fr;
  }

  @media screen and (min-width: 1024px) {
    grid-template-columns: repeat(4, 1fr);
  }

  @media screen and (min-width: 1280px) {
    grid-template-columns: repeat(5, 1fr);
  }

  @media screen and (min-width: 1600px) {
    grid-template-columns: repeat(5, 1fr);
  }
    
`
