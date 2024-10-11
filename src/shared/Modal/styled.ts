import styled from "styled-components";

export const Overlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;

  width: 100%;
  min-height: 100%;

  overflow: auto;

  display: flex;
  justify-content: center;
  align-items: center;

  background-color: rgba(30, 30, 30, 0.56);

  z-index: 10;
`;

export const ModalContainer = styled.div`
  position: absolute;
  max-height: 100vh;
`;
