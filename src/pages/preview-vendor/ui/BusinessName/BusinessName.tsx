import { COLORS } from "shared/enums";
import { Container, H1, H2 } from "./styled";
import { useVendorContext } from "shared/hooks";
import { useMemo } from "react";

export const BusinessName = () => {
  const { vendor } = useVendorContext();

  const address = useMemo(() => {
    if (!vendor?.address) {
      return vendor?.city;
    }

    return vendor?.city + ", " + vendor?.address;
  }, [vendor]);

  return (
    <Container>
      <H1>{vendor?.name}</H1>

      <H2>{address}</H2>
      <H2 $color={COLORS.brown_A04A4A}>{vendor?.phone}</H2>
    </Container>
  );
};
