import React from "react";
import ContentTable from "../";
import renderer from "react-test-renderer";

const dummyData = [
  {
    person: {
      birth_year: "11/11/1988",
      created: "11/11/1988",
      edited: "11/11/1988",
      eye_color: "red",
      films: [],
      gender: "male",
      hair_color: "red",
      height: "2ft",
      homeworld: "unknown",
      mass: "24",
      name: "max",
      skin_color: "red",
      species: [],
      starships: [],
      url: "",
      vehicles: [],
    },
    home: {
      climate: "hot",
      created: "11/11/1988",
      diameter: "1",
      edited: "111",
      gravity: "none",
      films: [],
      name: "earth",
      orbital_period: "n/a",
      population: "dense",
      residents: [],
      rotation_period: "",
      surface_water: "",
      terrain: "",
      url: "",
    },
  },
];

describe("Content Table Component", () => {
  describe("When `noPersonalDetails` prop is empty", () => {
    it("Then nothing should be rendered", () => {
      const props = {
        setDetailedInformation: jest.fn(),
        personalDetails: [],
        setIsOpen: jest.fn(),
      };
      const testRenderer = renderer.create(<ContentTable {...props} />);
      expect(testRenderer.toJSON()).toBe(null);
    });
  });
  describe("When `noPersonalDetails` prop is not empty", () => {
    it("Then nothing should be rendered", () => {
      const props = {
        setDetailedInformation: () => {},
        personalDetails: dummyData,
        setIsOpen: jest.fn(),
      };
      const testRenderer = renderer.create(<ContentTable {...props} />);
      expect(testRenderer.toJSON()).not.toBe(null);
    });
  });
});
