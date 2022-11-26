import styled from "styled-components";

export const StyledCartProduct = styled.li`
  width: 100%;
  height: 80px;
  display: flex;
  justify-content: flex-start;
  align-items: flex-start;
  position: relative;
  border-radius: var(--border-radius-1);
  animation: in-cart 0.5s ease-in-out;

  :hover {
    /* background-color: red; */
    box-shadow: 0 0 15px var(--color-gray-50);
  }

  > div:first-child {
    height: 100%;
    width: 80px;
    background-color: var(--color-gray-20);
    border-radius: var(--border-radius-2);

    img {
      width: 100%;
      /* object-fit: scale-down; */
    }
  }

  > div:nth-child(2) {
    height: 100%;
    display: flex;
    flex-direction: column;
    padding: 10px 0 0 10px;
    gap: 10px;
    text-align: left;
    align-items: flex-start;
  }

  > button {
    position: absolute;
    top: 10px;
    right: 10px;

    :hover {
      cursor: pointer;
      text-decoration: underline;
    }
  }

  @media only screen and (max-width: 600px) {
    > div:nth-child(2) > h4 {
      width: 110px;
    }
    > button {
      padding: 0;
    }
  }

  @keyframes in-cart {
    0% {
      /* transform: scale(0) rotate(180deg); */
      transform: translateY(-100px);
      opacity: 0;
    }
    80% {
      /* transform: scale(110%); */
    }
    100% {
      /* transform: scale(100%) rotate(0deg); */
      transform: translateY(0px);
      opacity: 1;
    }
  }
`;
