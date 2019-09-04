import React, { Component } from "react";
import "./login.css";
import swal from "sweetalert";
import { connect } from "react-redux";
import { userLogin } from "../../configs/redux/actions/user";


class Login extends Component {
  login = async () => {
    let data = {
      email: this.state.email,
      password: this.state.password
    };
    console.log(data);
    await this.props
      .dispatch(userLogin(data))
      .then(() => {
        swal({
          title: "Login Success",
          text: `Welcome ${this.state.email}`,
          icon: "success",
          button: "OK"
        }).then(() => {
          window.location.href = "/";
        });
      })
      .catch(() => {
        swal({
          title: "Login Failed",
          text: "Wrong Password or Email",
          icon: "warning",
          buttons: "OK"
        }).then(() => {});
      });
  };

  render() {
    return (
      <div>
        <div className="limiter">
          <div
            className="container-login100"
            style={{
              backgroundImage:
                'url("https://images.unsplash.com/photo-1504754524776-8f4f37790ca0?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80")'
            }}
          >
            <div className="wrap-login100 p-t-30 p-b-50">
              <span className="login100-form-title p-b-41 mb-4">
                Admin Login
              </span>
              <form className="login100-form validate-form p-b-33 p-t-5">
                <div className="wrap-input100 validate-input">
                  <input
                    className="input100"
                    type="text"
                    name="username"
                    placeholder="Email"
                    onChange={e => this.setState({ email: e.target.value })}
                  />
                  <span className="focus-input100" data-placeholder="📧" />
                </div>
                <div
                  className="wrap-input100 validate-input"
                  data-validate="Enter password"
                >
                  <input
                    className="input100"
                    type="password"
                    name="pass"
                    placeholder="Password"
                    onChange={e => this.setState({ password: e.target.value })}
                  />
                  <span className="focus-input100" data-placeholder="🔑" />
                </div>
                <div className="row justify-content-center mt-3 baru">
                  <input
                    type="button"
                    style={{ width: "100px" }}
                    className="btn btn-outline-primary rounded-pill"
                    value="Login"
                    onClick={this.login}
                  />
                </div>
              </form>
            </div>
          </div>
        </div>
        <div id="dropDownSelect1" />
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    userLogin: state.userLogin
  };
};

export default connect(mapStateToProps)(Login);
