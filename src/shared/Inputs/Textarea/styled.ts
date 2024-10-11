import { COLORS } from "shared/enums";
import styled from "styled-components";
import { StyledTextareaProps } from "./types";

export const StyledTextarea = styled.textarea<StyledTextareaProps>`
  border: 1px solid ${COLORS.grey_ADADAD};
  outline: none;

  width: ${({ $width }) => $width};
  height: ${({ $height }) => $height};

  padding: 25px;

  &::placeholder {
    font-family: Montserrat;
    font-size: 13px;
    font-weight: 500;
    line-height: 15.85px;
    text-align: left;

    color: ${COLORS.black_313131};
  }

  border-radius: 10px;
`;

export const Error = styled.p`
  font-size: 14px;
  font-weight: 500;

  margin-top: 8px;

  color: ${COLORS.red_DD1919};
`;
