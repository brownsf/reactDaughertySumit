import React, { Component } from 'react';
import withList from './Lists'
class Select extends Component {
    render() {
        return (
            <div>
                <select>
                    <option>Select...</option>
                    {this.props.list.map(item => <option value={item.val}>{item.label}</option>)}
                </select>
            </div>
        );
    }
}

export default withList(Select);