import React from "react";
import { Profile } from "./Profile";
import { render } from "@testing-library/react";


test('renders learn react link', () => {
    render(<Profile />);
    const linkElement = screen.getByTestId('custom-element')
    expect(linkElement).toBeInTheDocument();
  });