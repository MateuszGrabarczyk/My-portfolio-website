import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import { vi } from "vitest";
import Navbar from "../components/Navbar";
import { useDarkMode } from "../context/DarkModeContext";

vi.mock("../context/DarkModeContext", () => ({
  useDarkMode: vi.fn(),
}));

describe("Navbar Component", () => {
  beforeEach(() => {
    (useDarkMode as any).mockReturnValue({
      darkMode: false,
      toggleDarkMode: vi.fn(),
    });
  });

  it("renders Navbar correctly", () => {
    render(<Navbar />);

    expect(screen.getByText("Resume")).toBeInTheDocument();
    expect(screen.getByRole("button")).toBeInTheDocument();
  });

  it("opens and closes the menu", () => {
    render(<Navbar />);

    const menuButton = screen.getByRole("button");
    fireEvent.click(menuButton);
    expect(document.body.style.overflow).toBe("hidden");

    fireEvent.click(menuButton);
    expect(document.body.style.overflow).toBe("auto");
  });
});
