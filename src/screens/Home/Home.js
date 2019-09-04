import React, { Component, Fragment } from "react";
import "./home.css";
import ProductList from "../../components/ProductList";
import Cart from "../../components/Cart";
import Menu from "../../components/Menu";
import Header from "../../components/Header";
import { connect } from "react-redux";
import { getDataUser } from "../../configs/redux/actions/user";

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      userList: []
    };
  }

  componentDidMount = async () => {
    await this.props.dispatch(getDataUser());
    this.setState({ userList: this.props.user });
  };

  render() {
    console.log('ini user',this.state.userList)
    return (
      <Fragment>
        <Header />
        <div className="d-flex" id="wrapper">
          <div className="bg-light border-right" id="sidebar-wrapper">
            <Menu/>
          </div>
          <div id="page-content-wrapper">
            <div className="container-fluid">
              <ProductList />
            </div>
          </div>
          <div className="cart-content-wrapper">
            <Cart />
          </div>
        </div>
      </Fragment>
    );
  }
}

const mapStateToProps = state => {
  return {
    user: state.user.userList[0]
  };
};

export default connect(mapStateToProps)(Home);
