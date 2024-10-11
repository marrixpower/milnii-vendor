import { DefaultContainer } from "shared/DefaultContainer";
import styled from "styled-components";

export const Container = styled(DefaultContainer).attrs({
  $flexDirection: "column",
  $alignItems: "center",
  $justifyContent: "center",
  $maxWidth: "283px",
  $padding: "0 10px",
  $gap: "25px",
})`
  height: 290px;

  border-radius: 14px;

  background-color: white;

  @media (min-width: 600px) {
    max-width: 561px;
    padding: 0 60px;
  }
`;

export const H1 = styled.p`
  font-family: Montserrat;
  font-size: 20px;
  font-weight: 600;
  line-height: 32px;
  text-align: center;

  max-width: 410px;
  width: 100%;

  @media (min-width: 600px) {
    font-size: 26px;
    font-weight: 600;
    line-height: 32px;
  }
`;

export const H2 = styled.p`
  font-family: Montserrat;
  font-size: 14px;
  font-weight: 400;
  line-height: 20px;
  text-align: center;

  max-width: 300px;
  width: 100%;

  span {
    margin-top: 15px;
    display: block;
  }
`;
