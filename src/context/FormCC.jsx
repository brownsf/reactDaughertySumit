import React, { Component } from "react";
import Grid from "@material-ui/core/Grid";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import { withStyles } from "@material-ui/core/styles";

const FormContext = React.createContext();
const styles = theme => ({
  root: {
    flexGrow: 1
  },
  button: {
    margin: theme.spacing.unit
  },
  paper: {
    height: 140,
    width: 100
  },
  textField: {
    maxWidth: "100%",
    marginLeft: "7px",
    marginRight: "7px"
  },
  control: {
    padding: theme.spacing.unit * 2
  },
  header: {
    textAlign: "center"
  },

  bottom: {
    position: "absolute",
    bottom: "0px"
  }
});
class FormCC extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  static address = props => {
    return (
      <FormContext.Consumer>
        {({ classes, vals, saveField }) => (
          <Grid container>
            <Grid item xs={7}>
              <TextField
                id="uncontrolled"
                label="Address"
                className={classes.textField}
                fullWidth
                value={vals.address}
                margin="normal"
                onChange={saveField("address")}
              />
            </Grid>
            <Grid item xs={7}>
              <TextField
                id="uncontrolled"
                label="Address Line 2"
                className={classes.textField}
                fullWidth
                value={vals.address2}
                margin="normal"
                onChange={saveField("address2")}
              />
            </Grid>
            <Grid item xs={12}>
              <Grid container spacing={16}>
                <Grid item xs={2}>
                  <TextField
                    id="uncontrolled"
                    label="City"
                    className={classes.textField}
                    fullWidth
                    margin="normal"
                    value={vals.city}
                    onChange={saveField("city")}
                  />
                </Grid>
                <Grid item xs={2}>
                  <TextField
                    id="uncontrolled"
                    label="State"
                    className={classes.textField}
                    fullWidth
                    value={vals.state}
                    margin="normal"
                    onChange={saveField("state")}
                  />
                </Grid>

                <Grid item xs={3}>
                  <TextField
                    id="uncontrolled"
                    label="Zip"
                    value={vals.zip}
                    className={classes.textField}
                    fullWidth
                    margin="normal"
                    onChange={saveField("zip")}
                  />
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        )}
      </FormContext.Consumer>
    );
  };

  static names = props => {
    return (
      <FormContext.Consumer>
        {({ classes, vals, saveField }) => (
          <Grid container spacing={16}>
            <Grid item md={3} xs={6}>
              <TextField
                id="fname"
                label="First Name"
                className={classes.textField}
                margin="normal"
                onChange={saveField("fname")}
                value={vals.fname}
              />
            </Grid>
            <Grid item md={3} xs={6}>
              <TextField
                id="Lname"
                label="Last Name"
                className={classes.textField}
                margin="normal"
                onChange={saveField("lname")}
                value={vals.lname}
              />
            </Grid>
          </Grid>
        )}
      </FormContext.Consumer>
    );
  };

  static email = props => {
    return (
      <FormContext.Consumer>
        {({ classes, vals, saveField }) => (
          <Grid container spacing={16}>
            <Grid item xs={6}>
              <TextField
                id="email"
                label="Email"
                className={classes.textField}
                margin="normal"
                onChange={saveField("email")}
                value={vals.fname}
              />
            </Grid>
          </Grid>
        )}
      </FormContext.Consumer>
    );
  };

  static submit = props => {
    const { classes, vals, saveField } = props;
    return (
      <FormContext.Consumer>
        {({ classes, vals, saveField }) => (
          <Grid container spacing={16}>
            <Grid item xs={3}>
              <Button
                className={classes.button}
                variant="contained"
                color="primary"
              >
                Submit
              </Button>
            </Grid>
          </Grid>
        )}
      </FormContext.Consumer>
    );
  };

  render() {
    const saveField = field => e => this.setState({ [field]: e.target.value });
    return (
      <FormContext.Provider value={{
        ...this.props,
        vals: this.state,
        saveField
        }}
        >
        {this.props.children}
        </FormContext.Provider>
   
    );
  }
}

export default withStyles(styles)(FormCC);
