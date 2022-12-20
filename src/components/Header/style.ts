import styled from "styled-components";

export const StyledHeader = styled.header`
  background-color: var(--color-gray-0);
  height: 5rem;
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 10;
  position: fixed;
  left: 0;
  top: 0;
  width: 100%;

  > div {
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;

    > div {
      display: flex;
      align-items: center;
      justify-content: center;
      gap: 35px;

      > div {
        display: flex;
        align-items: center;
        justify-content: center;
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

          > button {
            border: none;
            opacity: 0.5;

            :hover {
              cursor: pointer;
              opacity: 1;
            }
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
  }

  @media only screen and (max-width: 37.5rem) {
    height: auto;

    > div {
      margin-top: 1.5625rem;
      width: 100%;
      align-items: center;
      flex-direction: column;

      img {
        padding-left: 12px;
        align-self: flex-start;
      }

      > div {
        display: flex;
        flex-direction: column-reverse;

        form {
          padding: 0;
        }

        input {
          width: 100%;
        }

        > div {
          display: flex;
          position: absolute;
          right: 10px;
          top: 20px;
        }
      }
    }
  }
`;
