import React from "react";
import { shallow } from "enzyme";
import ProfileInfo from "./components/profileInfo";

describe("<ProfileInfo />", () => {
  it("renders ProfileInfo component without crashing", () => {
    shallow(
      <ProfileInfo
        firstName="Anakin"
        lastName="Skywalker"
        username="=Skya99"
        email="skywaler@gmail.com"
      />
    );
  });
});
