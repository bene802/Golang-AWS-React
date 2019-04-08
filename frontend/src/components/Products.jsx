import React, { Component } from "react";
import BootstrapTable from "react-bootstrap-table-next";
import paginationFactory from "react-bootstrap-table2-paginator";
class Products extends Component {
  render() {
    const columns = [
      {
        text: "#",
        dataField: "id",
        isKey: true
      },
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
    ];
    return (
      <div className="mt-5">
        <BootstrapTable
          keyField="id"
          data={this.props.products}
          columns={columns}
          pagination={paginationFactory()}
        />
      </div>
    );
  }
}

export default Products;
