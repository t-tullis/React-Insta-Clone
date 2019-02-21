import React from 'react';

class SignOut extends React.Component{
    constructor(){
        super()
        this.state ={
        }
    }
    
    logOut = e => {
        e.preventDefault();
        localStorage.clear();
        window.location.reload();
      };
    render(){
        return(
            <i onClick={this.logOut} className="fas fa-sign-out-alt fa-2x"></i>
        )
    }
}

export default SignOut;