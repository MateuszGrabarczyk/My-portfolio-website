import React from "react";
import { render, screen } from "@testing-library/react";
import ProjectCard from "../components/ProjectCard";
import { FaPython, FaReact } from "react-icons/fa";

describe("ProjectCard Component", () => {
  const mockProps = {
    title: "Sample Project",
    githubLink: "https://github.com/sample/sample-project",
    imageSrc: "/sample-image.png",
    description: "This is a sample project description.",
    tools: [FaPython, FaReact],
  };

  it("renders ProjectCard correctly", () => {
    render(<ProjectCard {...mockProps} />);

    expect(screen.getByText(mockProps.title)).toBeInTheDocument();

    const githubLink = screen.getByRole("link");
    expect(githubLink).toBeInTheDocument();

    expect(
      screen.getByAltText(`${mockProps.title} Home Page`)
    ).toBeInTheDocument();

    expect(screen.getByText(mockProps.description)).toBeInTheDocument();

    mockProps.tools.forEach((ToolIcon, index) => {
      expect(screen.getByTestId(`tool-icon-${index}`)).toBeInTheDocument();
    });
  });
});
