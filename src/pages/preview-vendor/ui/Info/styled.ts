import { DefaultContainer } from "shared/DefaultContainer";
import { COLORS } from "shared/enums";
import styled from "styled-components";

export const Container = styled(DefaultContainer).attrs({
  $flexDirection: "column",
  $alignItems: "flex-start",
})``;

export const H3 = styled.p`
  font-family: Lato;
  font-size: 10px;
  font-weight: 400;
  line-height: 15.21px;
  text-align: left;

  color: ${COLORS.grey_7B7575};

  a {
    font-family: Lato;
    font-size: 10px;
    font-weight: 700;
    line-height: 15.21px;
    text-align: left;

    color: ${COLORS.brown_A04A4A};
  }

  @media (min-width: 768px) {
    font-size: 15px;
    line-height: 22.82px;

    a {
      font-size: 15px;
      line-height: 22.82px;
    }
  }
`;

export const TextContainer = styled(DefaultContainer).attrs({
  $padding: "8px 10px",
  $alignItems: "center",
  $gap: "11px",
})`
  border-bottom: 0.5px solid ${COLORS.grey_C4C4C4};
`;

export const Icon = styled.img`
  width: 21.02px;
  height: 21.02px;
`;

export const Line = styled.div`
  width: 100%;
  height: 0.5px;

  background-color: ${COLORS.grey_C4C4C4};
`;
