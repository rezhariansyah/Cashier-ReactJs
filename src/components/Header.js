import React from "react";
import { Navbar, NavbarBrand, Nav, NavItem, NavLink } from "reactstrap";
import { connect } from "react-redux";
import { getJumlahCart } from "../configs/redux/actions/cart";

class Example extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      jumlahCart: 0
    };
    this.toggle = this.toggle.bind(this);
    this.state = {
      isOpen: false
    };
  }
  toggle() {
    this.setState({
      isOpen: !this.state.isOpen
    });
  }

  componentDidMount = async () => {
    await this.getJumlahCart();
    this.setState({
      jumlahCart: this.props.cart[0].jumlah
    });
  };

  getJumlahCart = async () => {
    await this.props.dispatch(getJumlahCart());
  };

  render() {
    return (
      <Navbar color="dark" className="sticky-top" dark expand="md">
        <NavbarBrand href="/">
          <i className="fa fa-bars fa-lg" aria-hidden="true" />
          <span className="ml-3">{localStorage.fullname}</span>
        </NavbarBrand>
        <div
          className="container mx-auto"
          style={{ width: "300px", justifyContent: "center" }}
        >
          <Nav navbar>
            <NavItem>
              <NavLink style={{ color: "white", fontSize: "20px" }}>
                Food Item
              </NavLink>
            </NavItem>
          </Nav>
        </div>
        <div style={{ width: "200px" }}>
          <input
            className="form-control form-control-sm"
            placeholder="Search item..."
          />
        </div>
        <div style={{ width: "400px", textAlign: "center", color: "white" }}>
          <NavLink>
            Cart
            <i className="fa fa-cart-plus fa-lg ml-2 mr-2" aria-hidden="true" />
            <span className="badge badge-secondary">
              {this.state.jumlahCart}
            </span>
          </NavLink>
        </div>
      </Navbar>
    );
  }
}

const mapStateToProps = state => {
  return {
    cart: state.cart.cartList
  };
};

export default connect(mapStateToProps)(Example);
