import { createVendorSchema } from "app/schema";
import { Controller, useFormContext } from "react-hook-form";
import { z } from "zod";
import { Container, H1, H3 } from "./styled";
import { Inputs } from "shared/Inputs";

export const Email = () => {
  const { control } = useFormContext<z.infer<typeof createVendorSchema>>();

  return (
    <Container>
      <H1>
        Email
        <span>OPTIONAL</span>
      </H1>
      <H3>It will be used for future communication.</H3>

      <Controller
        control={control}
        name="email"
        render={({ field, fieldState }) => (
          <Inputs.Default
            placeholder="Enter email"
            $showValidation={false}
            $error={fieldState?.error?.message}
            {...field}
          />
        )}
      />
    </Container>
  );
};
