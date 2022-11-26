import styled from "styled-components";

export const StyledInputSearch = styled.form`
  display: flex;
  height: 60px;
  align-items: center;
  justify-content: center;
  border: 1px solid red;
  max-width: 365px;
  border: 2px solid var(--color-gray-20);
  border-radius: var(--border-radius-1);
  background-color: var(--color-white);
  padding: 0 10px;

  input {
    font-size: var(--font-size-4);
    border-radius: var(--border-radius-1);
    outline: none;
    width: 100%;
    height: 100%;
    padding: 0 10px;
    border: none;

    ::placeholder {
      color: var(--color-gray-20);
    }
  }

  /*  .input-focus {
    background-color: red;
    border-color: var(--color-gray-100);
  } */

  @media only screen and (max-width: 600px) {
    margin: 16px 16px;
    padding: 0 10px 0 0;
    input {
      width: 100%;
    }
  }
`;
