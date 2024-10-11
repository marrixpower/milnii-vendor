import { zodResolver } from "@hookform/resolvers/zod";
import { confirmationCodeSchema } from "app/schema";
import { ReactNode } from "react";
import { FormProvider, useForm } from "react-hook-form";
import { z } from "zod";

type ResetPasswordProps = {
  children: ReactNode;
};

export const ResetPassword = ({ children }: ResetPasswordProps) => {
  const methods = useForm<z.infer<typeof confirmationCodeSchema>>({
    resolver: zodResolver(confirmationCodeSchema),
  });

  return <FormProvider {...methods}>{children}</FormProvider>;
};
