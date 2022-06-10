import styled from "styled-components";

export const ToTop = styled.div`
display: ${({scrollState}) => (scrollState ?"block":"none")} ;
position:fixed ;
bottom:1rem ;
right:2rem ;
z-index:10 ;
cursor:pointer ;
img{
    height:1.5rem;

}
border-radius:2rem ;
background-color: #1900ff39;
`;