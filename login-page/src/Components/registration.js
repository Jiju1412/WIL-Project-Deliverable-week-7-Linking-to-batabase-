import React, { Component, useState } from 'react';
import './registration.css';
import Axios from 'axios';

class registration extends Component {

    constructor (){
        super();

        this.state = {
            firstName: "",
            lastName: "",
            email:"",
            password:"",
            age:0,
            gender:"",
            typeOfFarmer:""
        }
    }

    submitClicked(){

        console.log(this.state.firstName);

        Axios.post('http://localhost:3001/register', {
            firstName : this.state.firstName,
            lastName : this.state.lastName,
            email : this.state.email,
            password : this.state.password,
            age : this.state.age,
            gender : this.state.gender,
            typeOfFarmer : this.state.typeOfFarmer
        }).then(() =>{
            console.log("success!! value inserted!!")
            alert("Data recorded!!")
        });
    }

    render () {

        return (
            <div className="mainBox">
                <h4>Registration Page</h4>
                <table>
                    <tr>
                        <td>
                            <label className="text">First Name</label>
                        </td>
                        <td >
                            <input onChange={(event) => {this.state.firstName = event.target.value}} placeholder='First Name'></input><br/>
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <label className="text">Last Name</label>
                        </td>
                        <td >
                            <input onChange={(event) => {this.state.lastName = event.target.value}} placeholder='Last Name'></input><br/>
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <label className="text">Email</label>
                        </td>
                        <td >
                            <input onChange={(event) => {this.state.email = event.target.value}} placeholder='Email'></input><br/>
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <label className="text">Password</label>
                        </td>
                        <td >
                            <input onChange={(event) => {this.state.password = event.target.value}} placeholder='Password'></input><br/>
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <label className="text">Age</label>
                        </td>
                        <td >
                            <input onChange={(event) => {this.state.age = event.target.value}} placeholder='age'></input><br/>
                        </td>
                    </tr>
                    {/* <tr>
                        <td>
                            <label className="text">Date of birth</label>
                        </td>
                        <td >
                            <input onChange={(event) => {this.state.lastLame = event.target.value}} placeholder='YYYY-MM-DD'></input><br/>
                        </td>
                    </tr> */}
                    <tr>
                        <td>
                            <label className="text">Gender</label>
                        </td>
                        <td >
                        <select onChange={(event) => {this.state.gender = event.target.value}} name="Gender" id="Gender">
                                <option value="Male">Male</option>
                                <option value="Female">Female</option>
                                <option value="Other">Other</option>
                            </select>
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <label className="text">Type Of Farmers</label>
                        </td>
                        <td >
                        <select onChange={(event) => {this.state.typeOfFarmer = event.target.value}} name="farmerType" id="farmerType">
                                <option value="Commercial">Commercial</option>
                                <option value="Arable">Arable</option>
                                <option value="Livestock">Livestock</option>
                                <option value="Mixed farmer">Mixed farmer</option>
                                <option value="Intensive farmer">Intensive farmer</option>
                                <option value="Sedentary farmer">Sedentary farmer</option>
                                <option value="Nomadic farmer">Nomadic farmer</option>
                                <option value="Extensive farmer">Extensive farmer</option>
                                <option value="Subsistence farmer">Subsistence farmer</option>
                                <option value="Pastoral farmer">Pastoral farmer</option>
                                <option value="Medical Farmer">Medical Farmer</option>
                            </select>
                        </td>
                    </tr>
                </table>
                <button onClick={() => this.submitClicked()} className="button">Registration</button>
            </div>
        )

    }
}

export default registration;