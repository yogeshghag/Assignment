import React, { Component } from 'react';
import './App.css';

export default class Home extends Component{
    constructor(){
        super();
        this.state={
            uname:"",
            upass:"",
            userError:"",
            passError:""
        }
    }
    
    handleChange = (e) =>{
        this.setState({
            [e.target.name]:e.target.value
        })
    }

    handleLogin = (e) =>{
        e.preventDefault();
        if(this.validation()){
            this.setState({
                uname:"",
                upass:"",
                userError:"",
                passError:""
            })
            alert("Login Successfully!!")
        }
    }


    validation() {
        if(this.state.uname.length === 0){
            this.setState({
                userError: "Username required field.",
            })
        }
        else if(this.state.upass.length < 6){
            this.setState({
                passError: "Your password must be longer than 6 characters.",
                upass:""
            })
        }
        else if(this.state.upass.search(/[A-Z]/)<0){
            this.setState({
                passError: "Your password must contain at least one uppercase letter.",
                upass:""
            })
        }
        else if(this.state.upass.search(/[a-z]/)<0){
            this.setState({
                passError: "Your password must contain at least one lowercase letter.",
                upass:""
            })
        }
        else if(this.state.upass.search(/[0-9]/)<0){
            this.setState({
                passError: "Your password must contain at least one number.",
                upass:""
            })
        }
        else if(this.state.upass.search(/[!"#$%&'()*+,-./:;<=>?@[\]^_`{|}~]/)<0){
            this.setState({
                passError: "Your password must contain at least one special character.",
                upass:""
            })
        }

        else{
            return true
        }
    }

    render(){
        return (
            <>
            <form>
                <div className="imgcontainer">
                    <h1>Login</h1>
                </div>
                <div className="container">
                    <label><b>Username</b></label>
                    <input type="text" placeholder="Enter Username" name="uname" value={this.state.uname} onChange={this.handleChange} required/>
                    <p className="error">{this.state.userError}</p>
                    <label><b>Password</b></label>
                    <input type="password" placeholder="Enter Password" name="upass" value={this.state.upass} onChange={this.handleChange} required/>
                    <p className="error">{this.state.passError}</p>
                    <button type="submit" onClick={this.handleLogin}>Login</button>
                </div>
            </form>
            </>
        )
    }
}

