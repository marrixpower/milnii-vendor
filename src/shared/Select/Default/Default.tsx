import { Container, Error, selectStyles } from "./styled";
import { DefaultProps } from "./types";
import Select from "react-select";

export const Default = ({
  options,
  onChange,
  value,
  $error = "",
  placeholder,
}: DefaultProps) => {
  return (
    <Container>
      <Select
        styles={selectStyles({ $error })}
        value={value}
        options={options}
        onChange={onChange}
        placeholder={placeholder}
      />

      {$error && <Error>{$error}</Error>}
    </Container>
  );
};
