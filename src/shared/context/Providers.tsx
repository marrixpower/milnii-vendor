import { ReactNode } from "react";
import { ResetPassword } from "./ResetPassword";
import { VendorProvider } from "./Vendor";

type ProvidersProps = {
  children: ReactNode;
};

const providers = [ResetPassword, VendorProvider];

export const Providers = ({ children }: ProvidersProps) => {
  return (
    <>
      {providers.reduceRight((prev, CurrentProvider) => {
        return <CurrentProvider>{prev}</CurrentProvider>;
      }, children)}
    </>
  );
};
