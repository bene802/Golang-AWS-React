import React, { Component } from "react";
import "./App.css";
import Products from "./components/Products";
import Navbar from "./components/Navbar";
import Search from "./components/Search";
import axios from "axios";

class App extends Component {
  state = {
    products: [
      { id: 1, Name: "apple", Kind: "fruit", Price: 2.0 },
      { id: 2, Name: "banana", Kind: "fruit", Price: 10.0 },
      { id: 3, Name: "orange", Kind: "fruit", Price: 12.0 }
    ]
  };
  searchFunction = pro => {
    //if (pro.maxPrice === -1 || pro.minPrice === -1) return;
    console.log(pro);
    axios.get(`https://jsonplaceholder.typicode.com/users`).then(res => {
      let products = [{ id: 100, Name: "1111111", Kind: "fruit", Price: 2.0 }];
      this.setState({ products });
      console.log(this.state.products);
    });
  };
  render() {
    return (
      <React.Fragment>
        <Navbar />
        <div className="container mt-5">
          <Search searchFunction={this.searchFunction} />
          <Products products={this.state.products} />
        </div>
      </React.Fragment>
    );
  }
}

export default App;
