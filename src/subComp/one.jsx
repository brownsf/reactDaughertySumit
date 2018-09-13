import React, { Component } from 'react';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import { withStyles } from '@material-ui/core/styles';
import Form from './Form';

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
        <Grid
          container
          style={{ minHeight: '500px' }}
          justify="center"
          className={classes.root}
          spacing={16}
        >
          <Grid item lg={8} xs={12}>
            <Paper>
              <Form />
            </Paper>
          </Grid>
        </Grid>
        <Grid container justify="center" className={classes.bottom} spacing={16}>
          <Grid item xs={12} className={classes.header}>
            <h2>Pretty Designed Footer</h2>
          </Grid>
        </Grid>
      </React.Fragment>
    );
  }
}

export default withStyles(styles)(One);
