import styled from "styled-components";

export const StyledCartProduct = styled.li`
  width: 100%;
  height: 80px;
  display: flex;
  justify-content: flex-start;
  align-items: flex-start;
  position: relative;

  > div:first-child {
    height: 100%;
    width: 80px;
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
`;
