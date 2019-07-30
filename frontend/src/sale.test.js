import React from "react";
import { shallow } from "enzyme";
import Sale from "./components/sale";

describe("<Sale />", () => {
  it("renders Sale component without crashing", () => {
    shallow(
      <Sale
        title="Clean Code"
        tags={["S5", "Coding"]}
        imgsources={[
          "https://images-na.ssl-images-amazon.com/images/I/5154eSTKUxL._SX382_BO1,204,203,200_.jpg",
          "https://images-na.ssl-images-amazon.com/images/I/5154eSTKUxL._SX382_BO1,204,203,200_.jpg",
          "https://images-na.ssl-images-amazon.com/images/I/5154eSTKUxL._SX382_BO1,204,203,200_.jpg",
          "https://images-na.ssl-images-amazon.com/images/I/5154eSTKUxL._SX382_BO1,204,203,200_.jpg"
        ]}
      />
    );
  });
});
