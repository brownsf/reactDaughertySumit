import React from 'react';
import withLists from './Lists'
import FormControlLabel from '@material-ui/core/FormControlLabel'
import Checkbox from '@material-ui/core/Checkbox'

const Check = (props) => {
    return (
        <div>
            {props.list.map(item => (
                <FormControlLabel
                    control={
                        <Checkbox
                            
                            value={item.val}
                            color="primary"
                        />
                    }
                    label={item.label}
                />
            ))}
        </div>
    );
};

export default withLists(Check);