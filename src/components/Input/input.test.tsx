import { render } from "@testing-library/react";
import user from "@testing-library/user-event";
import Input from ".";

describe("Dropdown component", () => {
  it("should be able to render it properly", async () => {
    const { getByRole } = render(<Input inputValue={45} />);

    const input = getByRole("textbox") as HTMLInputElement;

    expect(input.value).toBe("45");
  });

  it("should be able type it", async () => {
    const mockedOnChange = jest.fn();
    const { getByRole, debug } = render(
      <Input inputValue={45} onChange={mockedOnChange} />
    );

    const input = getByRole("textbox") as HTMLInputElement;
    await user.type(input, "53");

    expect(mockedOnChange).toBeCalled();
  });

  it("should match the snapshot", () => {
    const { container } = render(<Input inputValue={45} />);
    expect(container).toMatchSnapshot();
  });
});
