import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import Auth from './../components/Auth';
import Welcome from './../components/Welcome';

import { logIn, logOut } from './../actions/auth';

import './../styles/header.css';

class Header extends Component {
  render() {
    const introduction = this.props.auth.authenticated 
                         ? <Welcome 
                              name={this.props.auth.userName} 
                              handleLogOut={this.props.logOut}/>
                         : <Auth
                              handleLogIn={this.props.logIn}/>
    return(
      <div className="row">
        <div className="col-md-6">
          <h1>Microblog</h1>
        </div>
        <div className="col-md-6 header-introduction">
          {introduction}
        </div>
      </div>
    )
  }
}

const mapStateToProps = state => {
  return {
    auth: state.auth
  }
}

const mapDispatchToProps = dispatch => {
  return bindActionCreators({ logIn, logOut }, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(Header);