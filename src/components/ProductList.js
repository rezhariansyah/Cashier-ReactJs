import React, { Component } from "react";

class ProductList extends Component {
  renderProduct = () => {
    let jsx = this.props.product.map(val => {
      return (
        <div className="col-md-3 mt-4">
          <div
            className="card"
            style={{ width: "10rem", borderRadius: "15px" }}
          >
            <img
              src={val.img}
              style={{
                borderTopLeftRadius: "15px",
                borderTopRightRadius: "15px",
                objectFit: "cover",
                height: "177px"
              }}
              className="card-img-top img-fluid"
              alt="..."
            />
            <div
              className="card-body"
              style={{ height: "80px", paddingTop: "3px", textAlign: "center" }}
            >
              <h6
                className="card-title"
                style={{ marginBottom: "0px", color: "#6D6F72" }}
              >
                {val.name}
              </h6>
              <p>Rp. {val.price}</p>
            </div>
          </div>
        </div>
      );
    });
    return jsx;
  };

  render() {
    return (
      <div>
        <div className="row ml-3 mr-3 mt-3 justify-content-center">
          {this.renderProduct()}
        </div>
      </div>
    );
  }
}

export default ProductList;
