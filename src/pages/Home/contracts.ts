import type { IFormFactory, Item } from "../../utils/contracts";

export type TValue =
  | (
      | Item
      | {
          latitude: string | number;
          longitude: string | number;
        }
      | {
          download: string | number;
          upload: string | number;
        }
    )[]
  | undefined;

export type TInputValue =
  | (TValue & string)
  | number
  | readonly string[]
  | undefined;

export interface IFormFields {
  formItem: IFormFactory;
  index: number;
  fieldName: string;
  value: TValue;
  inputValue: TInputValue;
  handleChange: (
    e: React.ChangeEvent<HTMLInputElement>,
    formItem: IFormFactory
  ) => void;
  handleSelectChange: (newValue: unknown, fieldName: string) => void;
}
