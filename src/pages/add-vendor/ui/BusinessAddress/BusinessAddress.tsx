import { Container, H1 } from "./styled";
import { City, PostalCode, StreetAddress } from "./ui";

export const BusinessAddress = () => {
  return (
    <Container>
      <H1>
        Business Address
        <span>
          This is what will be displayed on the app. Your storefront features
          information about your business to attract and convert our audience of
          engaged couples
        </span>
      </H1>

      <City />

      <StreetAddress />

      <PostalCode />
    </Container>
  );
};
