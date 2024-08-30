import React from "react";
import { render, screen, fireEvent, waitFor } from "@testing-library/react";
import { vi } from "vitest";
import Contact from "../components/Contact";

function focusAndBlur(element: HTMLElement) {
  fireEvent.focus(element);
  fireEvent.focusOut(element);
}

function changeInputValue(element: HTMLElement, value: string) {
  fireEvent.change(element, { target: { value } });
}

describe("Contact Component", () => {
  beforeEach(() => {
    vi.clearAllMocks();
  });

  it("renders Contact component correctly", () => {
    render(<Contact />);

    expect(screen.getByText("Contact Me")).toBeInTheDocument();
    expect(screen.getByLabelText("Name")).toBeInTheDocument();
    expect(screen.getByLabelText("Email")).toBeInTheDocument();
    expect(screen.getByLabelText("Message")).toBeInTheDocument();
    expect(screen.getByText("Send me a message!")).toBeInTheDocument();
  });

  it("validates required form fields correctly", async () => {
    render(<Contact />);

    const nameInput = screen.getByLabelText("Name");
    const emailInput = screen.getByLabelText("Email");
    const messageInput = screen.getByLabelText("Message");

    focusAndBlur(nameInput);
    focusAndBlur(emailInput);
    focusAndBlur(messageInput);

    await waitFor(() => {
      expect(screen.getByText(/Name is required/i)).toBeInTheDocument();
      expect(screen.getByText(/Email is required/i)).toBeInTheDocument();
      expect(screen.getByText(/Message is required/i)).toBeInTheDocument();
    });
  });

  it("validates email form field correctly", async () => {
    render(<Contact />);

    const emailInput = screen.getByLabelText("Email");

    changeInputValue(emailInput, "invalid email");
    focusAndBlur(emailInput);

    expect(
      await screen.findByText(/Invalid email address/i)
    ).toBeInTheDocument();
  });

  it("validates message form field minimum length correctly", async () => {
    render(<Contact />);

    const messageInput = screen.getByLabelText("Message");

    changeInputValue(messageInput, "short");
    focusAndBlur(messageInput);

    expect(
      await screen.findByText(/Message must be at least 10 characters long/i)
    ).toBeInTheDocument();
  });

  it("submits form with valid data and resets the form", async () => {
    render(<Contact />);

    const nameInput = screen.getByLabelText("Name");
    const emailInput = screen.getByLabelText("Email");
    const messageInput = screen.getByLabelText("Message");
    const submitButton = screen.getByText("Send me a message!");

    changeInputValue(nameInput, "John Doe");
    changeInputValue(emailInput, "john@example.com");
    changeInputValue(messageInput, "This is a valid message");

    fireEvent.click(submitButton);

    await waitFor(() => {
      expect(nameInput).toHaveValue("");
      expect(emailInput).toHaveValue("");
      expect(messageInput).toHaveValue("");
    });
  });
});
