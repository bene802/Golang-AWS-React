import React, { Component } from "react";

class Product extends Component {
  render() {
    return (
      <tr>
        <td>{this.props.product.Name}</td>
        <td>{this.props.product.Kind}</td>
        <td>{this.props.product.Price}</td>
      </tr>
    );
  }
}

export default Product;
