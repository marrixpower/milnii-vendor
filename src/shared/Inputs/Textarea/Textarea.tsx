import { ChangeEventHandler } from "react";
import { Error, StyledTextarea } from "./styled";

type TextareaProps = {
  value?: string;
  onChange?: ChangeEventHandler<HTMLTextAreaElement>;
  placeholder?: string;
  $width?: string;
  $height?: string;
  $error?: string;
};

export const Textarea = ({
  value,
  placeholder,
  onChange,
  $width = "100%",
  $height = "290px",
  $error,
}: TextareaProps) => {
  return (
    <>
      <StyledTextarea
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        $width={$width}
        $height={$height}
      />

      {$error && <Error>{$error}</Error>}
    </>
  );
};
