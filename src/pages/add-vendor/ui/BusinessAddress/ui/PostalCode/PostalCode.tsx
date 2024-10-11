import { createVendorSchema } from "app/schema";
import { useFormContext } from "react-hook-form";
import { Inputs } from "shared/Inputs";
import { z } from "zod";

export const PostalCode = () => {
  const {
    register,
    formState: { errors },
  } = useFormContext<z.infer<typeof createVendorSchema>>();

  return (
    <Inputs.Default
      placeholder="Postal Code"
      $showValidation={false}
      {...register("postalCode")}
      $error={errors.postalCode?.message}
    />
  );
};
