import styled from "styled-components";

export const StyledInput = styled.fieldset`
  width: 100%;
  height: 60px;
  border-radius: var(--border-radius-1);
  display: flex;
  flex-direction: column;
  gap: 3px;
  border: none;
  position: relative;

  input {
    font-size: 1.1rem;
    width: 100%;
    padding: 17px 15px;
    border: none;
    outline: none;
    border: 2px solid var(--color-gray-20);
    border-radius: var(--border-radius-1);
    transition: 0.4s ease;

    :-webkit-autofill,
    :-webkit-autofill:focus {
      transition: background-color 600000s 0s, color 600000s 0s;
    }

    :focus {
      border-color: var(--color-success);
    }

    :valid ~ label,
    :focus ~ label {
      transform: translateX(10px) translateY(-10px);
      font-size: 0.9rem;
      padding: 0 10px;
      background-color: var(--color-white);
    }
  }

  > label {
    color: var(--color-gray-50);
    pointer-events: none;
    font-size: 1.1rem;
    position: absolute;
    left: 0;
    padding: 18px;
    transition: 0.4s ease;
  }

  > svg {
    position: absolute;
    right: 20px;
    top: 20px;
    color: var(--color-gray-50);
    :hover {
      cursor: pointer;
    }
  }

  > p {
    align-self: flex-end;
    color: var(--color-negative);
  }
`;
