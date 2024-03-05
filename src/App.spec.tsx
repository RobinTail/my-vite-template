import { render, screen } from "@testing-library/react";
import { describe, expect, test } from "vitest";
import { App } from "./App.tsx";

describe("App", () => {
  test("should render", () => {
    render(<App />);
    expect(screen.findByTestId("app")).toBeTruthy();
  });
});
