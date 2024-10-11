import { createUserSchema } from "app/schema";
import { Controller, useFormContext } from "react-hook-form";
import { Inputs } from "shared/Inputs";
import { z } from "zod";

export const Password = () => {
  const { control } = useFormContext<z.infer<typeof createUserSchema>>();

  return (
    <>
      <Controller
        name="password"
        control={control}
        render={({ field, fieldState }) => (
          <Inputs.Default
            placeholder="Password"
            $type="password"
            $validation={!fieldState?.invalid}
            $error={fieldState?.error?.message}
            {...field}
          />
        )}
      />
    </>
  );
};
