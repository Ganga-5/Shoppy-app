import React from "react";
import { useState } from "react";
import './LoginForm.css'
import axios from "axios";

function Login(){

    const [action, setAction] = useState("SignIn")

    const [username, setUsername] = useState("");
    const [usercategory, setUserCategory] = useState("");
    const [email, setEmail] = useState("");
    const [phoneNumber, setPhoneNumber] = useState("");
    const [password, setPassword] = useState("");

    

    // async function SignUp(event){
    //     event.preventDefault();
    //     try{
    //         await axios.post("http://ecomm-usr-mgmt.ap-south-1.elasticbeanstalk.com/api/v1/user/signup", {
    //         name: username,
    //         role: usercategory,
    //         email: email,
    //         phoneNumber: phoneNumber,
    //         password: password,
    //         });
    //         alert("Signup Successfully");
    //     }
    //     catch{
    //         alert("Something wrong");
    //     }
    // }
    return(
        <div className="wrapper bg-dark d-flex align-items-center justify-content-center w-100">
            <div className="login">
                <h2 className="mb-3 d-flex align-items-center justify-content-center shoppy-color">Shoppy</h2>
                <h5 className="mb-3 d-flex align-items-center justify-content-center">{action}</h5>
                <form className="needs-validation">

                    {action === "SignIn" ? <div></div> : 
                        <div className='form-group was-validated mb-2'>
                            <label htmlFor="text">
                                Username
                                <input 
                                    type="text" 
                                    className="form-control"
                                    id="username"
                                    value={username}
                                    onChange = {(event) => {
                                        setUsername(event.target.value);
                                    }}
                                    required
                                >
                                </input>
                            </label>
                            <div className="invalid-feedback">
                                Please Enter your name
                            </div>
                        </div>
                    }

                    {action === "SignUp" 
                        ? 
                        <div className='form-group was-validated mb-2'>
                        <label htmlFor="select-category">Select User Category</label>
                        <select 
                            className="mb-3 d-flex align-items-center justify-content-center" 
                            name="usercategory"
                            id="user-category"
                            value={usercategory}
                            onChange = {(event) => {
                                setUserCategory(event.target.value);
                            }}
                            required
                        >
                            <option value="Customer">Customer</option>
                            <option value="Seller">Seller</option>
                        </select>
                        <div className="invalid-feedback">
                            Please Select Category
                        </div>
                        </div> 
                        : 
                        <div className='form-group was-validated mb-2'>
                        <label htmlFor="select-category">Select User Category</label>
                        <select 
                            className="mb-3 d-flex align-items-center justify-content-center" 
                            name="user-category" 
                            id="user-category"
                            value={usercategory}
                            onChange = {(event) => {
                                setUserCategory(event.target.value);
                            }}
                            required
                        >
                            <option value="Customer">Customer</option>
                            <option value="Admin">Admin</option>
                            <option value="Seller">Seller</option>
                        </select>
                        <div className="invalid-feedback">
                            Please Select Category
                        </div>
                    </div>
                    }

                    <div className='form-group was-validated mb-2'>
                        <label htmlFor="email">
                            Email Address
                            <input 
                                type="email" 
                                className="form-control" 
                                id="email"
                                    value={email}
                                    onChange = {(event) => {
                                        setEmail(event.target.value);
                                    }}
                                required
                            >
                            </input>
                        </label>
                        <div className="invalid-feedback">
                            Please Enter your email
                        </div>
                    </div>
                    
                    <div className="form-group was-validated mb-2">
                        <label htmlFor="password">
                            Phone number
                            <input 
                                type="text" 
                                className="form-control"
                                id="phoneNumber" 
                                value={phoneNumber}
                                onChange = {(event) => {
                                    setPhoneNumber(event.target.value);
                            }}
                                required>
                            </input>
                        </label>
                        <div className="invalid-feedback">
                            Please Enter phoneNumber
                        </div>
                    </div>

                    <div className="form-group was-validated mb-2">
                        <label htmlFor="password">
                            Password
                            <input 
                                type="password" 
                                className="form-control"
                                id="password" 
                                value={password}
                                onChange = {(event) => {
                                    setPassword(event.target.value);
                            }}
                                required>
                            </input>
                        </label>
                        <div className="invalid-feedback">
                            Please Enter your password
                        </div>
                    </div>
                    <div className="form-group form-check mb-2">
                        <input type="checkbox" className="form-check-input"></input>
                        <label htmlFor="checkbox" className="form-check-label">Remember me!</label>
                    </div>
                    
                    <button type="submit" className={action==="SignUp" ? 
                        "btn btn-secondary block w-100 mt-2 log-in" : 
                        "submit btn btn-success block w-100 mt-2 log-in"}
                        onClick={()=>{setAction("SignIn")}}
                    >
                    SIGN IN
                    </button>
                    
                    <button type="submit" className={action==="SignIn" ? 
                        "btn btn-secondary block w-100 mt-2 log-in" : 
                        "submit btn btn-success block w-100 mt-2 log-in"}
                        onClick={()=>{setAction("SignUp")}}
                    >
                    SIGN UP
                    </button>   
                </form>
            </div>
        </div>
    )
    
}

export default Login;