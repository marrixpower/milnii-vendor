import { createVendorSchema } from "app/schema";
import { usePlacesWidget } from "react-google-autocomplete";
import { Controller, useFormContext } from "react-hook-form";
import { Inputs } from "shared/Inputs";
import { useCityName } from "shared/hooks";
import { z } from "zod";
import { useEffect } from "react";

const apiKey = import.meta.env.VITE_GOOGLE_MAPS_API_KEY;

export const City = () => {
  const { control, setValue, trigger, watch } =
    useFormContext<z.infer<typeof createVendorSchema>>();
  const { getCityName } = useCityName();

  const cityValue = watch("city");

  useEffect(() => {
    if (!cityValue) {
      setValue("address", "", { shouldValidate: true });
      trigger("address");
    }
  }, [cityValue, setValue, trigger]);

  const { ref: placeRef } = usePlacesWidget<HTMLInputElement>({
    apiKey,
    onPlaceSelected: (place) => {
      const cityName = getCityName(place)?.city as string;

      if (cityName) {
        setValue("city", cityName, { shouldValidate: true });
        setValue(
          "coordinates",
          {
            lng: place.geometry?.location?.lng() ?? 0,
            lat: place.geometry?.location?.lat() ?? 0,
          },
          { shouldValidate: true }
        );
        trigger("city");
      }
    },
    options: {
      types: ["(cities)"],
    },
  });

  return (
    <Controller
      name="city"
      control={control}
      render={({ field: { value, onChange }, fieldState }) => (
        <Inputs.Default
          ref={placeRef}
          placeholder="City"
          $showValidation={false}
          $error={fieldState.error?.message}
          value={value}
          onChange={onChange}
        />
      )}
    />
  );
};
