import { GetBusiness } from "features/business";
import { useCallback } from "react";

type PersistBusiness = {
  business: GetBusiness;
};

export const usePersistBusiness = () => {
  const persistBusiness = useCallback(({ business }: PersistBusiness) => {
    localStorage.setItem("business", JSON.stringify(business));
  }, []);

  const getBusiness = useCallback((): GetBusiness | null => {
    const business = localStorage.getItem("business");

    if (business) {
      return JSON.parse(business);
    }

    return null;
  }, []);

  const clearBusiness = useCallback(() => {
    localStorage.removeItem("business");
  }, []);

  return { persistBusiness, getBusiness, clearBusiness };
};
