import React, { Component } from 'react';
import './App.css';

import { connect } from 'react-redux';
import { updateUser, getUsers } from './actions/user-actions';

class App extends Component {
  componentDidMount() {
    setTimeout(() => {
      this.props.onGetUsers();
    }, 2000)
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

export default connect(mapStateToProps,mapDispatchToProps)(App);
