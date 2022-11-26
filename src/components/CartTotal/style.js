import styled from "styled-components";

export const StyledCartTotal = styled.div`
  :last-child {
    display: flex;
    gap: 20px;
    flex-direction: column;
    background-color: var(--color-gray-0);
    padding: 14px 10px 20px 10px;
    border-radius: 0 0 var(--border-radius-2) var(--border-radius-2);
    border-top: 2px solid var(--color-gray-20);

    > div {
      display: flex;
      align-items: center;
      justify-content: space-between;
    }
  }
`;
