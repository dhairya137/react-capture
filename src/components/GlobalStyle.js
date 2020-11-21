import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
  *{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body{
    background: #1b1b1b;

  }

  button{
    font-weight: bold;
    font-size: 1.1rem;
    cursor: pointer;
    padding: 1rem 2rem;
    border: 3px solid #23b997;
    background: transparent;
    color: #fff;
    transition: all 0.5s ease;

    &:hover{
      background-color: #23b997;
      color #fff;
    }
  }

  h2{
    font-weight: lighter;
    font-size: 3rem;
    }

  h3{
    color: #fff;
  }

  h4{
    font-weight: bold;
  }

  p{
    padding: 3rem 0rem;
    color: #ccc;
    font-size: 1.2rem;
    line-height: 150%;
  }
  
  a{
    font-size: 1.1rem;
  }

  span{
    font-weight: bold;
    color: #23b997;
  }
`;