import React, { useMemo, useState } from "react";
import { DefaultProps } from "./types";
import {
  Container,
  Cross,
  Error,
  Input,
  Label,
  Mark,
  ShowPasswordButton,
  Span,
  ValidationContainer,
} from "./styled";
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";
import { COLORS } from "shared/enums";

const Default = React.forwardRef<HTMLInputElement, Partial<DefaultProps>>(
  (
    {
      width = "100%",
      height = "44px",
      label = "",
      placeholder = "",
      $error = "",
      $backgroundColor = "transparent",
      $type,
      $margin,
      $validation,
      $showValidation = true,
      ...props
    },
    ref
  ) => {
    const [visiblePass, setVisiblePass] = useState(false);
    const isShowPassword = $type === "password";
    const typeAudit = $type === "password" && visiblePass ? "text" : $type;

    const showValidation = useMemo(() => {
      if ($error) {
        return <Cross />;
      }

      if (!props?.value) {
        return null;
      }

      if ($validation) {
        return <Mark />;
      }

      return <Cross />;
    }, [props?.value, $validation]);

    return (
      <Container $margin={$margin} width={width}>
        <Label width={width}>
          {label && <Span>{label}</Span>}

          <Input
            ref={ref}
            width={width}
            height={height}
            placeholder={placeholder}
            $error={$error}
            $backgroundColor={$backgroundColor}
            type={typeAudit}
            {...props}
          />
        </Label>

        {isShowPassword && (
          <ShowPasswordButton
            type="button"
            onClick={() => setVisiblePass((prev) => !prev)}
            $error={$error}
          >
            {(!visiblePass && (
              <AiOutlineEye style={{ color: COLORS.grey_828282 }} />
            )) || (
              <AiOutlineEyeInvisible style={{ color: COLORS.grey_828282 }} />
            )}
          </ShowPasswordButton>
        )}

        {$showValidation && (
          <ValidationContainer>{showValidation}</ValidationContainer>
        )}

        {$error && <Error>{$error}</Error>}
      </Container>
    );
  }
);
Default.displayName = "Default";

export { Default };
