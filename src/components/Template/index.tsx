import { ReactNode } from "react";
import { Container } from "./styles";

interface ITemplate {
  children: ReactNode;
}

const Template = ({ children }: ITemplate) => {
  return <Container>{children}</Container>;
};

export default Template;
