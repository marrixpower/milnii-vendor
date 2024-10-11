import { Modal } from "shared/Modal";
import { Container, H1, H2 } from "./styled";
import { Dispatch, SetStateAction } from "react";
import { DefaultContainer } from "shared/DefaultContainer";
import { Button } from "shared/Button";
import { COLORS } from "shared/enums";

type SubmitModalProps = {
  isOpen: boolean;
  setOpen: Dispatch<SetStateAction<boolean>>;
  closeModal: () => void;
};

export const SubmitModal = ({
  isOpen,
  setOpen,
  closeModal,
}: SubmitModalProps) => {
  return (
    <Modal isOpen={isOpen} closeModal={() => setOpen((prev) => !prev)}>
      <Container>
        <H1>{"Submit your Vendor information to Milnii?"}</H1>

        <H2>
          Once you submit, your information will be sent to Milnii to review for
          approval.
          <span>Are you ready?</span>
        </H2>

        <DefaultContainer $gap="10px">
          <Button
            $color={COLORS.brown_A04A4A}
            $border={`1px solid ${COLORS.brown_A04A4A}`}
            $height="35px"
            onClick={() => setOpen(false)}
          >
            KEEP EDITING
          </Button>

          <Button
            $backgroundColor={COLORS.brown_A04A4A}
            $color={COLORS.white}
            $border={`1px solid ${COLORS.brown_A04A4A}`}
            $height="35px"
            onClick={closeModal}
          >
            SUBMIT
          </Button>
        </DefaultContainer>
      </Container>
    </Modal>
  );
};
