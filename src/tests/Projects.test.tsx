import React from "react";
import { render, screen } from "@testing-library/react";
import Projects from "../components/Projects";
import { projects } from "../components/Projects";

describe("Projects Component", () => {
  it("renders Projects section with correct heading", () => {
    render(<Projects />);

    expect(screen.getByText("My Projects")).toBeInTheDocument();
  });

  it("renders all project cards", () => {
    render(<Projects />);

    projects.forEach((project) => {
      expect(screen.getByText(project.title)).toBeInTheDocument();
    });
  });
});
