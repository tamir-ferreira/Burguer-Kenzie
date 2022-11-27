import styled from "styled-components";

export const StyledInputSearch = styled.form`
  display: flex;
  height: 3.75rem;
  align-items: center;
  justify-content: center;
  border: 0.0625rem solid red;
  max-width: 22.8125rem;
  border: 0.125rem solid var(--color-gray-20);
  border-radius: var(--border-radius-1);
  background-color: var(--color-white);
  padding: 0 0.625rem;

  input {
    font-size: var(--font-size-4);
    border-radius: var(--border-radius-1);
    outline: none;
    width: 100%;
    height: 100%;
    padding: 0 0.625rem;
    border: none;

    ::placeholder {
      color: var(--color-gray-20);
    }
  }

  @media only screen and (max-width: 37.5rem) {
    margin: 1rem 1rem;
    padding: 0 0.625rem 0 0;
    input {
      width: 100%;
    }
  }
`;
