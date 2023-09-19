import { screen, render, fireEvent } from "@testing-library/react";
import type { IDropdownProps, Item } from "./contracts";
import { userEvent } from "@testing-library/user-event";
import Dropdown from ".";

describe("Dropdown component", () => {
  const options = [
    { label: "onnetlabel", value: "onnetlabel" },
    { label: "nearnetlabel", value: "nearnetlabel" },
    { label: "offnetlabel", value: "offnetlabel" },
  ];

  const item = { label: "onnetlabel", value: "onnetlabel" } as Item;

  const props: IDropdownProps = {
    item,
    handleChange: jest.fn(),
    label: "Distance Classes",
    options,
  };
  it("should be able to select an option", async () => {
    const { debug } = render(<Dropdown {...props} />);

    const selector = screen.getByLabelText(/Distance Classes/i);

    fireEvent.keyDown(selector, {
      key: "ArrowDown",
      keyCode: 40,
      code: 40,
    });

    const selectedItem = screen.getByText("nearnetlabel");

    await userEvent.click(selectedItem);

    expect(props.handleChange).toBeCalled();
  });

  it("should match the snapshot", () => {
    const { container } = render(<Dropdown {...props} />);
    expect(container).toMatchSnapshot();
  });
});
