import { COLORS } from "shared/enums";
import { StyledButton } from "./styled";
import { ButtonProps } from "./types";

export const Button = ({
  $backgroundColor = "transparent",
  $height = "45px",
  $width = "100%",
  $color = COLORS.black_313131,
  $padding,
  $border = `1px solid ${COLORS.black_313131}`,
  onClick,
  children,
  href,
  ...props
}: ButtonProps) => {
  return (
    <StyledButton
      $width={$width}
      $height={$height}
      $backgroundColor={$backgroundColor}
      $color={$color}
      onClick={onClick}
      $padding={$padding}
      $border={$border}
      {...props}
    >
      {children}
    </StyledButton>
  );
};
