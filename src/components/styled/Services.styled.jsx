import styled from "styled-components";

export const ServiceSection =styled.section`
padding:5rem 0;
display:grid ;
grid-template-columns:repeat(4,1fr) ;
.service{
  display:flex ;
  flex-direction:column ;
  gap:1 ;
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

`;