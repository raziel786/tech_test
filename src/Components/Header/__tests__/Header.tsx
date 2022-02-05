import React from "react";
import Header from "../";
import renderer from "react-test-renderer";

describe("Header Component", () => {
  describe("When the `page` prop is less than or equal to 1", () => {
    it("Then the `previous` button will be disabled and `next` button will not be disabled", () => {
      const props = {
        page: 0,
        setPage: jest.fn(),
      };
      const testRenderer = renderer.create(<Header {...props} />);
      const component = testRenderer.root;
      const buttons = component.findAll((el) => el.type === "button");
      const prevButton = buttons[0];
      const nextButton = buttons[1];
      expect(prevButton.props.disabled).toBe(true);
      expect(nextButton.props.disabled).toBe(false);
    });
  });
  describe("When the `page` prop is greater than or equal to 9", () => {
    it("then the `next` button will be disabled and the `previous` button will not be disabled", () => {
      const props = {
        page: 10,
        setPage: () => jest.fn(),
      };
      const testRenderer = renderer.create(<Header {...props} />);
      const component = testRenderer.root;
      const buttons = component.findAll((el) => el.type === "button");
      const prevButton = buttons[0];
      const nextButton = buttons[1];
      expect(prevButton.props.disabled).toBe(false);
      expect(nextButton.props.disabled).toBe(true);
    });
  });
});
