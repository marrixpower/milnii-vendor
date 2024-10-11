import { Button } from "shared/Button";
import {
  Background,
  ExampleButton,
  Container,
  H1,
  H2,
  Header,
  Logo,
  Form,
} from "./styled";
import {
  BookingLink,
  BusinessAddress,
  BusinessName,
  BusinessPhone,
  Description,
  SubmitModal,
  PriceRange,
  VendorCategory,
  WebsiteURL,
  Images,
  Email,
} from "./ui";
import { COLORS, LINKS } from "shared/enums";
import { useEffect, useState, useTransition } from "react";
import { FormProvider, SubmitHandler, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { createVendorSchema } from "app/schema";
import { z } from "zod";
import { useLocation, useNavigate } from "react-router-dom";
import toast from "react-hot-toast";
import { setDefaultData, useModal } from "./hooks";
import useSWR from "swr";
import { Service } from "features/index";
import { useGetCategories } from "features/categories";

export const AddVendor = () => {
  const navigate = useNavigate();
  const methods = useForm<
    z.infer<typeof createVendorSchema> & { images: string[] }
  >({
    mode: "onChange",
    resolver: zodResolver(createVendorSchema),
  });

  const [isOpen, setOpen] = useState<boolean>(false);
  const [images, setImages] = useState<File[]>([]);
  const [isPending, startTransition] = useTransition();

  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const id = queryParams.get("id");

  const { data } = useSWR(
    id ? ["get-vendor", { _id: id }] : null,
    ([, params]) => Service.Business.getBusiness(params)
  );
  const { categories } = useGetCategories({ limit: "50" });

  const { closeModal } = useModal({ methods, images, startTransition, id });

  const onSubmit: SubmitHandler<
    z.infer<typeof createVendorSchema>
  > = async () => {
    if (images.length == 0 && data?.images?.length == 0) {
      toast.error("Select at least 1 image");
      return;
    }
    setOpen(true);
  };

  const handleKeyDown = (event: React.KeyboardEvent<HTMLDivElement>) => {
    if (event.key === "Enter") {
      event.preventDefault();
    }
  };

  useEffect(() => {
    if (categories) {
      methods.reset(setDefaultData(data, categories));
    }
  }, [categories, data, methods]);

  return (
    <Background>
      <Header>
        <Logo src="/logo.svg" alt="Logo" />

        {id && (
          <ExampleButton
            onClick={() => navigate(`${LINKS.preview_vendor}/${id}`)}
          >
            <H2>View Example Profile</H2>
          </ExampleButton>
        )}
      </Header>
      <Container>
        <H1>
          Set up your Vendor profile
          <span>Please fill out the form below to create your profile.</span>
        </H1>

        <FormProvider {...methods}>
          <Form
            onSubmit={methods.handleSubmit(onSubmit)}
            onKeyDown={handleKeyDown}
          >
            <BusinessName />

            <BusinessAddress />

            <BusinessPhone />

            <Email />

            <VendorCategory />

            <BookingLink />

            <WebsiteURL />

            <Images data={data} images={images} setImages={setImages} />

            <PriceRange />

            <Description />

            <Button
              $backgroundColor={COLORS.brown_A04A4A}
              $color={COLORS.beige_FDF1E6}
              $border={`1px solid ${COLORS.brown_A04A4A}`}
              disabled={isPending}
            >
              Submit Account for Review
            </Button>
          </Form>
        </FormProvider>

        <SubmitModal
          isOpen={isOpen}
          setOpen={setOpen}
          closeModal={closeModal}
        />
      </Container>
    </Background>
  );
};
