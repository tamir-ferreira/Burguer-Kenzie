import { createGlobalStyle } from "styled-components";

export const StyledGlobals = createGlobalStyle`
  * {
    padding: 0;
    margin: 0;
    box-sizing: border-box;
  }

  :root {
    --border-radius-1: .5rem;
    --border-radius-2: .3125rem;
  }

  .input-focus {
    border-color: var(--color-gray-100);
  }

  .resize-img {
    transform: scale(1.5) translateY(-1.25rem);
  }

  li:hover .resize-img{
    animation: anim-resize-img 1s linear infinite forwards;
  } 

  li:hover .adjust-img{
    animation: anim-adjust-img 1s linear infinite forwards;
  } 

  .resize-img-cart {
    transform: scale(1.5) translateY(-0.625rem);
  }

  .adjust-img {
    transform: translateY(-0.625rem);
    hover{
      animation: anim-adjust-image 1s linear infinite forwards;
    }
  }
  
  .adjust-img-cart {
    transform: translateY(-0.3125rem);
  }

  body {
    color: var(--color-gray-100);
  }

  main {
    padding-top: 2rem;
    display: flex;
    justify-content: space-between;
    position: relative;
    gap: 60px;
  }

  ul {
    list-style: none;
  }

  a {
    text-decoration: none;
  }

  .container {
    width: 100%;
    max-width: 85.625rem;
    margin: 0 auto;
      }

  @media only screen and (max-width: 37.5rem) {
    main{
      width: 100%;
      padding: 1rem;
      flex-direction: column;
      text-align: center;
    }
  }

  @keyframes anim-adjust-img {
    0% {
      transform: scale(1) translateY(-0.625rem);
     
    }
    50% {
      transform: scale(1.2) translateY(-0.625rem);
    }
    100% {
      transform: scale(1) translateY(-0.625rem);
    }
  
  }
  @keyframes anim-resize-img {
    0% {
      transform: scale(1.5) translateY(-1.25rem);
     
    }
    50% {
      transform: scale(1.8) translateY(-1.25rem);
    }
    100% {
      transform: scale(1.5) translateY(-1.25rem);
    }
  }

  /* ---------- LOADER PÁGINAS ------------ */
.container-loader2{
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
}

.loader2 {
  width: 78px;
  height: 78px;
  border-radius: 50%;
  display: inline-block;
  border-top: 4px solid var(--color-gray-100);
  border-right: 4px solid transparent;
  box-sizing: border-box;
  animation: rotation 1s linear infinite;
}
.loader2::after {
  content: '';  
  box-sizing: border-box;
  position: absolute;
  left: 0;
  top: 0;
  width: 78px;
  height: 78px;
  border-radius: 50%;
  border-bottom: 4px solid var(--color-primary);
  border-left: 4px solid transparent;
}
@keyframes rotation {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
} 

  ::-webkit-scrollbar-track { background-color: var(--color-gray-20) }
  ::-webkit-scrollbar { width: .4375rem; height: .4375rem;}
  ::-webkit-scrollbar-thumb { background: var(--color-primary-50); border-radius: var(--border-radius-1)}
`;
