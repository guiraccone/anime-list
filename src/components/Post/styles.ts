import styled from "styled-components";

export const PostLayout = styled.div`
    margin-top: 1rem;
    color: ${(props) => props.theme["--white-500"]};
    display: flex;
    width: 10rem;
    flex-direction: column;

    .imageWrapper {
        width: 10rem;
        height: 15rem; 
        position: relative;

        img {
        width: 100%;
        height: 100%;
        object-fit: fill;
        border-radius: 0.4rem 0.4rem 0 0;
    }
    }

    article {
        position: absolute;
        bottom: 0;
        width: 100%;
        height: 100%;
        background-color: rgba(0, 0, 0, 0.5);         
        display: none;
        flex-direction: column;
        justify-content: center;
        align-items: center;

        span,p, i, legend{
            text-align: center;
            font-size: clamp(0.9rem, 2vw, 1.2rem);
            color: ${(props) => props.theme["--white-500"]};
        }

        legend{
            color: ${(props) => props.theme["--white-300"]};
        }
    }

    .buttonWrapper {
        display: flex;
        button {
            display: flex;
            align-items: center;
            justify-content: center;
            gap: 0.2rem;
            width: 50%;
            background: ${(props) => props.theme["--gray-800"]};
            color: ${(props) => props.theme["--white-300"]};
            border: none;
            cursor: pointer;
            &:hover {
                background: ${(props) => props.theme["--gray-400"]};
            }
        }
    }

    legend {
        color: ${(props) => props.theme["--gray-100"]};
    }

    legend,
    span {
        width: 100%;
        line-height: normal;
    }

    .imageWrapper:hover article {
        display: flex;
        cursor: pointer;
    }
    

    @media screen and (min-width: 1680px){
      .imageWrapper{
        width: 15rem;
        height: 20rem;
      }
    }

    @media screen and (min-width: 1920px) {
        .imageWrapper{
        width: 20rem;
        height: 25rem;
      }
        
    }

`;
