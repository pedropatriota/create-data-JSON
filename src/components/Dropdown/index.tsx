import { IDropdownProps } from "./contracts";
import { ReactSelect } from "./styles";

const Dropdown = ({ options, handleChange, item, label }: IDropdownProps) => {
  return (
    <div>
      <label htmlFor="react-select-2-input">{label}</label>
      <ReactSelect
        id={label}
        required={label !== "Area Codes"}
        aria-label={label}
        classNamePrefix="react-select"
        options={options}
        value={item}
        isMulti
        onChange={handleChange}
        autoFocus={false}
        isClearable={!!item}
      />
    </div>
  );
};

export default Dropdown;
