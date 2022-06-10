import styled from "styled-components";


export const Section = styled.section`
position:relative ;
margin-top:2rem;
width:100% ;
height:100% ;
.background{
    height:100% ;
    img{
        width:100%;
        filter:brightness(60%) ;
    }
}
.content{
    height:100%;
    width:100%;
    position:absolute ;
    top:0 ;
    text-align:center ;
    display:flex ;
    flex-direction:column ;
    justify-content:center ;
    align-items:center ;
    gap:1rem ;
    .title{
        color:white;
        h1{
            font-size:3rem ;
            letter-spacing:0.2rem ;
        }
        p{
            text-align:center ;
            padding:0 40rem ;
            margin-top:0.5rem ;
            font-size:1.2rem ;
        }
    }

    .search{
        display:flex;
       background-color:#ffffffce ;
       padding:1rem ;
       border-radius:0.5rem ;
       .container{
     display:flex;
     flex-direction:column ;
     padding: 0 1.4rem;
     label{
         font-size:1.1rem ;
         color:#03045e;
     }
     
        input{
            background-color:transparent ;
            border:none ;
            text-align:center ;
            color:black;
            &[type="date"]{
                 padding-left:1.7rem;
            }
            &::placeholder{
                color:black;
            }
            &:focus{
                outline:none;
            }


        }
       }
       button{
           padding:1rem ;
           cursor:pointer;
           border-radius:0.3rem;
           border:none ;
           color:white;
           background-color:#4361ee ;
           text-transform:uppercase ;
           transition: 0ms 0.1s ease-in-out;
           &:hover{
               background-color:#023e8a ;
           }

       }
    }
    
    
}
`;