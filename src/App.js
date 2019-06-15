import React, { Component } from 'react';
import './App.css';

import { connect } from 'react-redux';
import { updateUser, getUsers } from './actions/user-actions';

class App extends Component {
  componentDidMount() {
    this.props.onGetUsers();
  }

  onUpdateUser = () => {
    this.props.onUpdateUser('Harun');
  }

  render() {
    return (
      <div className="App">
        <h2>{ this.props.user }</h2>
        <button onClick={this.onUpdateUser}>Change the name</button>
      </div>
    );
  }
}

const mapStateToProps = (state,props) => {
  return state;
};

const mapDispatchToProps = {
  onUpdateUser: updateUser,
  onGetUsers: getUsers
};

/* const mergeProps = (propsFromState,propsFromDispatch,ownProps) => {
  console.log(propsFromState);
  console.log(propsFromDispatch);
  console.log(ownProps);
  return {}
}; */

export default connect(mapStateToProps,mapDispatchToProps)(App);
