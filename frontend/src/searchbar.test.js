import React from "react";
import { shallow } from "enzyme";
import Searchbar from "./components/searchbar";

describe("<Searchbar />", () => {
  it("renders Searchbar component without crashing", () => {
    shallow(<Searchbar />);
  });
});
