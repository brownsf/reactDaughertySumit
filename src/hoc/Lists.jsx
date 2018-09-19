import React, { Component } from "react";

const withList = WrappedComponent =>{
  class List extends Component {
    constructor(props) {
      super(props);
      
    }
    
    render() {
      const list = [{val:1, label:'First'}, {val:2, label: 'Second'}]
      return <WrappedComponent {...this.props} list={list} />;
    }
  };
  return List
}
export default withList
