import React, { Component } from "react";
import "./App.css";
import Products from "./components/Products";
import Navbar from "./components/Navbar";
import Search from "./components/Search";
import axios from "axios";

class App extends Component {
  state = {
    products: []
  };
  searchFunction = pro => {
    axios
      .get(
        `https://qsevhphgh0.execute-api.us-east-2.amazonaws.com/env/productFunction`,
        {
          params: {
            kind: pro.kind,
            minPrice: pro.minPrice,
            maxPrice: pro.maxPrice
          }
        }
      )
      .then(res => {
        console.log(res.data);
        let products = [];
        let cnt = 1;
        for (var i = 0; i < res.data.length; i++) {
          let data = res.data[i];
          let product = {
            id: cnt,
            Name: data.Name,
            Kind: data.Kind,
            Price: data.Price
          };
          products.push(product);
          cnt++;
        }
        this.setState({ products });
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
