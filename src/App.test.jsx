import { render, screen } from "@testing-library/react";
import App from "./App"
import { expect, test } from "vitest";
import userEvent from "@testing-library/user-event";

test("App form submission", async () => {
    render(<App />);

    const emailInput = screen.getByTestId("emailInput");
    const submitButton = screen.getByTestId("submitButton");

    await userEvent.type(emailInput, 'sigmaschool');

    expect(submitButton.disabled).toBe(false);
})