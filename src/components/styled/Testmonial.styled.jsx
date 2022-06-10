import styled from "styled-components";

export const TestmonialSection = styled.section`
margin:5rem 0 ;
.title{
   h2{
       text-align:center ;
       margin-bottom:2rem ;
   }
}
.testmonials{
    display:flex ;
    justify-content:center ;
    margin:0 2rem;
    gap:2rem ;
.testmonial{
    background-color:aliceblue ;
    padding:2rem;
    border-radius:0.5rem ;
    box-shadow:rgba(100,100,11,0.2) 0px 7px 29px 0px ;
    transition:0.3s ease-in-out;
    &:hover{
        transform:translateX(0.2rem) translateY(-1rem) ;
       box-shadow:rgba(0,0,0,0.35) 0px 5px 15px ;
    }

   
   

    .info{
        display:flex ;
        justify-content:center ;
        gap:1rem ;
        align-items:center ;
        margin-top:1rem;
        img{
            height:3rem ;
            border-radius:3rem ;
        }
        .details{
            span{
                font-size:0.9remm
            }
        }
    }
}
}

@media screen and (min-width: 280px) and (max-width: 768px) {
    .testmonials {
      flex-direction: column;
      margin: 0;
      .testmonial {
        justify-content: center;
        .info {
          flex-direction: column;
          justify-content: center;
        }
      }
    }
  }

`;