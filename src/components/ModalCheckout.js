import React from "react";
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from "reactstrap";

class ModalCheckout extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      modal: false
    };
    this.toggle = this.toggle.bind(this);
  }

  toggle() {
    this.setState(prevState => ({
      modal: !prevState.modal
    }));
  }

  totalHarga = () => {
    let hasil = 0
    let semua = 0
    let total = this.props.data.reduce((sum, item) => (
        sum += Number(item.price)
    ), 0)
    
    hasil = total*0.1
    semua = total + hasil

    return semua
  }

  pattern = () => {
    var array = [1, 4, 3, 1, 2, 6, 8, 9, 3, 5, 7, 3, 1].sort(function() {
        return 0.5 - Math.random();
      });
  
      return array;
    };

  renderCheckout = () => {
    let jsx = this.props.data.map(val => {
      return (
        <div className="row justify-content-beetwen">
          <div className="col-md-6">
            <p>{val.name}</p>
          </div>
          <div className="col-md-6 text-right">
            <p>Rp. {val.price}</p>
          </div>
        </div>
      );
    });
    return jsx;
  };

  print=()=>{
      window.print()
      this.toggle()
  }
  render() {
    console.log("ini data cart", this.props.data);
    return (
      <div>
        <Button color="dark" outline onClick={this.toggle}>
          {this.props.buttonLabel}
          <i className="fa fa-money fa-lg mr-4" aria-hidden="true" />
          Checkout
        </Button>
        <Modal
          isOpen={this.state.modal}
          toggle={this.toggle}
          className={this.props.className}
        >
          <ModalHeader toggle={this.toggle}>
            <div className="row justify-content-beetwen ml-1">
              <div className="col-12-md">
                <h5>Checkout</h5>
                <h6>Cashier : {localStorage.fullname}</h6>
                <h6>Receipt #{this.pattern()}</h6>
              </div>
            </div>
          </ModalHeader>
          <ModalBody>
            {this.renderCheckout()}
            <div className="row">
                <div className="col-md-12 text-right">
                    <p>+ PPN 10%</p>
                    <p><span style={{color:"red"}}>Total Harga :</span> Rp. {this.totalHarga()}</p>
                </div>
            </div>
          </ModalBody>
          <ModalFooter>
            <Button color="info" onClick={this.print}>
              Print
            </Button>{" "}
            <Button color="danger" onClick={this.toggle}>
              Send Email
            </Button>
          </ModalFooter>
        </Modal>
      </div>
    );
  }
}

export default ModalCheckout;
