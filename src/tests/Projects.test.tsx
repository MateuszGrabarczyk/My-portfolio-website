import React from "react";
import { render, screen } from "@testing-library/react";
import Projects from "../components/Projects";
import { projects } from "../components/Projects"; // Assuming you export the projects array for testing

describe("Projects Component", () => {
  it("renders Projects section with correct heading", () => {
    render(<Projects />);

    // Check if the section heading is rendered
    expect(screen.getByText("My Projects")).toBeInTheDocument();
  });

  it("renders all project cards", () => {
    render(<Projects />);

    // Check if all project titles are rendered
    projects.forEach((project) => {
      expect(screen.getByText(project.title)).toBeInTheDocument();
    });
  });
});
