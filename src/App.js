import React, { Component } from 'react';
import './App.css';

import { connect } from 'react-redux';
import { updateUser } from './actions/user-actions';

class App extends Component {
  constructor(props) {
    super(props);
    this.onUpdateUser = this.onUpdateUser.bind(this);
  }
  
  onUpdateUser() {
    this.props.dispatch(updateUser('Harun'));
  }

  render() {
    console.log(this.props);
    return (
      <div className="App">
        <h2>{ this.props.user }</h2>
        <button onClick={this.onUpdateUser}>Change the name</button>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return state;
};

export default connect(mapStateToProps)(App);
