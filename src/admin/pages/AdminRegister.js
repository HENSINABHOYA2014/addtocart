import React from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { useState } from "react";
import { NavLink } from "react-router-dom";

const AdminRegister = () => {
    const navigate = useNavigate();
    const[name,setName]=useState("");
    const[username,setUserName]=useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const handleSubmit = async () => {
        let users = axios.post(`http://localhost:8000/admin`, {
            email: email,
            password: password,
            name:name,
            username:username
        });

        if (users) {
            console.log("User successfully register");
            navigate('/admin/adminLogic')
            setEmail("");
            setPassword("");
            setName("");
            setUserName("");
        } else {
            console.log("User not Register");
            return false;
        }
    }
    return (

        <>
        
            <div>
                <main>
                    <div className="container">
                        <section className="section register min-vh-100 d-flex flex-column align-items-center justify-content-center py-4">
                            <div className="container">
                                <div className="row justify-content-center">
                                    <div className="col-lg-4 col-md-6 d-flex flex-column align-items-center justify-content-center">
                                        <div className="d-flex justify-content-center py-4">
                                            <a href="index.html" className="logo d-flex align-items-center w-auto">
                                                <img src="assets/img/logo.png" alt />
                                                <span className="d-none d-lg-block">NiceAdmin</span>
                                            </a>
                                        </div>{/* End Logo */}
                                        <div className="card mb-3">
                                            <div className="card-body">
                                                <div className="pt-4 pb-2">
                                                    <h5 className="card-title text-center pb-0 fs-4">Create an Account</h5>
                                                    <p className="text-center small">Enter your personal details to create account</p>
                                                </div>
                                                <form className="row g-3 needs-validation" noValidate>
                                                    <div className="col-12">
                                                        <label htmlFor="yourName" className="form-label">Your Name</label>
                                                        <input type="text" name="name" onChange={(e)=>setName(e.target.value)} className="form-control" id="yourName" required />
                                                        <div className="invalid-feedback">Please, enter your name!</div>
                                                    </div>
                                                    <div className="col-12">
                                                        <label htmlFor="yourEmail" onChange={(e)=>setEmail(e.target.value)}className="form-label">Your Email</label>
                                                        <input type="email" name="email" className="form-control" id="yourEmail" required />
                                                        <div className="invalid-feedback">Please enter a valid Email adddress!</div>
                                                    </div>
                                                    <div className="col-12">
                                                        <label htmlFor="yourUsername" className="form-label">Username</label>
                                                        <div className="input-group has-validation">
                                                            <span className="input-group-text" id="inputGroupPrepend">@</span>
                                                            <input type="text" name="username" onChange={(e)=>setUserName(e.target.value)}className="form-control" id="yourUsername" required />
                                                            <div className="invalid-feedback">Please choose a username.</div>
                                                        </div>
                                                    </div>
                                                    <div className="col-12">
                                                        <label htmlFor="yourPassword" className="form-label">Password</label>
                                                        <input type="password" name="password" onChange={(e)=>setPassword(e.target.value)} className="form-control" id="yourPassword" required />
                                                        <div className="invalid-feedback">Please enter your password!</div>
                                                    </div>
                                                    <div className="col-12">
                                                        <div className="form-check">
                                                            <input className="form-check-input" name="terms" type="checkbox" defaultValue id="acceptTerms" required />
                                                            <label className="form-check-label" htmlFor="acceptTerms">I agree and accept the <a href="#">terms and conditions</a></label>
                                                            <div className="invalid-feedback">You must agree before submitting.</div>
                                                        </div>
                                                    </div>
                                                    <div className="col-12" >
                                                        <NavLink className="btn btn-primary w-100" type="button" defaultValue="Submit" to={`/admin/adminLogic`} onClick= {()=>handleSubmit()} >Submit</NavLink>
                                                    </div>
                                                    <div className="col-6">
                                                        <NavLink className="btn btn-primary w-100" to={'/admin/adminforgetpassword'} type="button" defaultValue="Submit" onClick= {()=>handleSubmit()} >Forgot Password</NavLink>
                                                    </div>
                                                    <div className="col-12">
                                                        <p className="small mb-0">Already have an account? <a href="pages-login.html">Log in</a></p>
                                                    </div>
                                                </form>
                                            </div>
                                        </div>
                                        <div className="credits">
                                            {/* All the links in the footer should remain intact. */}
                                            {/* You can delete the links only if you purchased the pro version. */}
                                            {/* Licensing information: https://bootstrapmade.com/license/ */}
                                            {/* Purchase the pro version with working PHP/AJAX contact form: https://bootstrapmade.com/nice-admin-bootstrap-admin-html-template/ */}
                                            Designed by <a href="https://bootstrapmade.com/">BootstrapMade</a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </section>
                    </div>
                </main>
                <a href="#" className="back-to-top d-flex align-items-center justify-content-center"><i className="bi bi-arrow-up-short" /></a>
            </div>

        </>
    )
}
export default AdminRegister;