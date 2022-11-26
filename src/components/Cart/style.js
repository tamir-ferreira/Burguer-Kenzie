import styled from "styled-components";

export const StyledCart = styled.aside`
  max-width: 365px;
  width: 100%;

  > div:first-child {
    display: flex;
    align-items: center;
    padding-left: 20px;
    height: 65px;
    background-color: var(--color-primary);
    border-radius: var(--border-radius-2) var(--border-radius-2) 0 0;

    h4 {
      color: var(--color-white);
    }
  }

  > div:nth-child(2) {
    display: flex;
    flex-direction: column;
    justify-content: center;
    gap: 15px;
    align-items: center;
    height: 158px;
    background-color: var(--color-gray-0);
  }

  ul {
    width: 100%;
    max-height: 320px;
    background-color: var(--color-gray-0);
    display: flex;
    flex-direction: column;
    gap: 20px;
    padding: 20px 10px;
    overflow-y: auto;
  }

  @media only screen and (max-width: 600px) {
    main {
      width: 100%;
      padding: 16px;
      /* align-items: center; */
      /* justify-content: center; */
      /* overflow-x: none; */
      flex-direction: column;
      /* flex-wrap: nowrap; */
      text-align: center;
    }
  }
  @media only screen and (max-width: 600px) {
    max-width: 100%;
  }
`;
