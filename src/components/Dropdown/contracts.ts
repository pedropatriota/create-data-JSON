import type { ActionMeta, GroupBase } from "react-select";
import type { TValue } from "../../pages/Home/contracts";

export type Item = {
  label: string | number;
  value: string | number;
};

export interface IDropdownProps {
  options?: readonly (Item | GroupBase<{ label: string; value: string }>)[];
  item: TValue | Item;
  label?: string;
  handleChange: (
    newValue: Item | unknown,
    actionMeta: ActionMeta<Item | unknown>
  ) => void;
}
