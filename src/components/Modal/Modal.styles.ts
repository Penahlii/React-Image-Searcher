import styled from "styled-components";

export const ModalOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: rgba(0, 0, 0, 0.8);
  z-index: 1200;
`;

export const ModalContent = styled.div`
  max-width: calc(100vw - 48px);
  max-height: calc(100vh - 24px);
  background-color: #fff;
  padding: 0;
  border-radius: 4px;
  overflow: hidden;

  img {
    display: block;
    max-width: 100%;
    height: auto;
  }
`;
