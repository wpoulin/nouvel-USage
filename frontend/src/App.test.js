import React from "react";
import { shallow } from "enzyme";
import App from "./App";

describe("Render test with Enzyme", () => {
  it("renders App component without crashing", () => {
    shallow(<App />);
  });
});
