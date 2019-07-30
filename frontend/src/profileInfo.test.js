import React from "react";
import { shallow } from "enzyme";
import ProfileInfo from "./components/profileInfo";
import { Link } from "react-router-dom";

describe("<ProfileInfo /> contains passed props", () => {
  const wrapper = shallow(
    <ProfileInfo
      firstName="Anakin"
      lastName="Skywalker"
      username="Skya99"
      email="skywaler@gmail.com"
      tel="999-999-9999"
      cell="111-222-3333"
      city="Quebec"
    />
  );

  it("contains firstName", () => {
    expect(
      wrapper.contains(<input className="profile-input" placeholder="Anakin" />)
    ).toEqual(true);
  });

  it("contains lastName", () => {
    expect(
      wrapper.contains(
        <input className="profile-input" placeholder="Skywalker" />
      )
    ).toEqual(true);
  });

  it("contains username", () => {
    expect(
      wrapper.contains(<input className="profile-input" placeholder="Skya99" />)
    ).toEqual(true);
  });

  it("contains email", () => {
    expect(
      wrapper.contains(
        <input className="profile-input" placeholder="skywaler@gmail.com" />
      )
    ).toEqual(true);
  });

  it("contains phone", () => {
    expect(
      wrapper.contains(
        <input className="profile-input" placeholder="999-999-9999" />
      )
    ).toEqual(true);
  });

  it("contains cellphone", () => {
    expect(
      wrapper.contains(
        <input className="profile-input" placeholder="111-222-3333" />
      )
    ).toEqual(true);
  });

  it("contains city", () => {
    expect(
      wrapper.contains(<input className="profile-input" placeholder="Quebec" />)
    ).toEqual(true);
  });
});

describe("<ProfileInfo /> form contains labels and buttons", () => {
  const wrapper = shallow(
    <ProfileInfo
      firstName="Anakin"
      lastName="Skywalker"
      username="Skya99"
      email="skywaler@gmail.com"
    />
  );
  it("contains firstName's label", () => {
    expect(
      wrapper.contains(<label className="profile-label">Prénom</label>)
    ).toEqual(true);
  });

  it("contains lastName's label", () => {
    expect(
      wrapper.contains(<label className="profile-label">Nom</label>)
    ).toEqual(true);
  });

  it("contains username's label", () => {
    expect(
      wrapper.contains(
        <label className="profile-label">Nom d&apos;utilisateur</label>
      )
    ).toEqual(true);
  });

  it("contains email's label", () => {
    expect(
      wrapper.contains(<label className="profile-label">Courriel</label>)
    ).toEqual(true);
  });

  it("contains phone's label", () => {
    expect(
      wrapper.contains(<label className="profile-label">Téléphone</label>)
    ).toEqual(true);
  });

  it("contains cellphone's label", () => {
    expect(
      wrapper.contains(<label className="profile-label">Cellulaire</label>)
    ).toEqual(true);
  });

  it("contains city's label", () => {
    expect(
      wrapper.contains(<label className="profile-label">Ville</label>)
    ).toEqual(true);
  });

  it("contains submit's button", () => {
    expect(
      wrapper.contains(
        <button className="profile-apply-button">Appliquer</button>
      )
    ).toEqual(true);
  });

  it("contains submit's button", () => {
    expect(
      wrapper.contains(
        <Link to="/ResetPassword" className="profile-pw-reset">
          Réinitialiser le mot de passe
        </Link>
      )
    ).toEqual(true);
  });
});
