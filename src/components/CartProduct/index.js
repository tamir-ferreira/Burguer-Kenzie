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
  }

  > div:nth-child(2) {
    display: flex;
    flex-direction: column;
    padding: 10px 0 0 10px;
    gap: 10px;
  }

  > a {
    position: absolute;
    top: 10px;
    right: 10px;

    :hover {
      cursor: pointer;
      text-decoration: underline;
    }
  }
`;
