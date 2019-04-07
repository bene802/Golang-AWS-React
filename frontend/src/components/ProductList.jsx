import React, { Component } from "react";
import Product from "./Product";
import BootstrapTable from "react-bootstrap-table-next";
class ProductList extends Component {
  state = {
    columns: [
      {
        dataField: "Name",
        text: "Name"
      },
      {
        dataField: "Kind",
        text: "Type"
      },
      {
        dataField: "Price",
        text: "Price",
        sort: true
      }
    ],
    products: [
      { Name: "apple", Kind: "fruit", Price: 2.0 },
      { Name: "banana", Kind: "fruit", Price: 10.0 },
      { Name: "orange", Kind: "fruit", Price: 12.0 }
    ]
  };

  render() {
    return (
      <React.Fragment>
        <div>
          <form>
            <div class="form-row align-items-center">
              <div class="col-auto my-1">
                <label class="mr-sm-2">Type</label>
                <select class="custom-select mr-sm-2" id="kind">
                  <option value="1" selected>
                    Fruit
                  </option>
                  <option value="2">Drink</option>
                  <option value="3">Food</option>
                </select>
              </div>
              <div class="col-auto my-1">
                <label class="mr-sm-2">Min Price</label>
                <input
                  type="number"
                  id="minPrice"
                  class="form-control"
                  required
                />
              </div>
              <div class="col-auto my-1">
                <label class="mr-sm-2">Max Price</label>
                <input
                  type="number"
                  id="maxPrice"
                  class="form-control"
                  required
                />
              </div>
              <div class="col-auto my-1">
                <button type="submit" class="btn btn-primary">
                  Search
                </button>
              </div>
            </div>
          </form>
        </div>
        <div className="mt-5">
          <BootstrapTable
            keyField="id"
            data={this.state.products}
            columns={this.state.columns}
          />
        </div>
      </React.Fragment>
    );
  }
}

export default ProductList;
