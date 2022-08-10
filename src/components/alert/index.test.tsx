import { render, screen } from "@testing-library/react";
import Alert from ".";

test("renders all headings", () => {
  const heading = "The heading!";
  const copy = "The copy!";

  render(
    <Alert alertType="Informational">
      <h3>{heading}</h3>
      <p>{copy}</p>
    </Alert>
  );

  const headingElement = screen.getByRole("heading", {
    name: heading,
  });

  const pElement = screen.getByText(copy);

  expect(headingElement).toBeInTheDocument();
  expect(pElement).toBeInTheDocument();
});
