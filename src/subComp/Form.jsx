import React, { Component } from 'react';
import Grid from '@material-ui/core/Grid';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import { withStyles } from '@material-ui/core/styles';

const styles = theme => ({
  root: {
    flexGrow: 1,
  },
  button: {
    margin: theme.spacing.unit,
  },
  paper: {
    height: 140,
    width: 100,
  },
  textField: {
    maxWidth: '100%',
    marginLeft: '7px',
    marginRight: '7px',
  },
  control: {
    padding: theme.spacing.unit * 2,
  },
  header: {
    textAlign: 'center',
  },

  bottom: {
    position: 'absolute',
    bottom: '0px',
  },
});
class Form extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const { classes } = this.props;
    const saveField = field => e => this.setState({ [field]: e.target.value });
    return (
      <form className={classes.container} noValidate autoComplete="off">
        <Grid container spacing={16}>
          <Grid item md={3} xs={6}>
            <TextField
              id="fname"
              label="First Name"
              className={classes.textField}
              margin="normal"
              onChange={saveField('fname')}
              value={this.state.fname}
            />
          </Grid>
          <Grid item md={3} xs={6}>
            <TextField
              id="Lname"
              label="Last Name"
              className={classes.textField}
              margin="normal"
              onChange={saveField('lname')}
              value={this.state.lname}
            />
          </Grid>
          <Grid item xs={7}>
            <TextField
              id="uncontrolled"
              fullWidth
              label="Email"
              className={classes.textField}
              margin="normal"
              onChange={saveField('email')}
              value={this.state.email}
            />
          </Grid>
          <Grid item xs={7}>
            <TextField
              id="uncontrolled"
              label="Address"
              className={classes.textField}
              fullWidth
              value={this.state.address}
              margin="normal"
              onChange={saveField('address')}
            />
          </Grid>
          <Grid item xs={7}>
            <TextField
              id="uncontrolled"
              label="Address Line 2"
              className={classes.textField}
              fullWidth
              value={this.state.address2}
              margin="normal"
              onChange={saveField('address2')}
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
                  value={this.state.city}
                  onChange={saveField('city')}
                />
              </Grid>
              <Grid item xs={2}>
                <TextField
                  id="uncontrolled"
                  label="State"
                  className={classes.textField}
                  fullWidth
                  value={this.state.state}
                  margin="normal"
                  onChange={saveField('state')}
                />
              </Grid>

              <Grid item xs={3}>
                <TextField
                  id="uncontrolled"
                  label="Zip"
                  value={this.state.zip}
                  className={classes.textField}
                  fullWidth
                  margin="normal"
                  onChange={saveField('zip')}
                />
              </Grid>
            </Grid>
            <Grid item xs={12}>
              <Grid container spacing={16}>
                <Grid item xs={3}>
                  <Button className={classes.button} variant="contained" color="primary">
                    Submit
                  </Button>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </form>
    );
  }
}

export default withStyles(styles)(Form);
