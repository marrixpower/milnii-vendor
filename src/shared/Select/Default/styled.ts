import { GroupBase, StylesConfig } from "react-select";
import { DefaultContainer } from "shared/DefaultContainer";
import { COLORS } from "shared/enums";
import styled from "styled-components";

export const Container = styled(DefaultContainer).attrs({
  $flexDirection: "column",
  $position: "relative",
})``;

export const Error = styled.p`
  font-size: 14px;
  font-weight: 500;

  margin-top: 8px;

  color: ${COLORS.red_DD1919};
`;

export const selectStyles = ({
  $error,
}: {
  $error: string;
}): StylesConfig<unknown, boolean, GroupBase<unknown>> => ({
  control: (base, { isFocused }) => ({
    ...base,
    width: "235px",
    height: "44px",

    backgroundColor: "transparent",

    color: `${COLORS.black_313131}`,

    cursor: "pointer",

    borderRadius: "0",
    border: "none",
    borderBottom: $error ? "1px solid red" : `1px solid ${COLORS.black_313131}`,

    boxShadow: isFocused ? "none" : base.boxShadow,

    "&:hover": {
      borderBottom: $error
        ? "1px solid red"
        : `1px solid ${COLORS.black_313131}`,
    },

    "@media (min-width: 325px)": {
      width: "240px",
    },
    "@media (min-width: 375px)": {
      width: "290px",
    },
    "@media (min-width: 425px)": {
      width: "320px",
    },
    "@media (min-width: 500px)": {
      width: "385px",
    },
    "@media (min-width: 768px)": {
      width: "473px",
    },
  }),
  indicatorSeparator: (styles) => ({
    ...styles,
    display: "none",
  }),
  placeholder: (styles) => ({
    ...styles,
    fontSize: "13px",
    fontWeight: "400",
    textAlign: "left",

    color: `${COLORS.black_313131}`,
  }),
});
