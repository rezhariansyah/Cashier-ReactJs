import React from "react";
import {
  Button,
  Modal,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Form,
  Label,
  FormGroup,
  CustomInput
} from "reactstrap";
import { connect } from "react-redux";
import { addItem } from "../configs/redux/actions/product";
import swal from "sweetalert";

class ModalAddFood extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      modal: false,
      file: null
    };

    this.toggle = this.toggle.bind(this);
    this.onChangeFile = this.onChangeFile.bind(this);
  }

  onChangeFile = e => {
    console.log(e.target.files[0]);
    this.setState({
      file: e.target.files[0]
    });
  };

  addItem = async () => {
    const data = new FormData();
    data.append("img", this.state.file);
    data.append("name", this.state.name);
    data.append("price", this.state.price);

    await this.props.dispatch(addItem(data));
    this.setState(prevState => ({
      modal: !prevState.modal
    }));

    swal({
      title: "Add Item Success",
      text: "Please refresh the page!",
      icon: "success",
      button: "gotcha!!!"
    }).then(function() {
      window.location = "/";
    });
  };

  toggle() {
    this.setState(prevState => ({
      modal: !prevState.modal
    }));
  }

  render() {
    return (
      <div>
        <Button color="info" outline size="sm" onClick={this.toggle}>
          {this.props.buttonLabel}
          <i className="fa fa-plus fa-lg mr-4" aria-hidden="true" />
          Add Item
        </Button>
        <Modal
          isOpen={this.state.modal}
          toggle={this.toggle}
          className={this.props.className}
        >
          <ModalHeader toggle={this.toggle}>Modal title</ModalHeader>
          <ModalBody>
            <Form>
              <Label>Item Name</Label>
              <input
                type="text"
                className="form-control"
                id="name"
                onChange={e => this.setState({ name: e.target.value })}
              />
              <FormGroup className="mt-3">
                <Label for="img">File Browser</Label>
                <CustomInput
                  type="file"
                  id="img"
                  name="customFile"
                  onChange={this.onChangeFile}
                />
              </FormGroup>
              <div className="row justify-content-center">
                <div className="col-3-md">
                  <Label className="mt-2">Price</Label>
                  <input
                    type="number"
                    className="form-control"
                    id="price"
                    placeholder="Rp. "
                    onChange={e => this.setState({ price: e.target.value })}
                    style={{ width: "100px" }}
                  />
                </div>
              </div>
            </Form>
          </ModalBody>
          <ModalFooter>
            <Button color="primary" onClick={this.addItem.bind(this)}>
              Add
            </Button>{" "}
            <Button color="secondary" onClick={this.toggle}>
              Cancel
            </Button>
          </ModalFooter>
        </Modal>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    product: state.product.productList
  };
};

export default connect(mapStateToProps)(ModalAddFood);
