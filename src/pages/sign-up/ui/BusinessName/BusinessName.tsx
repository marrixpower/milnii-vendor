import { createUserSchema } from "app/schema";
import { Controller, useFormContext } from "react-hook-form";
import { Inputs } from "shared/Inputs";
import { z } from "zod";

export const BusinessName = () => {
  const { control } = useFormContext<z.infer<typeof createUserSchema>>();

  return (
    <>
      <Controller
        name="name"
        control={control}
        render={({ field, fieldState }) => (
          <Inputs.Default
            placeholder="Business Name"
            $validation={!fieldState?.invalid}
            $error={fieldState?.error?.message}
            {...field}
          />
        )}
      />
    </>
  );
};
