import React from "react";
import { render, screen, waitFor } from "@testing-library/react";
import { FaGithub } from "react-icons/fa";
import SocialLink from "../components/SocialLink";

describe("SocialLink Component", () => {
  const mockProps = {
    href: "https://github.com/sample",
    Icon: FaGithub,
  };

  it("renders SocialLink component correctly", () => {
    render(<SocialLink {...mockProps} />);

    const linkElement = screen.getByRole("link");
    expect(linkElement).toBeInTheDocument();
    expect(linkElement).toHaveAttribute("href", mockProps.href);

    const iconElement = linkElement.querySelector("svg");
    expect(iconElement).toBeInTheDocument();
  });

  it("applies opacity after timeout", async () => {
    render(<SocialLink {...mockProps} />);

    const linkElement = screen.getByRole("link");

    expect(linkElement).toHaveClass("opacity-0");

    await waitFor(() => expect(linkElement).toHaveClass("opacity-100"), {
      timeout: 600,
    });
  });

  it("has hover effect applied", () => {
    render(<SocialLink {...mockProps} />);

    const linkElement = screen.getByRole("link");

    const iconElement = linkElement.querySelector("svg");
    expect(iconElement).toHaveClass(
      "cursor-pointer text-4xl transform transition-transform duration-500 hover:scale-110 hover:text-teal-500"
    );
  });
});
