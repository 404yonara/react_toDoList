"use client";

import { ReactNode } from "react";
import { createPortal } from "react-dom";
import styled from "styled-components";

const OverlayStyle = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.5);
  z-index: 5;
`;

const ModalStyle = styled.div`
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  padding: 50px;
  background-color: #ffffff;
  z-index: 5;
`;

interface IModal {
  open: boolean;
  onClose: () => void;
  children: ReactNode;
}

const Modal = ({ open, onClose, children }: IModal) => {
  if (!open) return null;
  console.log("global_modal is", document.getElementById("global-modal"));
  return createPortal(
    <>
      <OverlayStyle />
      <ModalStyle>
        <button onClick={onClose}>모달 닫기</button>
        {children}
      </ModalStyle>
    </>,
    document.querySelector("#global-modal") as HTMLElement
  );
};

export default Modal;
