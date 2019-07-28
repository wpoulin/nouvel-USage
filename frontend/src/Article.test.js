import React from "react";
import { shallow } from "enzyme";
import Article from "./components/article";

describe("<Article />", () => {
  it("renders Article component without crashing", () => {
    shallow(<Article />);
  });
});
