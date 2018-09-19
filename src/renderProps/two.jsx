import React, { Component } from "react";
import Button from "@material-ui/core/Button";
import Alert from "./alertRP";

class One extends Component {
  constructor(props) {
    super(props);
    this.state = { open: false };
    this.handleClickOpen = this.handleClickOpen.bind(this);
    this.handleClose = this.handleClose.bind(this);
  }
  handleClickOpen = () => {
    this.setState({ open: true });
  };

  handleClose = () => {
    this.setState({ open: false });
  };

  render() {
    const actions = props => (
      <React.Fragment>
        <Button onClick={this.handleClose} color="primary">
          Disagree
        </Button>
        <Button
          disabled={!props.valid}
          onClick={this.handleClose}
          color="primary"
          autoFocus
        >
          Agree
        </Button>
      </React.Fragment>
    );
    return (
      <div>
        <Button onClick={this.handleClickOpen}>Open alert dialog</Button>

        <Alert
          open={this.state.open}
          handleClickOpen={this.handleClickOpen}
          handleClose={this.handleClose}
          content={<p><strong>Important</strong> Fancy Contents that are important to someone</p>}
          title="Look a fancy title"
          actions={actions}
        />
      </div>
    );
  }
}

export default One;
