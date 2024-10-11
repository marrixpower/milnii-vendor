import { createVendorSchema } from "app/schema";
import { useCallback, useMemo } from "react";
import { useFormContext } from "react-hook-form";
import { z } from "zod";
import { useCityName } from "./useCityName";

export const useAddress = () => {
  const { setValue, trigger, watch } =
    useFormContext<z.infer<typeof createVendorSchema>>();

  const { getCityName } = useCityName();

  const coordinates = useMemo(
    () => watch("coordinates") ?? { lat: 50.9077, lng: 34.7981 },
    [watch()]
  );
  const city = useMemo(() => watch("city"), [watch()]);

  const bounds = useMemo(() => {
    if (typeof google !== "undefined") {
      const latLngBounds = new google.maps.LatLngBounds(
        new google.maps.LatLng(coordinates.lat - 0.05, coordinates.lng - 0.05),
        new google.maps.LatLng(coordinates.lat + 0.05, coordinates.lng + 0.05)
      );

      return latLngBounds;
    }
    return undefined;
  }, [coordinates]);

  const onPlaceSelected = useCallback(
    (place: google.maps.places.PlaceResult) => {
      const addressComponents = place?.address_components;
      const selectedCity = addressComponents?.find((component) =>
        component.types.includes("locality")
      )?.long_name;

      if (selectedCity && selectedCity === city && place) {
        const streetAddress = getCityName(place)?.streetAddress as string;

        if (streetAddress) {
          setValue("address", streetAddress, { shouldValidate: true });
          trigger("address");
        }
      }
    },
    []
  );

  return { bounds, city, onPlaceSelected };
};
