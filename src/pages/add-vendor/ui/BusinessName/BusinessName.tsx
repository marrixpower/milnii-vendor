import { Inputs } from "shared/Inputs";
import { Container, H1 } from "./styled";
import { Controller, useFormContext } from "react-hook-form";
import { createVendorSchema } from "app/schema";
import { z } from "zod";

export const BusinessName = () => {
  const { control } = useFormContext<z.infer<typeof createVendorSchema>>();

  return (
    <Container>
      <H1>
        Business Name
        <span>This is what will be displayed on the app</span>
      </H1>

      <Controller
        name="name"
        control={control}
        render={({ field, fieldState }) => (
          <Inputs.Default
            placeholder="Company Name Here"
            $showValidation={false}
            $error={fieldState?.error?.message}
            {...field}
          />
        )}
      />
    </Container>
  );
};
