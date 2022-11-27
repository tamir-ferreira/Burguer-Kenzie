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
    box-shadow: 0 0 0.9375rem var(--color-gray-50);
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
    padding: 0.625rem 0 0 0.625rem;
    gap: 0.625rem;
    text-align: left;
    align-items: flex-start;
  }

  > button {
    position: absolute;
    top: 0.625rem;
    right: 0.625rem;

    :hover {
      cursor: pointer;
      text-decoration: underline;
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
