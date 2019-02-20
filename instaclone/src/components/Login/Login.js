import React from "react";


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
    localStorage.setItem(this.state.usernameInput, this.state.passwordInput);
    window.location.reload();
  };

  logOut = e => {
    e.preventDefault();
    localStorage.clear();
    window.location.reload();
  };

  render() {
    return (
      <div>
        <form onSubmit={this.signIn}>
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
                <button onClick={this.signIn}>Sign In</button>
                <button onClick={this.logOut}>Log out</button>
            </form>
        </div>
    );
  }
}

export default Login;