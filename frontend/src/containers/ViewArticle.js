import React, { Component } from "react";
import Header from "../components/header";
import Sale from "../components/sale";

class ViewArticle extends Component {
  render () {

    console.log(this.props);

    const { params } = this.props.match;
    // Use params.id

    return (
      <div className="ViewArticle">
        <Header />
        <Sale 
           title={"Clean code"}
           description={<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>}
           location={"Sherbrooke"}
           price={19.99}
           announcer={"Jon snow"}
           nego={true}
           wear={9}
           date={"2019-06-15"}
           tags={["S5","Coding"]}
           imgsources={["https://images-na.ssl-images-amazon.com/images/I/5154eSTKUxL._SX382_BO1,204,203,200_.jpg","https://images-na.ssl-images-amazon.com/images/I/5154eSTKUxL._SX382_BO1,204,203,200_.jpg","https://images-na.ssl-images-amazon.com/images/I/5154eSTKUxL._SX382_BO1,204,203,200_.jpg","https://images-na.ssl-images-amazon.com/images/I/5154eSTKUxL._SX382_BO1,204,203,200_.jpg"]}
        />
      </div>
    );
  }
}

export default ViewArticle;