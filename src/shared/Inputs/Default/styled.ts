import styled from "styled-components";
import { InputProps, LabelProps } from "./types";
import { COLORS } from "shared/enums";
import { DefaultContainer } from "shared/DefaultContainer";
import { RxCross2 } from "react-icons/rx";
import { IoCheckmarkOutline } from "react-icons/io5";

export const Container = styled(DefaultContainer).attrs({
  $flexDirection: "column",
  $position: "relative",
})``;

export const Label = styled.label<Partial<LabelProps>>`
  position: relative;
  display: flex;
  flex-direction: column;
  top: 0;
  width: ${({ width }) => width};
  color: ${COLORS.black_313131};

  span {
    margin-bottom: 8px;
    font-size: 16px;
    font-weight: 600;
  }
`;

export const Input = styled.input<InputProps>`
  box-sizing: border-box;
  display: block;
  outline: none;
  border: 0;

  border-bottom: ${({ $error }) =>
    !$error
      ? `1px solid ${COLORS.black_313131}`
      : `1px solid ${COLORS.red_DD1919}`};

  height: ${({ height }) => height};
  width: ${({ width }) => width};

  padding: 10px 12px;

  color: ${COLORS.black_313131};
  background-color: ${({ $backgroundColor }) => $backgroundColor};

  font-size: ${(props) => (props.type === "password" ? "14px" : "16px")};
  line-height: normal;

  &::placeholder {
    font-size: 13px;
    font-weight: 400;
    text-align: left;

    color: ${COLORS.black_313131};
  }

  &:focus {
    transition: 0.3s;

    border-bottom: 1px solid
      ${({ $error }) =>
        !$error ? `${COLORS.black_313131}` : `${COLORS.red_DD1919}`};
  }
`;

export const Span = styled.span`
  margin-bottom: 8px;
  font-size: 16px;
  font-weight: 500;
`;

export const ShowPasswordButton = styled.button<{ $error?: string }>`
  border: none;

  background-color: transparent;

  position: absolute;
  right: 20px;
  top: 25%;

  cursor: pointer;

  opacity: 0.5;

  font-size: 12px;

  svg {
    width: 20px;
    height: 20px;
  }
`;

export const Error = styled.p`
  font-size: 14px;
  font-weight: 500;

  margin-top: 8px;

  color: ${COLORS.red_DD1919};
`;

export const ValidationContainer = styled.div`
  width: 18px;
  height: 18px;

  border-radius: 5px;
  border: 1px solid ${COLORS.black_313131};

  position: absolute;
  top: 25%;
  right: 0px;
`;

export const Cross = styled(RxCross2)`
  width: 16px;
  height: 16px;

  border-radius: 5px;
  border: 0;

  background-color: transparent;
  color: ${COLORS.red_DD1919};
`;

export const Mark = styled(IoCheckmarkOutline)`
  width: 16px;
  height: 16px;

  border-radius: 5px;
  border: 0;

  background-color: transparent;
  color: ${COLORS.green_198F51};
`;
