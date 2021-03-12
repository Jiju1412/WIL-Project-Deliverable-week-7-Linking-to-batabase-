import React, {Component} from 'react';
import './login.css' ;
import logo from '../farmerLogo.png'
class Login extends Component {

    state = {
        username: "",
        password:"",
        loginStatus : false
    };

    inputChangeHandler = (event) =>{

        this.setState (
            {[event.target.name] : event.target.value}
        )
    }

    loginClicked = () => {

        if (this.state.username === "jiju" && this.state.password === "jiju"){
            this.props.history.push("/registration")
            this.setState({loginStatus : true})
        }
        else{
            this.setState({loginStatus : false})
        }
        
    }

    render(){
        return (
            <div className="box">
                <img src={logo} alt="Logo" />
                <h2 className="textHeading">Farmer Connect</h2>
                <h5 className="textHeading">Connecting different farmers all over the world!!</h5>
                <input className="textBox" type="text" name="username" placeholder="Username" value={this.state.username} onChange={this.inputChangeHandler} /><br></br>
                <input className="textBox" type="password" name="password" placeholder="Password" value={this.state.password} onChange= {this.inputChangeHandler}/><br></br>
                <button  className="button" onClick = {this.loginClicked}>Sign-in</button>
                <button className="button" >Sign-up</button>
                {/* <ShowLoginMessage loginStat = {this.state.loginStatus} /> */}

            </div>
            
        )
    }
}

const ShowLoginMessage = (props) => {

    if(props.loginStat){
        return <div>Login Successfull!!</div>
    }
    else{
        return <div>Login failed!!</div>
    }
    
}

export default Login;