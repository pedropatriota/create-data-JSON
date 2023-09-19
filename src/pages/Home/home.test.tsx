import {
  screen,
  render,
  fireEvent,
  getByPlaceholderText,
} from "@testing-library/react";

import { userEvent } from "@testing-library/user-event";
import Home from ".";

let mockHandleSubmit = jest.fn();
let mockHandleSelectChange = jest.fn();
let mockHandleChange = jest.fn();

jest.mock("./useHome", () => ({
  __esModule: true,
  default: jest.fn(() => ({
    handleSubmit: mockHandleSubmit,
    handleSelectChange: mockHandleSelectChange,
    handleChange: mockHandleChange,
    getFieldValue: jest.fn(),
  })),
}));

describe("test Home page", () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  it("should render the initial state", () => {
    render(<Home />);

    const inputs = screen.getAllByRole("textbox");
    const selects = screen.getAllByRole("combobox");
    const button = screen.getByRole("button");

    expect(selects).toHaveLength(6);
    expect(inputs).toHaveLength(4);
    expect(button).toBeInTheDocument();
  });

  it("should fail when a required input or select is not filled", async () => {
    render(<Home />);

    const button = screen.getByRole("button");
    const dataJSON = screen.queryByTestId("dataJSON");

    expect(dataJSON).not.toBeInTheDocument();

    await userEvent.click(button);

    expect(mockHandleSubmit).not.toHaveBeenCalled();
  });

  it("should submit when the required inputs/selects are filled", async () => {
    render(<Home />);

    const button = screen.getByRole("button");
    const dataJSON = screen.queryByTestId("dataJSON");

    const latitudeInput = screen.getByPlaceholderText(/latitude/i);
    const longitudeInput = screen.getByPlaceholderText(/longitude/i);
    const downloadInput = screen.getByPlaceholderText(/download/i);
    const uploadInput = screen.getByPlaceholderText(/upload/i);

    const networksSelect = screen.getByLabelText("Networks Available");
    const distancesSelect = screen.getByLabelText("Distance Classes");
    const technologySelect = screen.getByLabelText("Technology Types");
    const connectionSelect = screen.getByLabelText("Connection Types");
    const contractSelect = screen.getByLabelText("Contract Terms");

    await userEvent.type(latitudeInput, "90.00000");
    await userEvent.type(longitudeInput, "90.00000");
    await userEvent.type(downloadInput, "1000");
    await userEvent.type(uploadInput, "500");

    fireEvent.keyDown(networksSelect, {
      key: "ArrowDown",
      keyCode: 40,
      code: 40,
    });
    const networksSelectItem = screen.getByText(/Latwan/i);
    fireEvent.click(networksSelectItem);

    fireEvent.keyDown(distancesSelect, {
      key: "ArrowDown",
      keyCode: 40,
      code: 40,
    });
    const distancesSelectItem = screen.getByText(/offnetlabel/i);
    fireEvent.click(distancesSelectItem);

    fireEvent.keyDown(technologySelect, {
      key: "ArrowDown",
      keyCode: 40,
      code: 40,
    });
    const technologySelectSelectItem = screen.getByText(/ADSL/i);
    fireEvent.click(technologySelectSelectItem);

    fireEvent.keyDown(connectionSelect, {
      key: "ArrowDown",
      keyCode: 40,
      code: 40,
    });
    const connectionSelectSelectItem = screen.getByText(/DIA/i);
    fireEvent.click(connectionSelectSelectItem);

    fireEvent.keyDown(contractSelect, {
      key: "ArrowDown",
      keyCode: 40,
      code: 40,
    });
    const contractSelectSelectItem = screen.getByText(/12/i);
    fireEvent.click(contractSelectSelectItem);

    expect(mockHandleSelectChange).toHaveBeenCalledTimes(5);
    expect(mockHandleChange).toHaveBeenCalledTimes(23);

    await userEvent.click(button);

    expect(mockHandleSubmit).toHaveBeenCalled();
    expect(dataJSON).not.toBeInTheDocument();
  });

  it("Should match snapshot", () => {
    const { container } = render(<Home />);

    expect(container).toMatchSnapshot();
  });
});
