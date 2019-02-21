import React from "react";
import logo from '../../images/logo.png'
import styled from 'styled-components'

import './Login.css'

// ===================== STYLED COMPONETS ===================== 
const LoginWrapper = styled.div`
  width: 400px;
  margin: 0 auto;
  margin-top: 15%;
`;

const LoginForm = styled.div`
  display: flex;
  flex-direction: column;
 `;

 const SignIn = styled.button`
  padding: 3%;
  border-radius: 5px;
  font-family: 'Gothic A1', sans-serif;
  font-size: 1rem;
  letter-spacing: 2px;
  cursor: pointer;

  &:hover{
    background: navy;
    color: white;
  }
`;

const FormInput = styled.input`
  padding: 3% 1%;
  margin-bottom: 5%;
  border-radius: 5px;
`;

const SigninLogo = styled.img`
  width: 50%;
  margin: 0 auto;
  cursor: pointer;
`;
// =========================================================== 

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
      <LoginWrapper>
        <LoginForm onSubmit={this.signIn}>
        <SigninLogo src={logo} alt='logo' />
            <FormInput
                type="text"
                value={this.state.usernameInput}
                onChange={this.handleUsername}
             />
            <FormInput
                type="password"
                value={this.state.passwordInput}
                onChange={this.handlePassword}
                />
                <SignIn onClick={this.signIn}>Sign In</SignIn>
            </LoginForm>
        </LoginWrapper>
    );
  }
}

export default Login;