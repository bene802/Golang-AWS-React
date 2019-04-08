import React, { Component } from "react";

class Search extends Component {
  state = {
    item: {
      kind: "fruit",
      minPrice: 0,
      maxPrice: 100
    }
  };
  kindHandler = event => {
    const item = {};
    Object.assign(item, this.state.item);
    item.kind = event.target.value;
    this.setState({ item });
  };
  maxPriceHandler = event => {
    const item = {};
    Object.assign(item, this.state.item);
    item.maxPrice = event.target.value;
    this.setState({ item });
  };
  minPriceHandler = event => {
    const item = {};
    Object.assign(item, this.state.item);
    item.minPrice = event.target.value;
    this.setState({ item });
  };
  render() {
    return (
      <div>
        <form>
          <div className="form-row align-items-center">
            <div className="col-auto my-1">
              <label className="mr-sm-2">Type</label>
              <select
                className="custom-select mr-sm-2"
                id="kind"
                onChange={e => this.kindHandler(e)}
              >
                <option value="fruit" defaultValue>
                  Fruit
                </option>
                <option value="drink">Drink</option>
                <option value="food">Food</option>
              </select>
            </div>
            <div className="col-auto my-1">
              <label className="mr-sm-2">Min Price</label>
              <input
                type="number"
                id="minPrice"
                className="form-control"
                onChange={e => this.minPriceHandler(e)}
              />
            </div>
            <div className="col-auto my-1">
              <label className="mr-sm-2">Max Price</label>
              <input
                type="number"
                id="maxPrice"
                className="form-control"
                onChange={e => this.maxPriceHandler(e)}
              />
            </div>
            <div className="col-auto my-1">
              <button
                className="btn btn-primary"
                type="button"
                onClick={() => this.props.searchFunction(this.state.item)}
              >
                Search
              </button>
            </div>
          </div>
        </form>
        <div />
      </div>
    );
  }
}

export default Search;
