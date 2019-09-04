import React, { Component, Fragment } from "react";
import { Link } from "react-router-dom";
import ModalAddFood from "./ModalAddFood";
import swal from "sweetalert";

class Menu extends Component {

  logout = async () => {
    localStorage.clear();
    await swal({
      title: `Logout Success`,
      icon: "success"
    }).then(function() {
      window.location = "/login";
    });
  };

  render() {
    return (
      <Fragment>
        <div className="list-group list-group-flush">
          <Link to="/">
            <p className="list-group-item list-group-item-action bg-light">
              <i className="fa fa-cutlery fa-lg mr-4" aria-hidden="true" />{" "}
              Foods
            </p>
          </Link>

          <p className="list-group-item list-group-item-action bg-light">
            <i className="fa fa-book fa-lg mr-4" aria-hidden="true" /> History
          </p>
          <p className="list-group-item list-group-item-action bg-light">
            <ModalAddFood />
          </p>
          <p className="list-group-item list-group-item-action bg-light" onClick={this.logout}>
            <i className="fa fa-sign-out fa-lg mr-4" aria-hidden="true" />{" "}
            <span style={{ color: "red" }}>Logout</span>
          </p>
        </div>
      </Fragment>
    );
  }
}

export default Menu;
