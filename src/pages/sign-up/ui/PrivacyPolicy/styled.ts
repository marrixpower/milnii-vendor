import { IoCheckmark } from "react-icons/io5";
import { DefaultContainer } from "shared/DefaultContainer";
import { COLORS } from "shared/enums";
import styled from "styled-components";

export const Icon = styled.div`
  width: 16px;
  height: 16px;

  border-radius: 4px;
  border: 1.5px solid ${COLORS.grey_828282};
`;

export const ErrorIcon = styled.div`
  width: 16px;
  height: 16px;

  border-radius: 4px;
  border: 1.5px solid ${COLORS.red_DD1919};
`;

export const CheckedIcon = styled(IoCheckmark)`
  width: 16px;
  height: 16px;

  border-radius: 4px;
  border: 0;

  background-color: ${COLORS.grey_828282};
  color: ${COLORS.beige_FDF1E6};
`;

export const Container = styled(DefaultContainer).attrs({
  $alignItems: "center",
  $justifyContent: "flex-start",
})``;

export const H3 = styled.p`
  font-size: 12px;
  font-weight: 400;
  line-height: 13.41px;
  text-align: left;

  color: ${COLORS.grey_828282};
`;

export const Error = styled.p`
  font-size: 14px;
  font-weight: 500;

  color: ${COLORS.red_DD1919};
`;
