import { Button } from "shared/Button";
import { Background, Container, FormContainer, H1, H2, Logo } from "./styled";
import { COLORS, LINKS } from "shared/enums";
import { FormProvider, SubmitHandler, useForm } from "react-hook-form";
import {
  BusinessName,
  City,
  Country,
  Email,
  Password,
  PrivacyPolicy,
  VendorCategory,
} from "./ui";
import { zodResolver } from "@hookform/resolvers/zod";
import { createUserSchema } from "app/schema";
import { z } from "zod";
import { Service } from "features/index";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

export const SignUp = () => {
  const navigate = useNavigate();
  const methods = useForm<z.infer<typeof createUserSchema>>({
    resolver: zodResolver(createUserSchema),
    mode: "onChange",
  });
  const [isPending, setIsPending] = useState(false);

  const onSubmit: SubmitHandler<z.infer<typeof createUserSchema>> = async (
    data
  ) => {
    try {
      setIsPending(true);
      const { email, password, category, name, city, country } = data;

      await Service.Firebase.createUser({
        email,
        password,
        callback: async (success) => {
          if (!success) {
            setIsPending(false);

            return;
          }

          await Service.User.createUser({
            payload: { category: category?.value, name, city, country, email },
          });

          navigate(LINKS.add_vendor);
        },
      });
    } catch (error) {
      console.error(error);
      setIsPending(false);
    } finally {
      setIsPending(false);
    }
  };

  const handleKeyDown = (event: React.KeyboardEvent<HTMLFormElement>) => {
    if (event.key === "Enter") {
      event.preventDefault();
    }
  };

  return (
    <Background>
      <Container>
        <Logo src="/logo.svg" />

        <H1>Welcome! Let’s set up your Vendor account</H1>

        <FormProvider {...methods}>
          <FormContainer
            onSubmit={methods.handleSubmit(onSubmit)}
            onKeyDown={handleKeyDown}
          >
            <BusinessName />

            <VendorCategory />

            <Email />

            <Password />

            <Country />

            <City />

            <PrivacyPolicy />

            <Button
              $backgroundColor={COLORS.brown_A04A4A}
              $color={COLORS.beige_FDF1E6}
              $border={`1px solid ${COLORS.brown_A04A4A}`}
              $height="58px"
              disabled={isPending}
            >
              {isPending ? "Creating Account..." : "Create Account"}
            </Button>

            <H2 $light={true}>
              Already have an account? Go to{" "}
              <a href={`/#${LINKS.login}`}>Login</a>.
            </H2>
          </FormContainer>
        </FormProvider>
      </Container>
    </Background>
  );
};
