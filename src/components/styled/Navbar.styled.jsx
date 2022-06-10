import styled from "styled-components";

export const Nav = styled.nav`
display:flex ;
justify-content:space-between ;
align-items:center ;
.brand{
    .container{
        cursor: pointer;
        display:flex ;
        justify-content:center ;
        align-items:center ;
        gap:0.4rem ;
        font-size:1.2rem ;
        font-weight:900 ;
        text-transform:uppercase ;



    }
    .toggle{
        display:none ;
    }
}
ul {
display:flex ;
list-style:none ;
gap:1rem ;
li {
   a{
       text-decoration:none ;
       color: #0077b6;
       font-size:1.2rem;
       transition: 0ms 0.1s ease-in-out ;

       &:hover{
   color: #063e8a;
       }

   }
   &:first-of-type {
       a {
           color:#023e8a;
           font-weight:900 ;
       }
   }
}

}
button{
    padding :0.5rem 1rem ;
    cursor:pointer ;
    border-radius:1rem ;
    border:none ;
    color:white ;
    background-color:#48cae4 ;
    text-transform:uppercase ;
    font-size:1.1rem ;
    letter-spacing:0.1rem ;
    &:hover{
        background-color:#023e8a ;
    }
 }

 @media screen and (min-width :280px) and (max-width:1080px){
.brand{
    display:flex ;
    justify-content:space-between ;
    align-items:center ;
    width :100% ;

    .toggle{
       display :block ;
    }
}
ul,button{
    display:none ;
}
 }
`;