import styled from "styled-components";

export const StyledCartProduct = styled.li`
  width: 100%;
  height: 5rem;
  display: flex;
  justify-content: flex-start;
  align-items: flex-start;
  position: relative;
  border-radius: var(--border-radius-1);
  animation: in-cart 0.5s ease-in-out;

  :hover {
    box-shadow: 0px 0px 30px -20px rgba(0, 0, 0, 0.25);
  }

  > div:first-child {
    height: 100%;
    width: 5rem;
    background-color: var(--color-gray-20);
    border-radius: var(--border-radius-2);

    img {
      width: 100%;
    }
  }

  > div:nth-child(2) {
    height: 100%;
    display: flex;
    flex-direction: column;
    padding-left: 0.625rem;
    gap: 0.625rem;
    text-align: left;
    align-items: flex-start;
    justify-content: space-between;

    > div {
      display: flex;
      justify-content: space-between;
      align-items: center;
      border: 1px solid var(--color-gray-20);
      border-radius: var(--border-radius-2);
      width: 106px;
      height: 30px;

      button {
        display: flex;
        align-items: center;
        justify-content: center;
        font-size: 25px;
        color: var(--color-secondary);
        border: none;
        background-color: var(--color-gray-20);
        border-radius: var(--border-radius-2);
        height: 100%;
        width: 30px;

        :hover {
          cursor: pointer;
          background-color: var(--color-gray-50);
        }
      }
    }
  }

  > button {
    position: absolute;
    top: 0.625rem;
    right: 0.625rem;
    background: none;
    border: none;

    svg {
      opacity: 0.4;

      :hover {
        cursor: pointer;
        opacity: 1;
      }
    }
  }

  @media only screen and (max-width: 37.5rem) {
    > div:nth-child(2) > h4 {
      width: 6.875rem;
    }

    > button {
      padding: 0;
    }
  }

  @keyframes in-cart {
    0% {
      transform: translateY(-6.25rem);
      opacity: 0;
    }
    100% {
      transform: translateY(0rem);
      opacity: 1;
    }
  }
`;
