import React from "react";
import { useState } from "react";
import './LoginForm.css'

function Login(){

    const [action, setAction] = useState("Sign In")

    return(
        <div className="wrapper bg-dark d-flex align-items-center justify-content-center w-100">
            <div className="login">
                <h2 className="mb-3 d-flex align-items-center justify-content-center shoppy-color">Shoppy</h2>
                <h5 className="mb-3 d-flex align-items-center justify-content-center">{action}</h5>
                <form className="needs-validation">

                    {action === "Sign In" ? <div></div> : 
                        <div className='form-group was-validated mb-2'>
                            <label htmlFor="text">
                                Username
                                <input type="text" className="form-control" required></input>
                            </label>
                            <div className="invalid-feedback">
                                Please Enter your name
                            </div>
                        </div>
                    }

                    {action === "Sign Up" 
                        ? 
                        <div className='form-group was-validated mb-2'>
                        <label htmlFor="select-category">Select User Category</label>
                        <select 
                            className="mb-3 d-flex align-items-center justify-content-center" 
                            name="user-category" 
                            id="user-category"
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
                            <input type="email" className="form-control" required></input>
                        </label>
                        <div className="invalid-feedback">
                            Please Enter your email
                        </div>
                    </div>
                    
                    <div className="form-group was-validated mb-2">
                        <label htmlFor="password">
                            Password
                            <input type="password" className="form-control" required>
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
                    
                    <button type="submit" className={action==="Sign Up" ? 
                                    "btn btn-secondary block w-100 mt-2 log-in" : 
                                    "submit btn btn-success block w-100 mt-2 log-in"}
                                    onClick={()=>{setAction("Sign In")}}
                                    >SIGN IN</button>
                    
                    <button type="submit" className={action==="Sign In" ? 
                                    "btn btn-secondary block w-100 mt-2 log-in" : 
                                    "submit btn btn-success block w-100 mt-2 log-in"}
                                    onClick={()=>{setAction("Sign Up")}}
                                    >SIGN UP</button>   
                </form>
            </div>
        </div>
    )
    
}

export default Login;