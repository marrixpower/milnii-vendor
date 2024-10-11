import { createVendorSchema } from "app/schema";
import { usePlacesWidget } from "react-google-autocomplete";
import { useFormContext } from "react-hook-form";
import { Inputs } from "shared/Inputs";
import { useAddress } from "shared/hooks";
import { z } from "zod";

const apiKey = import.meta.env.VITE_GOOGLE_MAPS_API_KEY;

export const StreetAddress = () => {
  const {
    formState: { errors },
    register,
  } = useFormContext<z.infer<typeof createVendorSchema>>();
  const { onPlaceSelected, city, bounds } = useAddress();

  const { ref: placeRef } = usePlacesWidget<HTMLInputElement>({
    apiKey,
    onPlaceSelected,
    options: {
      types: ["address"],
      bounds,
      strictBounds: true,
    },
  });

  return (
    <Inputs.Default
      {...register("address")}
      ref={placeRef}
      placeholder="Street address"
      $showValidation={false}
      $error={errors.address?.message}
      disabled={!city}
    />
  );
};
