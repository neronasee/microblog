import React, { Component } from 'react';

import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/css/bootstrap-theme.css';

import Header from './containers/Header';
import Feed from './containers/Feed';

class App extends Component {
  render() {

    return (
      <div className="container">
        <Header />
        <Feed />
      </div>
    );
  }
}

export default App;
