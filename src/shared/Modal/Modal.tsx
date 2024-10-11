import { createPortal } from "react-dom";
import { ReactNode, useEffect } from "react";
import { Overlay, ModalContainer } from "./styled";

type Modal = {
  children: ReactNode;
  isOpen: boolean;
  closeModal: () => void;
};

export const Modal = ({ children, isOpen, closeModal }: Modal) => {
  if (!isOpen) {
    return null;
  }

  useEffect(() => {
    const handleUserKeyPress = (event: KeyboardEvent) => {
      const { key } = event;

      if (key === "Escape") {
        closeModal();
      }
    };

    window.addEventListener("keydown", handleUserKeyPress);

    return () => {
      window.removeEventListener("keydown", handleUserKeyPress);
    };
  }, [closeModal]);

  const onClick = (e: React.MouseEvent) => {
    if (e.target === e.currentTarget) {
      closeModal();
    }
  };

  const modalRoot =
    typeof window !== "undefined"
      ? (document.querySelector("body") as HTMLBodyElement)
      : null;

  if (!modalRoot) {
    return;
  }

  return createPortal(
    <Overlay onClick={onClick}>
      <ModalContainer>{children}</ModalContainer>
    </Overlay>,
    modalRoot
  );
};
