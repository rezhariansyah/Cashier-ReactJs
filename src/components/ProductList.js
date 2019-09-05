import React, { Component } from "react";
import swal from "sweetalert";
import { addToCart } from "../configs/redux/actions/cart";
import { connect } from "react-redux";

class ProductList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      cartList: []
    };
  }

  addToCart = async (id_product, status, name) => {
    if (status == "cart") {
      swal(`"${name}" has been added to your cart`);
    } else {
      await this.props.dispatch(addToCart(id_product));
      this.setState({
        cartList: this.props.cart
      });
      swal({
        title: "Added to your cart",
        text: "You clicked the button!",
        icon: "success",
        button: "Okay"
      }).then(() => {
        window.location.href = "/";
      });
    }
  };

  renderProduct = () => {
    let jsx = this.props.product.map(val => {
      return (
        <div className="col-md-3 mt-4">
        {
          val.status == "cart"
          ?
          (<div
            className="card gambarCart"
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
              className="card-img-top img-fluid imageCart"
              alt="..."
            />
            <div className="middleCart">
              <i
                className="fa fa-check-square fa-2x"
                style={{ cursor: "pointer" }}
                onClick={() => this.addToCart(val.id_product, val.status, val.name)}
                aria-hidden="true"
              ></i>
            </div>
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
          </div>)
          :
          (<div
            className="card gambar"
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
              className="card-img-top img-fluid image"
              alt="..."
            />
            <div className="middle">
              <i
                className="fa fa-cart-plus fa-2x"
                style={{ cursor: "pointer" }}
                onClick={() => this.addToCart(val.id_product, val.status, val.name)}
                aria-hidden="true"
              ></i>
            </div>
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
          </div>)
        }
          
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

const mapStateToProps = state => {
  return {
    cart: state.cart.cartList
  };
};

export default connect(mapStateToProps)(ProductList);
