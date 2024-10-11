import { ButtonHTMLAttributes, ReactNode } from "react";

export type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  $backgroundColor?: string;
  $width?: string;
  $height?: string;
  $color?: string;
  $padding?: string;
  $border?: string;
  children: string | ReactNode;
  href?: string;
};

export type StyledButtonProps = {
  $backgroundColor: string;
  $width: string;
  $height: string;
  $color: string;
  $padding?: string;
  $border?: string;
};
