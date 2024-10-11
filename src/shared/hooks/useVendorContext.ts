import { useContext } from "react";
import { VendorContext } from "shared/context/Vendor";

export const useVendorContext = () => {
  const context = useContext(VendorContext);

  if (!context) {
    throw new Error("useVendorContext must be used within a VendorProvider");
  }

  return context;
};
