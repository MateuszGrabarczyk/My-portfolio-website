import React from "react";
import { describe, it, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import Header from "../components/Header";

describe("Header Component", () => {
  it("renders the header content", () => {
    render(<Header />);

    const titleElement = screen.getByText(/Mateusz Grabarczyk/i);
    const paragraphElement = screen.getByText(
      /I'm interested in Backend Development with Python, but I also like Frontend technologies, especially React!/i
    );

    expect(titleElement).toBeInTheDocument();
    expect(paragraphElement).toBeInTheDocument();
  });

  it("applies visible styles after mount", () => {
    render(<Header />);

    const titleElement = screen.getByText(/Mateusz Grabarczyk/i);
    const paragraphElement = screen.getByText(
      /I'm interested in Backend Development with Python, but I also like Frontend technologies, especially React!/i
    );

    expect(titleElement).toHaveClass("translate-x-0 opacity-100");
    expect(paragraphElement).toHaveClass("opacity-100");
  });
});
