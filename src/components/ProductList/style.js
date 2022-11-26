import styled from "styled-components";

export const StyledProductList = styled.section`
  ul {
    width: 100%;
    display: flex;
    max-width: 940px;
    /* min-width: 600px; */
    /* justify-content: space-between; */
    flex-wrap: wrap;
    gap: 20px;

    @media only screen and (max-width: 600px) {
      /* width: 100%; */
      flex-wrap: nowrap;
      overflow-x: auto;
      margin-bottom: 20px;
    }
  }
`;
