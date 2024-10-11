import { Inputs } from "shared/Inputs";
import { Container, H1 } from "./styled";
import { Controller, useFormContext } from "react-hook-form";
import { z } from "zod";
import { createVendorSchema } from "app/schema";

export const Description = () => {
  const { control } = useFormContext<z.infer<typeof createVendorSchema>>();

  return (
    <Container>
      <H1>
        Describe your business and services
        <span>Helpful tips here (word count, what to write, etc)</span>
      </H1>

      <Controller
        control={control}
        name="description"
        render={({ field, fieldState }) => (
          <Inputs.Textarea
            placeholder="Type here"
            $error={fieldState?.error?.message}
            {...field}
          />
        )}
      />
    </Container>
  );
};
