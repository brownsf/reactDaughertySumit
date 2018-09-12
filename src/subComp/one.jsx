import React, { Component } from 'react';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import TextField from '@material-ui/core/TextField';
import { withStyles } from '@material-ui/core/styles';

const styles = theme => ({
  root: {
    flexGrow: 1,
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

class One extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const { classes } = this.props;
    return (
      <React.Fragment>
        <Grid container justify="center" className={classes.root} spacing={16}>
          <Grid item xs={12} className={classes.header}>
            <h2>Pretty Designed Header Image</h2>
          </Grid>
        </Grid>
        <Grid container justify="center" className={classes.root} spacing={16}>
          <Grid item lg={8} xs={12}>
            <Paper>
              <form className={classes.container} noValidate autoComplete="off">
                <Grid container>
                  <Grid item xs={6}>
                    <TextField
                      id="fname"
                      label="First Name"
                      className={classes.textField}
                      margin="normal"
                    />
                  </Grid>
                  <Grid item xs={6}>
                    <TextField
                      id="Lname"
                      label="Last Name"
                      className={classes.textField}
                      margin="normal"
                    />
                  </Grid>
                  <TextField
                    id="uncontrolled"
                    label="Uncontrolled"
                    defaultValue="foo"
                    className={classes.textField}
                    margin="normal"
                  />
                  <TextField
                    required
                    id="required"
                    label="Required"
                    defaultValue="Hello World"
                    className={classes.textField}
                    margin="normal"
                  />
                  <TextField
                    error
                    id="error"
                    label="Error"
                    defaultValue="Hello World"
                    className={classes.textField}
                    margin="normal"
                  />
                </Grid>
              </form>
            </Paper>
          </Grid>
        </Grid>
        <Grid container justify="center" className={classes.bottom} spacing={16}>
          <Grid item xs={12} className={classes.header}>
            <h2>Pretty Designed Header Image</h2>
          </Grid>
        </Grid>
      </React.Fragment>
    );
  }
}

export default withStyles(styles)(One);
