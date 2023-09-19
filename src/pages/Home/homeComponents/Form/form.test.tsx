import { screen, render, fireEvent } from "@testing-library/react";
import { userEvent } from "@testing-library/user-event";
import type { IFormFields } from "../../contracts";
import FormFields from ".";

describe("test Form Component", () => {
  const selectProps: IFormFields = {
    index: 4,
    formItem: {
      label: "Networks Available",
      name: "networks",
      type: "select",
      options: [
        {
          label: "Renater",
          value: "Renater",
        },
        {
          label: "SONATEL",
          value: "SONATEL",
        },
        {
          label: "Vodaphone",
          value: "Vodaphone",
        },
        {
          label: "Latwan",
          value: "Latwan",
        },
      ],
      required: true,
      validate: "^.*S+.*$",
      validationMessage: "You should select at least one network",
    },
    value: [],
    inputValue: [],
    handleSelectChange: jest.fn(),
    handleChange: jest.fn(),
    fieldName: "networks",
  };

  const inputProps: IFormFields = {
    index: 0,
    formItem: {
      label: "Addresses (lat, long)",
      name: "addresses",
      fields: [
        {
          label: "Latitude",
          name: "latitude",
          type: "text",
          required: true,
          validate:
            "^-?([1-8]?[0-9](.d{1,4})?|90(.0{1,4})?)s*,s*-?((1[0-7]|[1-9])?d(.d{1,4})?|180(.0{1,4})?)$",
          validationMessage: "You should follow the format (+/-)##.#####",
        },
        {
          label: "Longitude",
          name: "longitude",
          type: "text",
          required: true,
          validate:
            "^-?([1-8]?[0-9](.d{1,4})?|90(.0{1,4})?)s*,s*-?((1[0-7]|[1-9])?d(.d{1,4})?|180(.0{1,4})?)$",
          validationMessage: "You should follow the format (+/-)###.#####",
        },
      ],
    },
    value: undefined,
    inputValue: undefined,
    handleSelectChange: jest.fn(),
    handleChange: jest.fn(),
    fieldName: "latitude",
  };

  it("renders the initial state correctly of a select", () => {
    render(<FormFields {...selectProps} />);

    const select = screen.getByLabelText("Networks Available");
    const input = screen.getByRole("combobox") as HTMLInputElement;
    const placeHolder = screen.getByText("Select...");

    expect(select).toBeInTheDocument();
    expect(input).toBeInTheDocument();
    expect(placeHolder).toBeInTheDocument();
    expect(input.value).toBe("");
  });

  it("renders the initial state correctly of the address inputs", () => {
    render(<FormFields {...inputProps} />);

    const inputs = screen.getAllByRole("textbox") as HTMLInputElement[];
    const latitudePlaceHolder = screen.getByPlaceholderText(/Latitude/i);
    const longitudePlaceHolder = screen.getByPlaceholderText(/longitude/i);

    expect(latitudePlaceHolder).toBeInTheDocument();
    expect(longitudePlaceHolder).toBeInTheDocument();
    expect(inputs).toHaveLength(2);
    expect(inputs[0].value).toBe("");
  });

  it("changes to the selected option", async () => {
    render(<FormFields {...selectProps} />);

    const select = screen.getByLabelText("Networks Available");

    fireEvent.keyDown(select, {
      key: "ArrowDown",
      keyCode: 40,
      code: 40,
    });

    const selectedItem = screen.getByText(/Latwan/i);

    fireEvent.click(selectedItem);

    expect(selectProps.handleSelectChange).toBeCalled();
  });

  it("changes the input value", async () => {
    render(<FormFields {...inputProps} />);

    const latitudePlaceHolder = screen.getByPlaceholderText(/Latitude/i);
    const longitudePlaceHolder = screen.getByPlaceholderText(/longitude/i);

    await userEvent.type(latitudePlaceHolder, "-90.55555");

    expect(inputProps.handleChange).toBeCalled();

    await userEvent.type(longitudePlaceHolder, "2.73731");

    expect(inputProps.handleChange).toBeCalled();
  });

  it("should match snapshot", () => {
    const { container } = render(<FormFields {...inputProps} />);

    expect(container).toMatchSnapshot();
  });
});
