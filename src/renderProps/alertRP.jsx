import React, { Component } from "react";
import Button from "@material-ui/core/Button";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogTitle from "@material-ui/core/DialogTitle";
import Checkbox from "@material-ui/core/Checkbox";
import FormControlLabel from "@material-ui/core/FormControlLabel";

class Alert extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <div>
        <Dialog
          open={this.props.open}
          onClose={this.props.handleClose}
          aria-labelledby="alert-dialog-title"
          aria-describedby="alert-dialog-description"
        >
          <DialogTitle id="alert-dialog-title">{this.props.title}</DialogTitle>
          <DialogContent>
            <DialogContentText id="alert-dialog-description">
              <p>{this.props.content}</p>
              <FormControlLabel
                control={
                  <Checkbox
                    checked={this.state.valid}
                    onChange={() =>
                      this.setState(state => ({
                        ...state,
                        valid: !state.valid
                      }))
                    }
                    value="valid"
                    color="primary"
                  />
                }
                label="Some to make form valid"
              />
            </DialogContentText>
          </DialogContent>
          <DialogActions>{this.props.actions(this.state)}</DialogActions>
        </Dialog>
      </div>
    );
  }
}

export default Alert;
