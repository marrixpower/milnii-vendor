import { createVendorSchema } from "app/schema";
import { Service } from "features/index";
import { TransitionStartFunction, useCallback } from "react";
import { UseFormReturn } from "react-hook-form";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import { LINKS } from "shared/enums";
import { z } from "zod";

type UseModalProps = {
  methods: UseFormReturn<
    z.infer<typeof createVendorSchema> & { images: string[] }
  >;
  images: File[];
  startTransition: TransitionStartFunction;
  id: string | null;
};

export const useModal = ({
  methods,
  images,
  startTransition,
  id,
}: UseModalProps) => {
  const navigate = useNavigate();

  const closeModal = useCallback(async () => {
    const data = methods.getValues();

    try {
      const payload = {
        name: data?.name,
        city: data?.city,
        ...(data?.address ? { address: data.address } : {}),
        ...(data?.postalCode ? { postalCode: data.postalCode } : {}),
        phone: data?.phone,
        category: data?.category?.value,
        ...(data?.booking ? { booking: data?.booking } : {}),
        site: data?.site,
        ...(data?.price ? { price: data.price } : {}),
        ...(data?.email ? { email: data.email } : {}),
        description: data?.description,
        location: {
          type: "Point",
          coordinates: [data?.coordinates?.lng, data?.coordinates.lat],
        },
      };

      const photos = new FormData();

      if (id) {
        const filteredImages = images.filter(
          (entry) => entry !== undefined && entry !== null
        );

        filteredImages.forEach((file) => {
          photos.append(`images`, file, file.name);
        });

        data?.images?.map((image) => {
          photos.append(`oldImages[]`, image);
        });

        const { _id } = await Service.Business.updateBusiness({
          _id: id,
          data: payload,
        });
        _id && (await Service.Business.addPhotos({ _id, data: photos }));

        startTransition(() => {
          toast.success("Vendor successfuly added!");
          navigate(`${LINKS.preview_vendor}/${_id}`);
        });

        return;
      }

      if (images.length > 0) {
        images
          .filter((entry) => entry !== undefined && entry !== null)
          .forEach((file) => {
            file && photos.append(`images`, file, file.name);
          });
      }

      const { _id } = await Service.Business.createBusiness({
        data: payload,
      });

      if (_id) {
        await Service.Business.addPhotos({ _id, data: photos });
      }

      startTransition(() => {
        toast.success("Vendor successfuly added!");
        navigate(`${LINKS.preview_vendor}/${_id}`);
      });
    } catch (error) {
      console.error(error);
    }
  }, [methods, images, id, navigate, startTransition]);

  return { closeModal };
};
