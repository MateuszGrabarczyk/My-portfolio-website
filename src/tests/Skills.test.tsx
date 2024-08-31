import React from "react";
import { render, screen } from "@testing-library/react";
import Skills from "../components/Skills";
import { skills } from "../components/Skills";

describe("Skills Component", () => {
  it("renders Skills section correctly", () => {
    render(<Skills />);

    expect(screen.getByText("Skills & Technologies")).toBeInTheDocument();

    skills.forEach((skill) => {
      expect(screen.getByText(skill.name)).toBeInTheDocument();
      expect(
        screen.getByTestId(skill.name.toLowerCase() + "-icon")
      ).toBeInTheDocument();
    });
  });
});
