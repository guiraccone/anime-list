import styled from "styled-components";

export const PostLayout = styled.div`

    margin-top: 1rem;
    color: ${(props) => props.theme["--white-500"]};
    display: flex;
    width: 200px;
    flex-direction: column;
    max-height: 200px;


    .imageAndButtonWrapper{
        display: flex;
        flex-direction: column;

        img {
        width: 200px;
        height: 300px;
        object-fit: cover;
        transition: 0.2s;
        }
    }

    .buttonWrapper{
        display: flex;
            button{
            display: flex;
            align-items: center;
            justify-content: center;
            gap: 0.2rem;
            width: 50%;
            background: ${(props) => props.theme["--gray-800"]};
            color: ${(props) => props.theme["--white-300"]};
            border: none;
            cursor: pointer;

            &:hover{background: ${(props) => props.theme["--gray-400"]}}
            }
    }

    legend{
    color: ${(props) => props.theme["--gray-100"]};
    }

    legend, span {
    width: 100%;
    line-height: normal;
    }

    img:hover {
    filter: brightness(0.4);
    cursor: pointer;
}
`