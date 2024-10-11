import { Inputs } from "shared/Inputs";
import { Container, H1 } from "./styled";
import { Controller, useFormContext } from "react-hook-form";
import { z } from "zod";
import { createVendorSchema } from "app/schema";

export const BookingLink = () => {
  const { control } = useFormContext<z.infer<typeof createVendorSchema>>();

  return (
    <Container>
      <H1>
        Booking Link
        <span>
          This link should be the homepage of your business, it can be your
          website or primary social media account.
        </span>
      </H1>

      <Controller
        control={control}
        name="booking"
        render={({ field, fieldState }) => (
          <Inputs.Default
            placeholder="Add booking link"
            $showValidation={false}
            $error={fieldState?.error?.message}
            {...field}
          />
        )}
      />
    </Container>
  );
};
