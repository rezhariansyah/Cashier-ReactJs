import React, { Component } from "react";

class Cart extends Component {

  delete = () => {
    alert('masuk')
  }

  renderCart = () => {
    let jsx = this.props.cart.map(val => {
      return (
        <div className="col-sm-12 text-center mt-4">
          <div className="row">
            <div className="col-md-7 gambar">
              <img
                src={val.img}
                style={{ width: "180px", borderRadius: "10px", objectFit: "cover", height: "138px" }}
                alt=""
                className="img-fluid image"
              />
              <div className="middle">
                <i className="fa fa-trash-o fa-2x" style={{cursor:"pointer"}} onClick={() => this.delete()} aria-hidden="true"></i>
              </div>
            </div>
            <div className="col-md-5">
              <div className="row justify-content-center">
                <div className="col-md-12">
                  <h6 style={{ marginBottom: "0px" }}>{val.name}</h6>
                  <p style={{ marginBottom: "5px" }}>Rp. {val.price}</p>
                </div>
              </div>
              <div className="row justify-content-center">
                <div className="col-md-12">
                  <input
                    type="button"
                    value="-"
                    className="btn btn-outline-dark btn-sm"
                    style={{ width: "27px" }}
                  />
                  <input
                    style={{
                      width: "30px",
                      height: "30px",
                      borderRadius: "15px",
                      borderColor: "#DEE2E6",
                      marginLeft: "2px",
                      marginRight: "2px",
                      backgroundColor: "white"
                    }}
                    className="text-center"
                    value={1}
                    type="text"
                    disabled
                  />
                  <input
                    type="button"
                    value="+"
                    className="btn btn-outline-dark btn-sm text"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      )
    })
    return jsx
  }

  render() {
    return (
      <div className="row">
        {this.renderCart()}
      </div>
    );
  }
}

export default Cart;
