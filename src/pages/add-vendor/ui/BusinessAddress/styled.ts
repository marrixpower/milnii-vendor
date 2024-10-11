import { DefaultContainer } from "shared/DefaultContainer";
import { COLORS } from "shared/enums";
import styled from "styled-components";

export const Container = styled(DefaultContainer).attrs({
  $flexDirection: "column",
  $alignItems: "flex-start",
  $gap: "5px",
  $margin: "0 0 40px 0",
})``;

export const H1 = styled.p`
  width: 100%;

  font-size: 16px;
  font-weight: 700;
  text-align: left;

  span {
    display: block;

    font-size: 11px;
    font-weight: 500;
    text-align: left;

    margin-top: 5px;

    line-height: 18px;

    color: ${COLORS.grey_979797};
  }
`;
