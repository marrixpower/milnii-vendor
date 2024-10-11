import { IoCheckmark } from "react-icons/io5";
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

export const H2 = styled.p`
  font-size: 13px;
  font-weight: 400;
  line-height: 15px;
  text-align: left;

  color: ${COLORS.black_313131};
`;

export const OptionContainer = styled.div`
  width: 100%;

  border-bottom: 1px solid ${COLORS.black_313131};

  display: flex;
  justify-content: space-between;
  align-items: center;

  @media (min-width: 768px) {
    max-width: 214px;
  }
`;

export const OptionsContainer = styled(DefaultContainer).attrs({
  $flexDirection: "column",
  $gap: "5px",
})`
  @media (min-width: 600px) {
    flex-direction: row;
    justify-content: space-between;
  }
`;

export const Icon = styled.div`
  width: 18px;
  height: 18px;

  border-radius: 4px;
  border: 1.5px solid ${COLORS.grey_828282};
`;

export const CheckedIcon = styled(IoCheckmark)`
  width: 18px;
  height: 18px;

  border-radius: 4px;
  border: 0;

  background-color: ${COLORS.grey_828282};
  color: white;
`;
