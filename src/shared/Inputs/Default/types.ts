import { InputHTMLAttributes } from "react";

export type DefaultProps = InputHTMLAttributes<HTMLInputElement> & {
  width: string;
  height: string;
  label: string;
  placeholder: string;
  $type: string;
  $error: string;
  $backgroundColor: string;
  $margin: string;
  $validation: boolean;
  $showValidation?: boolean;
};

export type InputProps = {
  $error: string;
  $backgroundColor: string;
};

export type LabelProps = {
  width: string;
};
