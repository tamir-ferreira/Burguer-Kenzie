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

    > div {
      display: flex;
      align-items: center;
      gap: 35px;

      > div {
        position: relative;

        > span {
          display: flex;
          align-items: center;
          justify-content: center;
          width: 20px;
          height: 24px;

          position: absolute;
          right: -15px;
          top: -15px;
          background-color: var(--color-primary);
          font-weight: var(--font-weigth-1);
          border-radius: var(--border-radius-1);
          color: var(--color-white);
        }
      }
      > button {
        border: none;
        background: none;
        opacity: 0.5;
        :hover {
          cursor: pointer;
          opacity: 1;
        }
      }
    }
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
