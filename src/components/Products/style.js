import styled from "styled-components";

export const StyledProducts = styled.li`
  min-width: 300px;
  background-color: var(--color-white);
  border: 2px solid var(--color-gray-20);
  border-radius: var(--border-radius-2);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  transition: 0.2s ease-in;

  :hover {
    box-shadow: 0 0 15px var(--color-gray-100);

    img {
      scale: 1.5;
    }

    div:first-child {
      background-color: var(--color-gray-20);
      overflow: hidden;
    }
  }

  img {
    /* border: 1px solid red; */
    transition: 0.7s ease;
    /* object-fit: fill; */
    /* width: 100%; */
    /* height: 150px; */
    object-fit: cover;
  }

  > div:first-child {
    width: 100%;
    height: 150px;
    display: flex;
    justify-content: center;
    overflow: hidden;
    background-color: var(--color-gray-0);
  }

  > div:last-child {
    display: flex;
    flex-direction: column;
    gap: 10px;
    width: 100%;
    padding: 24px 20px;

    > button {
      margin-top: 10px;
    }
  }

  @media only screen and (max-width: 600px) {
    /* width: 100%; */
    /* flex-wrap: nowrap;
      overflow-x: auto; */
    /* background-color: red; */
    margin-bottom: 15px;
  }

  /* @keyframes in-view {
    0% {
      transform: translateY(-100px);
      opacity: 0;
    }
    80% {
    }
    100% {
      transform: translateY(0px);
      opacity: 1;
    }
  } */
`;
