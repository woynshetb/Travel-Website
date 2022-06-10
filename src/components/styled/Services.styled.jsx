import styled from "styled-components";

export const ServiceSection =styled.section`
padding:5rem 0;
display:grid ;
grid-template-columns:repeat(4,1fr) ;
.service{
  display:flex ;
  flex-direction:column ;
  gap:2 ;
  padding:2rem ;
  margin:1rem ;
  background-color:aliceblue ;
  box-shadow:rgba(100,100,11,0.2) 0px 7px 29px 0px ;
  transition:0.3s ease-in-out ;
  &:hover{
    transform:translateX(0.4rem) translateY(-1rem) ;
    box-shadow:rgba(0,0,0,0.35) 0px 5px 15px ;
  }

}

@media screen and (min-width: 280px) and (max-width: 720px) {
    grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
  }
  @media screen and (min-width: 720px) and (max-width: 1080px) {
    grid-template-columns: repeat(2, 1fr);
  }

`;