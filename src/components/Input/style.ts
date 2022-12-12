import styled from "styled-components";
export const StyledInput = styled.fieldset`
  width: 100%;
  height: 60px;
  border-radius: var(--border-radius-1);
  display: flex;
  align-items: center;

  input:focus ~ legend {
    margin-left: 10px;
    padding: 0 5px;
    display: flex;
  }

  legend {
    display: none;
  }

  input {
    border-radius: var(--border-radius-1);
    width: 100%;
    padding: 20px 15px;
    border: none;
    outline: none;

    :focus {
      padding: 10px 15px;
    }
  }
`;
