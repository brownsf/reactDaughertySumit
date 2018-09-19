import React, { Component } from "react";

const withPermissions = WrappedComponent =>{
  class Permissions extends Component {
    constructor(props) {
      super(props);
      this.state = { hasPerms: true };
    }
    render() {
      return <WrappedComponent {...this.props} hasPerms={this.state.hasPerms} />;
    }
  };
  return Permissions
}
export default withPermissions
