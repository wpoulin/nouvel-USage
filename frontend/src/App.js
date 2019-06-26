import React from "react";
import "./App.css";
import Header from "./components/header";
import Article from "./components/article";
import { Link } from "react-router-dom";

function App() {
  const img =
    "https://images-na.ssl-images-amazon.com/images/I/5154eSTKUxL._SX382_BO1,204,203,200_.jpg";
  const img2 =
    "https://images-na.ssl-images-amazon.com/images/I/51ovFaPaLjL._AC_SY400_.jpg";
  const img3 =
    "https://www.guru99.com/images/uploads/2012/06/head-first-java-original_v1.jpg";
  return (
    <div className="App">
      <Header />
      <div className="row">
          <div className="column">
          <Link to="/ViewArticle/1">
            <Article
                title={"Clean Code"}
                src={img}
                description={"Livre de scrap"}
                price={"19.99$"}
            />
          </Link>
          </div>
          <div className="column">
          <Link to="/ViewArticle/2">
            <Article
                title={"Programming Python"}
                src={img2}
                description={"Livre pour apprendre le python"}
                price={"20$"}
            />
          </Link>
          </div>
          <div className="column">
          <Link to="/ViewArticle/3">
            <Article
                title={"Head First Java"}
                src={img3}
                description={"Livre pour apprendre le Java"}
                price={"30$"}
            />
          </Link>
          </div>
      </div>
    </div>
  );
}

export default App;
