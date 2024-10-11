import styled from "styled-components";
import { StyledButtonProps } from "./types";

export const StyledButton = styled.button<Partial<StyledButtonProps>>`
  display: flex;
  align-items: center;
  justify-content: center;
  outline: none;

  background-color: ${({ $backgroundColor }) => $backgroundColor};

  color: ${({ $color }) => $color};

  width: ${({ $width }) => $width};
  height: ${({ $height }) => $height};

  border: ${({ $border }) => $border};
  border-radius: 8px;

  cursor: pointer;

  font-weight: 600;

  &:disabled {
    cursor: not-allowed;
    pointer-events: none;
  }
`;

export const StyledLinkButton = styled.a<Partial<StyledButtonProps>>`
  display: flex;
  align-items: center;
  justify-content: center;

  background-color: ${({ $backgroundColor }) => $backgroundColor};

  color: ${({ $color }) => $color};

  width: ${({ $width }) => $width};
  height: ${({ $height }) => $height};

  border: ${({ $border }) => $border};
  border-radius: 8px;

  cursor: pointer;

  font-weight: 600;
`;
