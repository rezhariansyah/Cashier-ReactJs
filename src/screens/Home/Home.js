import React, { Component, Fragment } from "react";
import "./home.css";
import ProductList from "../../components/ProductList";
import Cart from "../../components/Cart";
import Menu from "../../components/Menu";
import Header from "../../components/Header";
import { connect } from "react-redux";
import { getDataUser } from "../../configs/redux/actions/user";
import { getAllProduct } from "../../configs/redux/actions/product";
import { getCartitem } from "../../configs/redux/actions/cart";

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
    this.setState({ userList: this.props.user });
    await this.getAllProduct();
    await this.getCartItem()
  };

  getAllProduct = async () => {
    await this.props.dispatch(getAllProduct());
    this.setState({
      productList: this.props.product
    });
  };

  getCartItem = async () => {
    await this.props.dispatch(getCartitem());
    this.setState({
      cartList: this.props.cart
    });
  };

  render() {
    console.log("ini product", this.state.productList);
    console.log("ini cart", this.state.cartList);
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
            <Cart cart={this.state.cartList} />
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
    cart : state.cart.cartList
  };
};

export default connect(mapStateToProps)(Home);
