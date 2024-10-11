import { useCallback, useMemo } from "react";
import {
  CheckedIcon,
  Container,
  H1,
  H2,
  H3,
  Icon,
  OptionContainer,
  OptionsContainer,
} from "./styled";
import { Checkbox } from "@mui/material";
import { useFormContext } from "react-hook-form";

type Option = { label: string; value: number };

const options = [
  { label: "$0 - $500", value: 0 },
  { label: "$500 - $1,000", value: 500 },
  { label: "$1,000 - $2,500", value: 1000 },
  { label: "$2,500 - $5,000", value: 2500 },
  { label: "$5,000 - $10,000", value: 5000 },
  { label: "$10,000 - $20,000", value: 10000 },
  { label: "$20,000 - $50,000", value: 20000 },
  { label: "$50,000+", value: 50000 },
];

export const PriceRange = () => {
  const { setValue, watch } = useFormContext();

  const chunkArray = useCallback((array: Option[], chunkSize: number) => {
    const result = [];
    for (let i = 0; i < array.length; i += chunkSize) {
      const chunk = array.slice(i, i + chunkSize);
      result.push(chunk);
    }
    return result;
  }, []);

  const price = useMemo(() => watch("price"), [watch()]);

  const handleOptionChange = (value: number) => {
    setValue("price", value);
  };

  const chunkedOptions = chunkArray(options, 2);

  return (
    <Container>
      <H1>
        Add Price Range
        <span>OPTIONAL</span>
      </H1>
      <H3>
        If applicable, let viewers know the general cost of your services.
      </H3>

      {chunkedOptions.map((options, index) => (
        <OptionsContainer key={index}>
          {options.map((option) => (
            <OptionContainer key={option.value}>
              <H2>{option.label}</H2>
              <Checkbox
                icon={<Icon />}
                checkedIcon={<CheckedIcon />}
                checked={price === option.value}
                onChange={() => handleOptionChange(option.value)}
              />
            </OptionContainer>
          ))}
        </OptionsContainer>
      ))}
    </Container>
  );
};
