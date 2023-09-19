import React, { ReactNode } from "react";
import * as Styled from "./styles";

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode | string;
  size?: string | number;
}

const Button = ({ children, size, ...rest }: ButtonProps) => {
  return (
    <Styled.ContainerButton>
      <Styled.Button size={size} {...rest}>
        {children}
      </Styled.Button>
    </Styled.ContainerButton>
  );
};

export default Button;
