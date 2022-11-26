import { createGlobalStyle } from "styled-components";

export const StyledGlobals = createGlobalStyle`
  * {
    padding: 0;
    margin: 0;
    box-sizing: border-box;
  }

  :root {
    --border-radius-1: 8px;
    --border-radius-2: 5px;
  }

  .input-focus {
    border-color: var(--color-gray-100);
  }

  .resize-img {
    /* border: 2px solid red; */
    transform: scale(1.5) translateY(-20px);
  }

  .resize-img-cart {
    /* border: 2px solid red; */
    transform: scale(1.5) translateY(-10px);
  }

  .adjust-img {
    /* border: 2px solid red; */
    transform: translateY(-10px);
  }
  
  .adjust-img-cart {
    /* border: 2px solid red; */
    transform: translateY(-5px);
  }

  body {
    color: var(--color-gray-100);
  }

  main {
    padding-top: 32px;
    display: flex;
    justify-content: space-between;
    /* gap: 30px; */
  }

  ul {
    list-style: none;
  }

  a {
    text-decoration: none;
  }

  .container {
    width: 100%;
    max-width: 1370px;
    margin: 0 auto;
    
  }

  @media only screen and (max-width: 600px) {
    main{
      width: 100%;
      padding: 16px;
      /* align-items: center; */
      /* justify-content: center; */
      /* overflow-x: none; */
      flex-direction: column;
      /* flex-wrap: nowrap; */
      text-align: center;
    }
  }

  ::-webkit-scrollbar-track { background-color: var(--color-gray-20) }
  ::-webkit-scrollbar { width: 7px; height: 7px;}
  ::-webkit-scrollbar-thumb { background: var(--color-primary-50); border-radius: var(--border-radius-1)}
`;
