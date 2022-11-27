import styled from "styled-components";

export const StyledProductList = styled.section`
  width: 100%;

  > div {
    width: 100%;
    margin-bottom: 1.875rem;
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
  ul {
    width: 100%;
    display: flex;
    max-width: 58.75rem;
    flex-wrap: wrap;
    gap: 1.25rem;
  }

  @media only screen and (max-width: 37.5rem) {
    > div {
      h2 {
        font-size: var(--font-size-2);
      }
      flex-direction: column;
      gap: 0.9375rem;
    }
    ul {
      flex-wrap: nowrap;
      overflow-x: auto;
      margin-bottom: 1.25rem;
    }
  }
`;
