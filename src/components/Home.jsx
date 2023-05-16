import React from "react";
import Header from "./Header";
import Footer from "./Footer";

const Home = () => {
  return (
    <div class="grid-container">
      <div class="item1">
        <Header />
      </div>
      <div class="item3">
        <h1>Bienvenidos</h1>
        <img src="logo.png" />
      </div>
      <div class="item5"><Footer/></div>
    </div>
  );
};

export default Home;
