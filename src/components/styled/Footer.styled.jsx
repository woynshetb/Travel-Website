import styled from "styled-components";

export const FooterSection = styled.footer`
display:flex ;
justify-content:space-evenly ;
background-color:#d0d8ff ;
padding:2.5rem ;
border-radius:0.5rem ;
ul {
    display:flex ;
    list-style-type:none ;
    gap:2rem   ;
    li{
        a{
        text-decoration:none ;
        color:black;
        transition:0.2s ease-in-out ;
        &:hover{
            color:#302ce9;
        }
    }
    svg{
        font-size:1.3rem ;
        transition:0.2s ease-in-out ;
    }
    }
}
`;