import { DefaultContainer } from "shared/DefaultContainer";
import { COLORS } from "shared/enums";
import styled from "styled-components";

export const Container = styled(DefaultContainer).attrs({
  $flexDirection: "column",
  $alignItems: "flex-start",
  $gap: "20px",
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

    line-height: 26px;

    color: ${COLORS.grey_979797};
  }
`;

export const MainImage = styled.img`
  object-fit: contain;

  max-width: 473px;
  height: 241px;

  width: 100%;

  border: 1px solid ${COLORS.black_313131};

  @media (min-width: 768px) {
    height: 291px;
  }

  cursor: pointer;
`;

export const Image = styled.img`
  object-fit: contain;

  max-width: 102px;
  height: 40px;

  width: 100%;

  border: 1px solid ${COLORS.black_313131};

  @media (min-width: 768px) {
    height: 63px;
  }

  cursor: pointer;
`;
