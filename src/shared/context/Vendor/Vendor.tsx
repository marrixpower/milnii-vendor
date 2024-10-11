import { GetBusiness } from "features/business";
import {
  Dispatch,
  ReactNode,
  SetStateAction,
  createContext,
  useState,
} from "react";

type VendorContext = {
  vendor: GetBusiness | null;
  setVendor: Dispatch<SetStateAction<GetBusiness | null>>;
};

export const VendorContext = createContext<VendorContext | null>(null);

type VendorProvider = {
  children: ReactNode;
};

export const VendorProvider = ({ children }: VendorProvider) => {
  const [vendor, setVendor] = useState<GetBusiness | null>(null);

  return (
    <VendorContext.Provider
      value={{
        vendor,
        setVendor,
      }}
    >
      {children}
    </VendorContext.Provider>
  );
};
