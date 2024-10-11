import { DefaultContainer } from "shared/DefaultContainer";
import { COLORS } from "shared/enums";
import styled from "styled-components";

export const Container = styled(DefaultContainer).attrs({
  $flexDirection: "column",
  $alignItems: "flex-start",
  $gap: "5px",
  $margin: "0 0 20px 0",
})``;

export const H1 = styled.p`
  width: 100%;

  font-size: 16px;
  font-weight: 700;
  text-align: left;

  span {
    font-size: 10px;
    font-weight: 400;
    padding-left: 8px;

    color: ${COLORS.brown_A04A4A};
  }
`;

export const H3 = styled.p`
  font-size: 11px;
  font-weight: 400;
  line-height: 17px;
  text-align: left;

  color: ${COLORS.grey_979797};
`;
