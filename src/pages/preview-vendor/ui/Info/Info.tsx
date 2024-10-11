import { useVendorContext } from "shared/hooks";
import { Container, H3, Icon, Line, TextContainer } from "./styled";
import { PriceRange } from "shared/consts";

export const Info = () => {
  const { vendor } = useVendorContext();

  const price = PriceRange.find((item) => item.value == vendor?.price);

  return (
    <Container>
      <Line />

      <TextContainer>
        <Icon src="/preview-vendor-icon.svg" alt="Icon" />

        <H3>Prices range from {price?.label}</H3>
      </TextContainer>

      <TextContainer>
        <Icon src="/preview-vendor-icon.svg" alt="Icon" />

        <H3>
          Visit{" "}
          <a href={vendor?.site} target="_blank" rel="noopener noreferrer">
            www.{vendor?.site.split("//")[1]}
          </a>{" "}
          for more details
        </H3>
      </TextContainer>
    </Container>
  );
};
