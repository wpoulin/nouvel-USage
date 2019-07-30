import React from "react";
import { shallow } from "enzyme";
import Header from "./components/header";

describe("<Header />", () => {
  it("renders Header component without crashing", () => {
    shallow(<Header />);
  });
});
