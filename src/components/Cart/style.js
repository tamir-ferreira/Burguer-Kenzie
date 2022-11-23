import styled from "styled-components";

export const StyledCart = styled.aside`
  width: 365px;

  > div:first-child {
    display: flex;
    align-items: center;
    padding-left: 20px;
    height: 65px;
    background-color: var(--color-primary);
    color: var(--color-white);
    border-radius: var(--border-radius-2) var(--border-radius-2) 0 0;
  }

  > div:nth-child(2) {
    display: flex;
    flex-direction: column;
    justify-content: center;
    gap: 15px;
    align-items: center;
    height: 158px;
    background-color: var(--color-gray-0);
    display: none;
  }

  ul {
    width: 100%;
    background-color: var(--color-gray-0);
    display: flex;
    flex-direction: column;
    gap: 20px;
    padding: 20px 10px;
    border-bottom: 2px solid var(--color-gray-20);
  }
`;
