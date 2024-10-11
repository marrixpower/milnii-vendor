import { Controller, SubmitHandler, useFormContext } from "react-hook-form";
import { Background, Container, Form, H1, H2, Logo } from "./styled";
import { Inputs } from "shared/Inputs";
import { Button } from "shared/Button";
import { COLORS, LINKS } from "shared/enums";
import { confirmationCodeSchema } from "app/schema";
import { z } from "zod";
import { useTransition } from "react";
import { useNavigate } from "react-router-dom";

export const ConfirmationCode = () => {
  const navigate = useNavigate();
  const { handleSubmit, control } =
    useFormContext<z.infer<typeof confirmationCodeSchema>>();
  const [isPending, startTransition] = useTransition();

  const onSubmit: SubmitHandler<
    z.infer<typeof confirmationCodeSchema>
  > = async (_) => {
    try {
      startTransition(() => {
        navigate(LINKS.confirmation_code);
      });
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <Background>
      <Container>
        <Logo src="/logo.svg" alt="Logo" />

        <H1>Enter confirmation code</H1>

        <Form onSubmit={handleSubmit(onSubmit)}>
          <Controller
            name="code"
            control={control}
            render={({ field, fieldState }) => (
              <Inputs.Default
                placeholder="Confirmation code"
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
            disabled={isPending}
          >
            Next
          </Button>
        </Form>

        <H2 $light={true}>
          <a href={`/#${LINKS.login}`}>Go back</a>
        </H2>
      </Container>
    </Background>
  );
};
