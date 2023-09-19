import { Dropdown, Input } from "../../../../components";
import type { Item } from "../../../../utils/contracts";
import type { IFormFields } from "../../contracts";

const FormFields = ({
  formItem,
  value,
  inputValue,
  fieldName,
  handleChange,
  handleSelectChange,
}: IFormFields) => {
  return (
    <>
      {formItem.type === "select" ? (
        <Dropdown
          label={formItem.label}
          options={formItem?.options}
          item={value}
          handleChange={(item: unknown) =>
            handleSelectChange(item as Item, fieldName)
          }
        />
      ) : (
        <label htmlFor={formItem.name}>
          {formItem.label}
          {formItem.fields &&
            formItem.fields.map(({ label, name, type, required }) => (
              <Input
                key={name}
                required={required}
                name={name}
                type={type}
                id={name}
                inputValue={inputValue}
                onChange={(e) => handleChange(e, formItem)}
                placeholder={label}
              />
            ))}
        </label>
      )}
    </>
  );
};

export default FormFields;
