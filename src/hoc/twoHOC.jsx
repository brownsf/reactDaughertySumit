import React, { Component } from 'react';
import Grid from '@material-ui/core/Grid'
import Checkbox from './Checkbox';
import Select from './Select';

class twoHOC extends Component {
    render() {
        return (
            <Grid container spacing={16}>
                <Grid item xs={6}>
                    <Checkbox/>
                </Grid>
                <Grid item xs={6}>
                    <Select />
                </Grid>
            </Grid>
        );
    }
}

export default twoHOC;