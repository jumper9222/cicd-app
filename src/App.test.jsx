import { render, screen } from "@testing-library/react";
import App from "./App"
import { expect, test } from "vitest";
import userEvent from "@testing-library/user-event";

test("App form submission", async () => {
    render(<App />);

    const emailInput = screen.getByTestId("emailInput");
    const passwordInput = screen.getByTestId("passwordInput");
    const submitButton = screen.getByTestId("submitButton");

    await userEvent.type(emailInput, 'sigmaschool@gmail.com');
    await userEvent.type(passwordInput, 'Abcd1234')

    expect(submitButton.disabled).toBe(false);
})

test("Invalid password", async () => {
    render(<App />);

    const emailInput = screen.getByTestId("emailInput");
    const passwordInput = screen.getByTestId("passwordInput");
    const submitButton = screen.getByTestId("submitButton");

    await userEvent.type(emailInput, 'sigmaschool@gmail.com');
    await userEvent.type(passwordInput, 'abcd1234')

    expect(submitButton.disabled).toBe(true);
})