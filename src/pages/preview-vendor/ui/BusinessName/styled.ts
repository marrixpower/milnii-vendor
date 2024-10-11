import { DefaultContainer } from "shared/DefaultContainer";
import { COLORS } from "shared/enums";
import styled from "styled-components";

export const Container = styled(DefaultContainer).attrs({
  $flexDirection: "column",
  $alignItems: "flex-start",
})``;

export const H1 = styled.p`
  font-size: 22px;
  font-weight: 700;
  line-height: 30.82px;
  text-align: left;

  @media (min-width: 768px) {
    font-size: 38px;
    line-height: 53.24px;
  }
`;

export const H2 = styled.p<{ $color?: string }>`
  font-size: 12px;
  font-weight: 500;
  text-align: left;

  color: ${({ $color }) => $color || COLORS.grey_7B7575};

  @media (min-width: 768px) {
    font-size: 18px;
  }
`;
