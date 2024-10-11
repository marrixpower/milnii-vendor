import { Slider } from "shared/Slider";
import { useVendorContext } from "shared/hooks";

const API = import.meta.env.VITE_BASE_URL;

export const Photos = () => {
  const { vendor } = useVendorContext();

  return (
    <>
      {vendor?.images && (
        <Slider
          photos={vendor?.images.map((item) => `${API}public/business/${item}`)}
        />
      )}
    </>
  );
};
