import styled from "styled-components";

export const PostLayout = styled.div`

    margin-top: 1rem;
    color: ${(props) => props.theme["--white-500"]};
    display: flex;
    width: 200px;
    flex-direction: column;
    max-height: 200px;


img {
    width: 200px;
    height: 300px;
    object-fit: cover;
    transition: 0.2s;
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