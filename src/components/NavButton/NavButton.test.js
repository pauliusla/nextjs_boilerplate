import "@testing-library/jest-dom";
import { render } from "@testing-library/react";
import { NavButton } from "./NavButton";

describe("Checks if nav button renders", () => {
  it("it renders nav button", () => {
    const { container } = render(<NavButton />);
    expect(container).toMatchSnapshot();
  });

  it("renders active nav button", () => {
    const { container } = render(<NavButton active={true} />);

    expect(container).toMatchSnapshot();
  });
});
