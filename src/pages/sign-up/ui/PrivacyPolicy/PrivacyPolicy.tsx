import { Checkbox } from "@mui/material";
import { createUserSchema } from "app/schema";
import { Controller, useFormContext } from "react-hook-form";
import { z } from "zod";
import { CheckedIcon, Container, Error, ErrorIcon, H3, Icon } from "./styled";

export const PrivacyPolicy = () => {
  const {
    control,
    setValue,
    trigger,
    formState: { errors },
  } = useFormContext<z.infer<typeof createUserSchema>>();

  return (
    <>
      <Container>
        <Controller
          name="privacyPolicy"
          control={control}
          render={({ field, fieldState }) => (
            <Checkbox
              icon={fieldState.invalid ? <ErrorIcon /> : <Icon />}
              checkedIcon={<CheckedIcon />}
              checked={field.value}
              onChange={(e) => {
                const isChecked = e.target.checked;
                setValue("privacyPolicy", isChecked, {
                  shouldValidate: true,
                });
                trigger("privacyPolicy");
              }}
            />
          )}
        />

        <H3>I accept Milnii’s Terms of use and Privacy policy</H3>
      </Container>

      {errors?.privacyPolicy?.message && (
        <Error>{errors?.privacyPolicy?.message}</Error>
      )}
    </>
  );
};
