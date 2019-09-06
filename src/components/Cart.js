import React, { Component, Fragment } from "react";
import swal from "sweetalert";
import { deleteCartItem, getCartitem } from "../configs/redux/actions/cart";
import { connect } from "react-redux";
import ModalCheckout from "./ModalCheckout";

class Cart extends Component {
  constructor(props) {
    super(props);
    this.state = {
      cartList: []
    };
  }

  componentDidMount = async () => {
    await this.setState({
      cartList: this.props.cartHome
    });
  };

  deleteCartItem = async id_product => {
    await this.props.dispatch(deleteCartItem(id_product));
    swal({
      title: "item removed",
      text: "You clicked the button!",
      icon: "success",
      button: "Okay"
    }).then(async () => {
      await this.props.dispatch(getCartitem());
      this.setState({
        cartList: this.props.cart
      });
      window.location.href = "/";
    });
  };

  totalHarga = () => {
    let total = this.state.cartList.reduce((sum, item) => (
        sum += Number(item.price)
    ), 0)
        
    return total
  }

  render() {
    const { cartList } = this.state;
    console.log("cart", cartList);
    return (
      <Fragment>
        <div className="row">
          {cartList.length > 0 &&
            cartList.map(val => {
              return (
                <div className="col-sm-12 text-center mt-4">
                  <div className="row">
                    <div className="col-md-7 gambar">
                      <img
                        src={val.img}
                        style={{
                          width: "180px",
                          borderRadius: "10px",
                          objectFit: "cover",
                          height: "138px"
                        }}
                        alt="..."
                        className="img-fluid image"
                      />
                      <div className="middle">
                        <i
                          className="fa fa-trash-o fa-2x"
                          style={{ cursor: "pointer" }}
                          onClick={() => this.deleteCartItem(val.id_product)}
                          aria-hidden="true"
                        ></i>
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
              );
            })}
        </div>
        <div className="row justify-content-center mt-5">
          <div className="col-5-md text-center">
            <h5>Total Price : Rp. {this.totalHarga()}</h5>
            <ModalCheckout data={cartList}/>
          </div>
        </div>
      </Fragment>
    );
  }
}

const mapStateToProps = state => {
  return {
    cart: state.cart.cartList
  };
};

export default connect(mapStateToProps)(Cart);
