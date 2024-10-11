import { Controller, SubmitHandler, useForm } from "react-hook-form";
import { Background, Container, Form, H1, H2, Logo } from "./styled";
import { Inputs } from "shared/Inputs";
import { Button } from "shared/Button";
import { COLORS, LINKS } from "shared/enums";
import { zodResolver } from "@hookform/resolvers/zod";
import { forgotPasswordSchema } from "app/schema";
import { z } from "zod";
import { Service } from "features/index";
import toast from "react-hot-toast";

export const ForgotPassword = () => {
  const { handleSubmit, control } = useForm<
    z.infer<typeof forgotPasswordSchema>
  >({
    resolver: zodResolver(forgotPasswordSchema),
  });

  const onSubmit: SubmitHandler<z.infer<typeof forgotPasswordSchema>> = async (
    data
  ) => {
    try {
      await Service.Firebase.resetPasswordEmail({ ...data });

      toast.success(
        "Instructions sent to your email. Follow them to reset password"
      );
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <Background>
      <Container>
        <Logo src="/logo.svg" alt="Logo" />

        <H1>Reset password</H1>

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

          <Button
            type="submit"
            $backgroundColor={COLORS.brown_A04A4A}
            $color={COLORS.beige_FDF1E6}
            $border={`1px solid ${COLORS.brown_A04A4A}`}
            $height="58px"
          >
            Reset password
          </Button>
        </Form>

        <H2 $light={true}>
          <a href={`/#${LINKS.login}`}>Go back</a>
        </H2>
      </Container>
    </Background>
  );
};
