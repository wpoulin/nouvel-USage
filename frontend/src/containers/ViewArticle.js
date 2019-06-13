import React, { Component } from "react";
import Header from "../components/header";

class ViewArticle extends Component {
  render () {

    console.log(this.props);

    const { params } = this.props.match;

    return (
      <div className="ViewArticle">
        <Header />
        <h1>View article {params.id}</h1>
      </div>
    );
  }
}

export default ViewArticle;