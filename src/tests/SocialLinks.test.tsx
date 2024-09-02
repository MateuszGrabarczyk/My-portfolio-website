import React from "react";
import { render, screen } from "@testing-library/react";
import SocialLinks from "../components/SocialLinks";

describe("SocialLinks Component", () => {
  it("renders SocialLinks component correctly", () => {
    render(<SocialLinks />);

    const socialLinksContainer = screen.getByTestId("social-links-container");
    expect(socialLinksContainer).toBeInTheDocument();
  });
});
