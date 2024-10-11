import { Inputs } from "shared/Inputs";
import { Background, Container, Form, H1, H2, H3, Logo } from "./styled";
import { Button } from "shared/Button";
import { COLORS, LINKS } from "shared/enums";
import { useNavigate } from "react-router-dom";
import { Controller, SubmitHandler, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { loginUserSchema } from "app/schema";
import { z } from "zod";
import { Service } from "features/index";
import { useEffect } from "react";
import { usePersistBusiness, usePersistUser } from "shared/hooks";

export const Login = () => {
  const { control, handleSubmit } = useForm<z.infer<typeof loginUserSchema>>({
    resolver: zodResolver(loginUserSchema),
    mode: "onSubmit",
  });
  const navigate = useNavigate();
  const { persistUser } = usePersistUser();
  const { persistBusiness } = usePersistBusiness();

  const onSubmit: SubmitHandler<z.infer<typeof loginUserSchema>> = async (
    data
  ) => {
    try {
      await Service.Firebase.signIn({
        ...data,
        callback: async (success) => {
          if (success) {
            const user = await Service.User.getUser({});

            persistUser({ user });

            const business = await Service.Business.getBusinesses({
              owner: user?._id,
            });

            persistBusiness({ business: business?.docs[0] });

            navigate(`${LINKS.preview_vendor}/${business?.docs[0]?._id}`);
          }
        },
      });
    } catch (error) {
      console.error(error);
    }
  };

  const checkAuth = async () => {
    const token = await Service.Firebase.getToken();

    if (!token) {
      return null;
    }

    navigate(`${LINKS.preview_vendor}/66432de4806ba8277127d3fe`);
  };

  useEffect(() => {
    checkAuth();
  }, []);

  return (
    <Background>
      <Container>
        <Logo src="/logo.svg" alt="Logo" />

        <H1>Log into your Vendor account</H1>

        <Form onSubmit={handleSubmit(onSubmit)}>
          <Controller
            name="email"
            control={control}
            render={({ field, fieldState }) => (
              <Inputs.Default
                placeholder="Email"
                $validation={!fieldState?.invalid}
                $error={fieldState?.error?.message}
                {...field}
              />
            )}
          />

          <Controller
            name="password"
            control={control}
            render={({ field, fieldState }) => (
              <Inputs.Default
                $type="password"
                placeholder="Password"
                $validation={!fieldState?.invalid}
                $error={fieldState?.error?.message}
                {...field}
              />
            )}
          />

          <H3 href={`/#${LINKS.forgot_password}`}>Forgot your password?</H3>

          <Button
            type="submit"
            $backgroundColor={COLORS.brown_A04A4A}
            $color={COLORS.beige_FDF1E6}
            $border={`1px solid ${COLORS.brown_A04A4A}`}
            $height="58px"
          >
            Login
          </Button>
        </Form>

        <H2 $light={true}>
          Don’t have an account with Milnii? Go to{" "}
          <a href={`/#${LINKS.registration}`}>Sign Up</a>. Do you want to see
          your business on the app? Contact us <a href="/contact-us">HERE</a>
        </H2>
      </Container>
    </Background>
  );
};
