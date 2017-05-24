import React, { PureComponent } from 'react';

class Auth extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      value: ''
    }

    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleInputChange(e) {
    this.setState({value: e.target.value})
  }

  handleSubmit(e) {
    e.preventDefault();

    const value = this.state.value;

    if(value) {
      this.props.handleLogIn(value);
      this.setState({value: ''});
    }
  }

  render() {
    return (
      <div>
        <form className="form-inline" onSubmit={this.handleSubmit}>
          <div className="form-group">
            <input 
              className="form-control"
              type="text" 
              onChange={this.handleInputChange} 
              value={this.state.value}
              placeholder="Enter your login..."/>
          </div>
          <button className="btn btn-success" type="submit">Login</button>
        </form>
      </div>
    )
  }
}

export default Auth;