import styled from "styled-components";
export const StyledSummary = styled.section`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  gap: 30px;
  align-items: flex-start;

  div {
    width: 377px;
    border: 1px solid var(--color-gray-20);
    box-shadow: 0px 4px 40px -20px rgba(0, 0, 0, 0.25);
    border-radius: var(--border-radius-2);
    display: flex;
    gap: 19px;
    align-items: center;
    padding: 17px 14px;
    color: var(--color-gray-50);

    strong {
      color: var(--color-gray-100);
    }
  }
`;
