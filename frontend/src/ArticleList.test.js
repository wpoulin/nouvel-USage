import React from "react";
import { shallow } from "enzyme";
import ArticleList from "./components/articleList";

describe("<ArticleList />", () => {
  it("renders ArticleList component without crashing", () => {
    shallow(<ArticleList />);
  });
});
