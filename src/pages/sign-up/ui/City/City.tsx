import { createUserSchema } from "app/schema";
import { useEffect, useMemo } from "react";
import { usePlacesWidget } from "react-google-autocomplete";
import { Controller, useFormContext } from "react-hook-form";
import { Inputs } from "shared/Inputs";
import { useCityName } from "shared/hooks";
import { z } from "zod";

const apiKey = import.meta.env.VITE_GOOGLE_MAPS_API_KEY;

export const City = () => {
  const { control, watch, setValue, trigger } =
    useFormContext<z.infer<typeof createUserSchema>>();
  const { getCityName } = useCityName();

  const country = useMemo(() => watch("countryCode"), [watch()]);

  const { ref: placeRef, autocompleteRef } = usePlacesWidget<HTMLInputElement>({
    apiKey,
    onPlaceSelected: (place) => {
      const cityName = getCityName(place)?.city;

      if (cityName) {
        setValue("city", cityName, { shouldValidate: true });

        trigger("city");
      }
    },
    options: {
      types: ["(cities)"],
      ...(country ? { componentRestrictions: { country } } : {}),
    },
    language: "en",
  });

  useEffect(() => {
    if (autocompleteRef.current) {
      autocompleteRef.current.setComponentRestrictions(
        country ? { country } : { country: "" }
      );
    }
  }, [country, autocompleteRef]);

  return (
    <Controller
      name="city"
      control={control}
      render={({ field: { value, onChange }, fieldState }) => (
        <Inputs.Default
          ref={placeRef}
          placeholder="City / Town"
          $validation={!fieldState.invalid}
          $error={fieldState.error?.message}
          value={value}
          onChange={onChange}
          disabled={!country}
        />
      )}
    />
  );
};
