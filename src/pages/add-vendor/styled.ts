import { DefaultContainer } from "shared/DefaultContainer";
import { COLORS } from "shared/enums";
import styled from "styled-components";

export const Background = styled(DefaultContainer).attrs({
  $flexDirection: "column",
  $alignItems: "center",
  $justifyContent: "flex-start",
  width: "100%",
})`
  min-height: 100vh;

  @media (min-width: 768px) {
    align-items: center;
  }
`;

export const Container = styled(DefaultContainer).attrs({
  $flexDirection: "column",
  $alignItems: "center",
  $maxWidth: "473px",
  $gap: "24px",
})`
  padding: 25px 34px;

  @media (min-width: 425px) {
    padding: 35px 44px;
  }

  @media (min-width: 768px) {
    padding: 0 0 20px 0;
  }
`;

export const Form = styled(DefaultContainer).attrs({
  $flexDirection: "column",
  $alignItems: "center",
  $maxWidth: "473px",
  $gap: "24px",
  as: "form",
})``;

export const Header = styled(DefaultContainer).attrs({
  $padding: "55px 75px 35px 75px",
  $alignItems: "center",
  $justifyContent: "space-between",
})``;

export const Logo = styled.img`
  height: 36px;
  width: auto;

  @media (min-width: 1024px) {
    width: 228px;
    height: 62.36px;
  }
`;

export const H1 = styled.p`
  width: 100%;

  font-size: 32px;
  font-weight: 700;
  text-align: left;

  span {
    display: block;

    font-size: 14px;
    font-weight: 500;
    text-align: left;

    line-height: 31.37px;
  }
`;

export const H2 = styled.p`
  font-family: Montserrat;
  font-size: 16px;
  font-weight: 400;
`;

export const ExampleButton = styled.button`
  display: none;

  cursor: pointer;

  @media (min-width: 600px) {
    display: block;

    width: 249px;
    height: 58px;

    border-radius: 14px;
    border: 1px solid ${COLORS.brown_A04A4A};

    background-color: ${COLORS.brown_A04A4A};
    color: ${COLORS.beige_FDF1E6};
  }
`;
