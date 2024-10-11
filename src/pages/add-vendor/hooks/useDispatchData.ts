import { GetBusiness } from "features/business";
import { TCategoryResponse } from "features/categories";
import { useMemo } from "react";

type UseDispatchData = {
  data: GetBusiness | undefined;
  categoriesOptions: {
    label: string;
    value: string;
  }[];
};

export const useDispatchData = ({
  data,
  categoriesOptions,
}: UseDispatchData) => {
  const dispatchedData = useMemo(() => {
    if (!data) {
      return {
        name: "",
        city: "",
        phone: "",
        category: { label: "", value: "" },
        booking: "",
        site: "",
        description: "",
      };
    }

    const category = categoriesOptions.find(
      (item) => item.value == data.category._id
    );

    return {
      name: data?.name,
      city: data?.city,
      ...(data?.address ? { address: data.address } : {}),
      ...(data?.postalCode ? { postalCode: data.postalCode } : {}),
      phone: data?.phone,
      category: category || undefined,
      ...(data?.booking ? { booking: data?.booking } : {}),
      ...(data?.email ? { email: data?.email } : {}),
      site: data?.site,
      ...(data?.price ? { price: data.price } : {}),
      description: data?.description,
      coordinates: {
        lng: data.location.coordinates[0],
        lat: data?.location?.coordinates[1],
      },
      images: data.images,
    };
  }, [categoriesOptions, data]);

  return { dispatchedData };
};

export const setDefaultData = (
  data?: GetBusiness,
  categories?: TCategoryResponse
) => {
  if (!data) {
    return {
      name: "",
      city: "",
      phone: "",
      category: { label: "", value: "" },
      booking: "",
      site: "",
      description: "",
    };
  }

  const categoriesOptions =
    categories?.docs?.map((item) => ({
      label: item.name?.find((el) => el.lang === "en")?.value || "",
      value: item._id,
    })) || [];

  const category = categoriesOptions.find(
    (item) => item.value == data.category._id
  );

  return {
    name: data?.name,
    city: data?.city,
    ...(data?.address ? { address: data.address } : {}),
    ...(data?.postalCode ? { postalCode: data.postalCode } : {}),
    phone: data?.phone,
    category,
    ...(data?.booking ? { booking: data?.booking } : {}),
    ...(data?.email ? { email: data?.email } : {}),
    site: data?.site,
    ...(data?.price ? { price: data.price } : {}),
    description: data?.description,
    coordinates: {
      lng: data.location.coordinates[0],
      lat: data?.location?.coordinates[1],
    },
    images: data.images,
  };
};
