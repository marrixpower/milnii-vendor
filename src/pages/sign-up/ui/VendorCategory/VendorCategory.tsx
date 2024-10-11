import { createUserSchema } from "app/schema";
import { useGetCategories } from "features/categories";
import { Controller, useFormContext } from "react-hook-form";
import { Select } from "shared/Select";
import { z } from "zod";

export const VendorCategory = () => {
  const { control } = useFormContext<z.infer<typeof createUserSchema>>();

  const { categories } = useGetCategories({ limit: "50" });
  const categoriesOptions =
    categories?.docs?.map((item) => ({
      label: item.name?.find((el) => el.lang === "en")?.value || "",
      value: item._id,
    })) || [];

  return (
    <>
      <Controller
        control={control}
        name="category"
        render={({ field, fieldState }) => (
          <Select.Default
            options={categoriesOptions}
            $error={fieldState.error?.message}
            placeholder="Vendor Category"
            {...field}
          />
        )}
      />
    </>
  );
};
