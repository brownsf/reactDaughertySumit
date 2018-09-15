import React, { Component } from "react";
import Button from "@material-ui/core/Button";
import Alert from "./alert";
import AlertProps from "./alertProps";

class One extends Component {
  constructor(props) {
    super(props);
    this.state = {};
    this.handleClickOpen = this.handleClickOpen.bind(this);
    this.handleClose = this.handleClose.bind(this);
  }
  handleClickOpen = () => {
    this.setState({ open: true });
  };

  handleClose = () => {
    this.setState({ open: false });
  };
  handleClickOpen2 = () => {
    this.setState({ open2: true });
  };

  handleClose2 = () => {
    this.setState({ open2: false });
  };
  render() {
    return (
        <div>
            <Button onClick={this.handleClickOpen}>Open alert dialog</Button>
            <Button onClick={this.handleClickOpen2}>Open customized alert dialog</Button>
        <Alert
          open={this.state.open}
          handleClickOpen={this.handleClickOpen}
          handleClose={this.handleClose}
        />
        <AlertProps
          open={this.state.open2}
          handleClickOpen={this.handleClickOpen2}
          handleClose={this.handleClose2}
          content="Fancy Contents that are important to someone"
          title="Look a fancy title"
        />
      </div>
    );
  }
}

export default One;
