import styled from "styled-components";
export const StyledForm = styled.form`
  display: flex;
  flex-direction: column;
  gap: 20px;
  /* align-items: center; */
  padding: 26px 24px;
  width: 500px;
  border: 2px solid var(--color-gray-20);
  box-shadow: 0px 0px 30px -20px rgba(0, 0, 0, 0.25);
  border-radius: var(--border-radius-2);

  > div {
    width: 100%;
    display: flex;
    justify-content: space-between;
    span {
      color: var(--color-gray-50);
      text-decoration: underline;
      :hover {
        cursor: pointer;
      }
    }
  }

  > p {
    text-align: center;
    align-self: center;
    width: 327px;
    color: var(--color-gray-50);
  }
`;
