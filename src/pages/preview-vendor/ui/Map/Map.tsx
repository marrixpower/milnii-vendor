import { GoogleMap, MarkerF, useJsApiLoader } from "@react-google-maps/api";
import { useMemo } from "react";
import { useVendorContext } from "shared/hooks";
import { Container } from "./styled";

const apiKey = import.meta.env.VITE_GOOGLE_MAPS_API_KEY;

const containerStyle = {
  width: "100%",
  height: "100%",
};

export const Map = () => {
  const { vendor } = useVendorContext();

  const { isLoaded } = useJsApiLoader({
    id: "google-map-script",
    googleMapsApiKey: apiKey,
  });

  const center = useMemo(() => {
    if (vendor?.location?.coordinates) {
      return {
        lat: vendor.location.coordinates[1],
        lng: vendor.location.coordinates[0],
      };
    }

    return {
      lat: -3.745,
      lng: -38.523,
    };
  }, [vendor]);

  return isLoaded ? (
    <Container>
      <GoogleMap mapContainerStyle={containerStyle} center={center} zoom={10}>
        <MarkerF position={center} />
      </GoogleMap>
    </Container>
  ) : (
    <div>Loading...</div>
  );
};
