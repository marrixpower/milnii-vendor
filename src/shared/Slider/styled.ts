import styled from "styled-components";
import { DefaultContainer } from "..";
import { COLORS } from "shared/enums";

export const Container = styled(DefaultContainer).attrs({
  $flexDirection: "column",
  $alignItems: "center",
  $justifyContent: "center",
  $gap: "10px",
})``;

export const SliderContainer = styled(DefaultContainer).attrs({
  $alignItems: "center",
  $justifyContent: "center",
  $gap: "30px",
})``;

export const Image = styled.img<{ $visible: boolean }>`
  object-fit: contain;

  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;

  transition: opacity 0.5s ease;
  opacity: ${({ $visible }) => ($visible ? 1 : 0)};

  @media (min-width: 900px) {
    max-width: 478px;
    max-height: 370px;
  }
`;

export const ImageContainer = styled.div`
  position: relative;
  width: 100%;
  height: 242px;
  overflow: hidden;
  max-width: 393px;

  @media (min-width: 900px) {
    height: 370px;
    max-width: 478px;
  }
`;

export const Button = styled.button`
  display: none;

  @media (min-width: 768px) {
    display: block;

    outline: none;
    border: 0;
    background-color: transparent;

    cursor: pointer;
  }
`;

export const DotsContainer = styled(DefaultContainer).attrs({
  $alignItems: "center",
  $justifyContent: "center",
})``;

export const Dot = styled.div<{ $filled?: boolean }>`
  display: inline-block;

  margin: 8px;

  width: 10px;
  height: 10px;

  border-radius: 50%;
  border: 0.75px solid ${COLORS.brown_A04A4A};

  background-color: ${({ $filled }) =>
    $filled ? COLORS.brown_A04A4A : "transparent"};

  @media (min-width: 768px) {
    margin: 10px;
  }
`;
