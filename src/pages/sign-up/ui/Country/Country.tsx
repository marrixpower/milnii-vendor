import { createUserSchema } from "app/schema";
import { debounce } from "lodash";
import { usePlacesWidget } from "react-google-autocomplete";
import { Controller, useFormContext } from "react-hook-form";
import { Inputs } from "shared/Inputs";
import { z } from "zod";

const apiKey = import.meta.env.VITE_GOOGLE_MAPS_API_KEY;

export const Country = () => {
  const { control, setValue, trigger, resetField } =
    useFormContext<z.infer<typeof createUserSchema>>();

  const { ref: placeRef } = usePlacesWidget<HTMLInputElement>({
    apiKey,
    onPlaceSelected: debounce((place) => {
      if (place?.formatted_address) {
        resetField("city");
        setValue("country", place?.formatted_address, { shouldValidate: true });

        const countryCode = place?.address_components?.find((component: any) =>
          component.types.includes("country")
        )?.short_name;

        if (countryCode) setValue("countryCode", countryCode);

        trigger("country");
      }
    }, 300),
    options: {
      types: ["country"],
    },
    language: "en",
  });

  return (
    <Controller
      name="country"
      control={control}
      render={({ field: { value, onChange }, fieldState }) => (
        <Inputs.Default
          ref={placeRef}
          placeholder="Country"
          $validation={!fieldState.invalid}
          $error={fieldState.error?.message}
          value={value}
          onChange={onChange}
        />
      )}
    />
  );
};
