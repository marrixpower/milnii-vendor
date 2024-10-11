export type Option = Record<"value" | "label", string>;

export type DefaultProps = {
  value: Option;
  options: Option[];
  onChange?: (option: unknown) => void;
  $error?: string;
  placeholder?: string;
};

export type SelectProps = {
  $width: string;
  $height: string;
  $error: string;
};
