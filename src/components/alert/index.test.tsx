import { render, screen } from "@testing-library/react";
import { ThemeProvider } from "styled-components";
import Alert from ".";
import { DEFAULT_THEME } from "../../themes";

test("renders heading and children", () => {
  const heading = "The heading!";
  const copy = "The copy!";

  render(
    <ThemeProvider theme={DEFAULT_THEME}>
      <Alert heading={heading}>
        <p>{copy}</p>
      </Alert>
    </ThemeProvider>
  );

  const headingNode = screen.getByText(heading);
  const copyNode = screen.getByText(copy);

  expect(headingNode).toBeInTheDocument();
  expect(copyNode).toBeInTheDocument();
});
