import styled from "styled-components";

export const StyledProductList = styled.section`
  ul {
    width: 100%;
    display: flex;
    max-width: 58.75rem;
    flex-wrap: wrap;
    gap: 1.25rem;

    @media only screen and (max-width: 37.5rem) {
      flex-wrap: nowrap;
      overflow-x: auto;
      margin-bottom: 1.25rem;
    }
  }
`;
