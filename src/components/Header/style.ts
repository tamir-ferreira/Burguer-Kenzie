import styled from "styled-components";

export const StyledHeader = styled.header`
  background-color: var(--color-gray-0);
  height: 5rem;
  display: flex;
  align-items: center;
  justify-content: center;

  > div {
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
  }

  @media only screen and (max-width: 37.5rem) {
    height: auto;

    > div {
      margin-top: 1.5625rem;
      width: 100%;
      align-items: center;
      flex-direction: column;
    }
  }
`;
