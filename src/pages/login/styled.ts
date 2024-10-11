import { DefaultContainer } from "shared/DefaultContainer";
import { COLORS } from "shared/enums";
import styled from "styled-components";

export const Background = styled(DefaultContainer).attrs({
  $alignItems: "flex-start",
  $justifyContent: "center",
  width: "100%",
})`
  background-color: ${COLORS.beige_FDF1E6};
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
  padding: 35px 44px;

  @media (min-width: 768px) {
    padding: 0;
  }
`;

export const Logo = styled.img`
  width: 131.65px;
  height: 36.01px;
  margin-bottom: 36px;
  align-self: flex-start;

  @media (min-width: 1024px) {
    height: 100px;
    width: auto;

    margin: 0;

    align-self: center;
  }
`;

export const H1 = styled.p`
  font-size: 18px;
  font-weight: 700;
  text-align: center;
`;

export const H2 = styled.p<{ $light?: boolean }>`
  font-size: 13px;
  font-weight: ${({ $light }) => ($light ? "500" : "600")};
  text-align: center;

  a {
    color: ${COLORS.brown_A04A4A};
    font-weight: 600;
    cursor: pointer;
  }
`;

export const H3 = styled.a`
  font-size: 11px;
  font-weight: 600;
  text-align: center;

  color: ${COLORS.brown_A04A4A};

  cursor: pointer;

  text-decoration: none;
  align-self: center;
`;

export const Form = styled.form`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 24px;
`;
