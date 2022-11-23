import styled from "styled-components";

export const StyledProduct = styled.li`
  width: 300px;
  background-color: var(--color-white);
  border: 2px solid var(--color-gray-20);
  border-radius: var(--border-radius-2);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  :hover {
    border: 2px solid var(--color-gray-100);
  }

  > div:first-child {
    width: 100%;
    height: 150px;
    display: flex;
    justify-content: center;
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
`;
