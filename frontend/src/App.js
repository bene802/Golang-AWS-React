import React, { Component } from "react";
import "./App.css";
import ProductList from "./components/ProductList";
import Navbar from "./components/Navbar";

class App extends Component {
  render() {
    return (
      <React.Fragment>
        <Navbar />
        <div className="container mt-5">
          <ProductList />
        </div>
      </React.Fragment>
    );
  }
}

export default App;
