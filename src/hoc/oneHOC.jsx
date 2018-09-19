import React, { Component } from 'react';
import withPermissions from './Permissions'
class OneHOC extends Component {
    render() {
        return (
            <div>
                {this.props.hasPerms ?
                <p>I'm allowed</p>:
                    <p>I'm trying to hack in... Muwahaha</p>
                }
            </div>
        );
    }
}

export default withPermissions(OneHOC);