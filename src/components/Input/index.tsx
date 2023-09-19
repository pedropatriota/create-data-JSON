import React from "react";
import { TValue } from "../../pages/Home/contracts";
import * as Styled from "./styles";

export interface InputProps
  extends React.InputHTMLAttributes<HTMLInputElement> {
  inputValue: (TValue & string) | number | readonly string[] | undefined;
}

const Input = ({ inputValue, ...props }: InputProps) => {
  return (
    <Styled.Container>
      <Styled.InputContainer>
        <Styled.Input value={inputValue} {...props} />
      </Styled.InputContainer>
    </Styled.Container>
  );
};

export default Input;
