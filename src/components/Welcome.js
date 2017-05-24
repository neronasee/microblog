import React, { PureComponent } from 'react';

class Welcome extends PureComponent {
  render() {
    return (
      <div className="row">
        <div className="col-xs-6 header-introduction-text">
          Welcome, {this.props.name}
        </div>
        <div className="col-xs-6">
          <button 
            className="btn btn-danger" 
            onClick={this.props.handleLogOut}>
            Log Out
          </button>
        </div>
      </div>
    )
  }
}

export default Welcome;