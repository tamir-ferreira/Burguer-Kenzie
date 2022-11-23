import styled from "styled-components";

export const StyledInputSearch = styled.div`
  display: flex;
  position: relative;
  align-items: center;

  input {
    font-size: var(--font-size-4);
    outline: none;
    height: 60px;
    width: 365px;
    border-radius: var(--border-radius-1);
    border: 2px solid var(--color-gray-20);
    background-color: (--color-white);
    padding: 0 10px 0 20px;

    :focus {
      border: 2px solid var(--color-gray-100);
    }

    ::placeholder {
      color: var(--color-gray-20);
    }
  }

  button {
    position: absolute;
    right: 10px;
  }
`;
