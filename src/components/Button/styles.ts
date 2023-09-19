import styled from "styled-components";
import type { ButtonProps } from ".";

export const ContainerButton = styled.div`
  display: grid;
  place-content: center;
`;

export const Button = styled.button<Partial<ButtonProps>>`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
  height: 46px;
  width: ${({ size }) => (size ? size : "200px")};
  background-color: #798dad;
  border: none;
  border-radius: 0.5rem;
  color: #fff;
  cursor: pointer;
  transition: background-color 0.3s ease-in-out;

  &:hover {
    background-color: #8fa6cb;
  }

  &:disabled {
    cursor: not-allowed;
    background-color: #8fa6cb;
  }
`;
