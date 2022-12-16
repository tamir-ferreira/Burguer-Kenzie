import styled from "styled-components";
export const StyledDashboard = styled.main`
  width: 100%;
  max-width: 85.625rem;
  margin: 0 auto;
  margin-top: 100px;
  > div {
    background-color: red;
  }

  @media only screen and (max-width: 37.5rem) {
    margin-top: 150px;
    width: 95vw;
  }
`;
