import styled from "styled-components";

export const ContainerResults = styled.section `
padding-top: 1rem;
width: 90%;
display: flex;
flex-direction: column;
align-items: center;

img {
    width: 25%;
    height: auto;
}
`

export const Searchstyled = styled.div `
display: grid;
grid-template-columns: repeat(2, 1fr);
grid-gap: 15px;
margin: 1rem auto;
width: 90%;
`

export const TextResults = styled.div `
padding: 1rem;
margin-bottom: 10px;
background-color: #fff;
width: 80%;
border-radius: 0.3rem;
box-shadow: rgba(50, 50, 105, 0.15) 0px 2px 5px 0px,
                rgba(0, 0, 0, 0.05) 0px 1px 1px 0px;

span {
    font-size: 1rem;
}
`