import { GroupBase } from "react-select";

export type Item = {
  label: string | number;
  value: string | number;
};

export interface IFields {
  label: string;
  name: string;
  type: "select" | "text";
  required: boolean;
  validate?: string | RegExp;
  validationMessage?: string;
}

export interface IFormFactory extends Partial<IFields> {
  fields?: IFields[];
  options?: readonly (Item | GroupBase<{ label: string; value: string }>)[];
}

export interface IFormData {
  addresses: { latitude: string | number; longitude: string | number }[];
  bandWidth: { download: string | number; upload: string | number }[];
  distanceClasses: Item[];
  technologyTypes: Item[];
  connectionTypes: Item[];
  networks: Item[];
  contractTerms: Item[];
  areaCodes: Item[];
}
