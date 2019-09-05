import React, { Component, Fragment } from "react";
import "./home.css";
import ProductList from "../../components/ProductList";
import Cart from "../../components/Cart";
import Menu from "../../components/Menu";
import Header from "../../components/Header";
import { connect } from "react-redux";
import { getDataUser } from "../../configs/redux/actions/user";
import { getAllProduct } from "../../configs/redux/actions/product";
import { getCartitem, addToCart } from "../../configs/redux/actions/cart";

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      userList: [],
      productList: [],
      cartList: []
    };
  }

  componentDidMount = async () => {
    await this.props.dispatch(getDataUser());
    await this.getAllProduct();
    await this.getCartItem();
    this.setState({
      userList: this.props.user,
      productList: this.props.product,
      cartList: this.props.cart
    });
  };

  getAllProduct = async () => {
    await this.props.dispatch(getAllProduct());
  };

  getCartItem = async () => {
    await this.props.dispatch(getCartitem());
  };

  render() {
    return (
      <Fragment>
        <Header />
        <div className="d-flex" id="wrapper">
          <div className="bg-light border-right" id="sidebar-wrapper">
            <Menu />
          </div>
          <div id="page-content-wrapper">
            <div className="container-fluid">
              <ProductList product={this.state.productList} />
            </div>
          </div>
          <div className="cart-content-wrapper">
            {this.state.cartList.length > 0 ? (
              <Cart cartHome={this.state.cartList} />
            ) : (
              <div className="row justify-content-center text-center">
                <div className="col-12-md">
                  <img src={require('../../assets/img/food.png')} className="img-fluid" style={{width:"240px"}} alt="..." />
                  <h5>Empty Cart</h5>
                </div>
              </div>
            )}
          </div>
        </div>
      </Fragment>
    );
  }
}

const mapStateToProps = state => {
  return {
    user: state.user.userList[0],
    product: state.product.productList,
    cart: state.cart.cartList
  };
};

export default connect(mapStateToProps)(Home);
