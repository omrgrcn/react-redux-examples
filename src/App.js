import React, { Component } from 'react';
import './App.css';

import { connect } from 'react-redux';
import { updateUser } from './actions/user-actions';

class App extends Component {
  onUpdateUser = () => {
    this.props.onUpdateUser('Harun');
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

const mapStateToProps = (state,props) => {
  return {
    ...state,
    myCount: props.count + 2
  };
};

const mapDispatchToProps = {
  onUpdateUser: updateUser
};

export default connect(mapStateToProps,mapDispatchToProps)(App);
