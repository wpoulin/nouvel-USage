import React, { Component } from "react";
import Header from "../components/header";
import ProfileInfo from "../components/profileInfo";

class MyProfile extends Component {
  render () {
    return (
      <div>
        <Header />
        <ProfileInfo 
            firstName={"John"}
            lastName={"Travolta"}
            username={"Jtrav420"}
            email={"j.travolta@hollywood.com"}
            tel={"1-234-567-8900"}
            cell={""}
            city={"Hollywood"}
        />
      </div>
    );
  }
}

export default MyProfile;