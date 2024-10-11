import { useCallback } from "react";

export const useCityName = () => {
  const getCityName = useCallback((place: google.maps.places.PlaceResult) => {
    if (!place.address_components) return undefined;

    const locality = place.address_components.find((component) =>
      component.types.includes("locality")
    );
    const administrativeArea = place.address_components.find((component) =>
      component.types.includes("administrative_area_level_2")
    );
    const streetNumber = place.address_components.find((component) =>
      component.types.includes("street_number")
    );
    const streetName = place.address_components.find((component) =>
      component.types.includes("route")
    );

    const fullStreetAddress = `${streetNumber?.long_name || ""} ${
      streetName?.long_name || ""
    }`.trim();

    return {
      city: locality?.long_name || administrativeArea?.long_name,
      streetAddress: fullStreetAddress,
    };
  }, []);

  return { getCityName };
};
