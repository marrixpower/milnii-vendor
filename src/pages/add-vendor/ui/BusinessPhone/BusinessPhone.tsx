import { Inputs } from "shared/Inputs";
import { Container, H1 } from "./styled";
import { Controller, useFormContext } from "react-hook-form";
import { z } from "zod";
import { createVendorSchema } from "app/schema";

export const BusinessPhone = () => {
  const { control } = useFormContext<z.infer<typeof createVendorSchema>>();

  return (
    <Container>
      <H1>
        Business Phone
        <span>This is what will be displayed on the app</span>
      </H1>

      <Controller
        control={control}
        name="phone"
        render={({ field, fieldState }) => (
          <Inputs.Default
            placeholder="Phone"
            $showValidation={false}
            $error={fieldState?.error?.message}
            {...field}
          />
        )}
      />
    </Container>
  );
};
