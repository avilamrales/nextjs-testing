import { render, screen } from "@testing-library/react";
import Home from "../../app/page";

describe("Home Page", () => {
  const setup = () => render(<Home />);

  it("renders 'Save and see your changes instantly.'", () => {
    setup();
    expect(
      screen.getByText("Save and see your changes instantly.")
    ).toBeInTheDocument();
  });

  it("renders 'Go to nextjs.org →'", () => {
    setup();
    expect(screen.getByText("Go to nextjs.org →")).toBeInTheDocument();
  });

  it("renders 'Get started by editing'", () => {
    setup();
    expect(screen.getByText(/Get started by editing/i)).toBeInTheDocument();
  });

  it("should render just 'Deploy now' word in home page", () => {
    setup();
    expect(
      screen.getByRole("link", { name: /Vercel logomark Deploy now/i })
    ).toBeInTheDocument();
  });
});
