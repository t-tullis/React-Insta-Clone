import React from "react";

import './Login.css'
import logo from '../../images/logo.png'


class Login extends React.Component {
    state = {
    usernameInput: "",
    passwordInput:""
  };

  handleUsername = e => this.setState({ 
      usernameInput: e.target.value
     });

     handlePassword = e => this.setState({
         passwordInput: e.target.value
     })

  signIn = e => {
    e.preventDefault();
    const username = this.state.usernameInput
    localStorage.setItem('username', username);
    window.location.reload();
  };


  render() {
    return (
      <div className='login'>
        <form className='login-form' onSubmit={this.signIn}>
        <img className='signin-logo'src={logo} alt='logo' />
            <input
                type="text"
                value={this.state.usernameInput}
                onChange={this.handleUsername}
             />
            <input
                type="password"
                value={this.state.passwordInput}
                onChange={this.handlePassword}
                />
                <button className='sign-in' onClick={this.signIn}>Sign In</button>
            </form>
        </div>
    );
  }
}

export default Login;