import React, { FC, useEffect } from "react";
import { ModalOverlay, ModalContent } from "./Modal.styles";

interface ModalProps {
  largeImageURL: string;
  onClose: () => void;
}

const Modal: FC<ModalProps> = ({ largeImageURL, onClose }) => {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.code === "Escape") {
        onClose();
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [onClose]);

  const handleOverlayClick = (e: React.MouseEvent) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  return (
    <ModalOverlay onClick={handleOverlayClick}>
      <ModalContent>
        <img src={largeImageURL} alt="" />
      </ModalContent>
    </ModalOverlay>
  );
};

export default Modal;
