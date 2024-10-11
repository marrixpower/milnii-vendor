import { Container, H1 } from "./styled";
import { Controller, useFormContext } from "react-hook-form";
import { z } from "zod";
import { createVendorSchema } from "app/schema";
import { Select } from "shared/Select";
import { useGetCategories } from "features/categories";

export const VendorCategory = () => {
  const { control } = useFormContext<z.infer<typeof createVendorSchema>>();
  const { categories } = useGetCategories({ limit: "50" });
  const categoriesOptions =
    categories?.docs?.map((item) => ({
      label: item.name?.find((el) => el.lang === "en")?.value || "",
      value: item._id,
    })) || [];

  return (
    <Container>
      <H1>
        Vendor Category
        <span>Select one of the options that best describes your business</span>
      </H1>

      <Controller
        control={control}
        name="category"
        render={({ field, fieldState }) => (
          <Select.Default
            options={categoriesOptions}
            $error={fieldState.error?.message}
            placeholder="Category..."
            {...field}
          />
        )}
      />
    </Container>
  );
};
