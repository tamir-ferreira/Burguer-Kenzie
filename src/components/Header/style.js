import styled from "styled-components";

export const StyledHeader = styled.header`
  background-color: var(--color-gray-0);
  height: 80px;
  display: flex;
  align-items: center;
  justify-content: center;

  > div {
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
  }

  @media only screen and (max-width: 600px) {
    height: auto;

    > div {
      margin-top: 25px;
      /* margin: 25px 16px 0 16px; */
      width: 100%;
      align-items: center;
      flex-direction: column;
    }
  }
`;
