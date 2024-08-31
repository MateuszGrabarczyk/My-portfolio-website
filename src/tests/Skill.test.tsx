import React from "react";
import { render, screen } from "@testing-library/react";
import Skill from "../components/Skill";
import { FaPython } from "react-icons/fa";

describe("Skill Component", () => {
  it("renders Skill component correctly", () => {
    const mockProps = {
      name: "Python",
      icon: (
        <FaPython
          data-testid="python-icon"
          size={40}
          className="text-blue-500 hover:animate-pulse"
        />
      ),
    };

    render(<Skill {...mockProps} />);

    expect(screen.getByTestId("python-icon")).toBeInTheDocument();

    expect(screen.getByText(mockProps.name)).toBeInTheDocument();
  });
});
