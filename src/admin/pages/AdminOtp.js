import React, { useState, useEffect } from 'react';
import { NavLink, useNavigate } from 'react-router-dom';


const AdminOtp = () => {
    const [otp, SetOtp] = useState("");
    const navigate = useNavigate()

    const Otp = () => {
        let userdata = JSON.parse(localStorage.getItem('checkUserLogin'))
        let otp = Math.floor(Math.random() * 10000);
        let obj = {
            otp: otp,
            email: userdata.email
        }
        localStorage.setItem("userOtp", JSON.stringify(obj));
        alert("Your OTP:-" + otp)
    }

    const handleSubmit = () => {
        let storedOtp = JSON.parse(localStorage.getItem("userOtp"));
        if (otp == storedOtp.otp) {
            navigate('/admin/adminnewpassword')
        }
        else {
            alert("Otp is not correct")
        }
    }
    useEffect(() => {
        Otp()
    }, [])

    return (
        <main id='main' className='main'>
            <div className="container">
                <section className="section register min-vh-100 d-flex flex-column align-items-center justify-content-center py-4">
                <div className="card mb-3">
                                            <div className="card-body">
                                                <div className="pt-4 pb-2">
                    <div className="container">
                        {/* Your form JSX */}
                        <div className="col-12">
                            <label htmlFor="yourEmail" className="form-label">Enter Your Otp</label>
                            <input
                                type="number"
                                name="otp"
                                className="form-control"
                                id="otp"
                                alue={otp}
                                onChange={(e) => SetOtp(e.target.value)}
                                required
                            />
                            <div className="invalid-feedback">Please enter a valid OTP!</div>

                            <div className="col-12">
                                <div className="form-check">
                                    <input className="form-check-input" name="terms" type="checkbox" defaultValue id="acceptTerms" required />
                                    <label className="form-check-label" htmlFor="acceptTerms">I agree and accept the <a href="#">terms and conditions</a></label>
                                    <div className="invalid-feedback">You must agree before submitting.</div>
                                </div>
                            </div>
                            <div className="col-12">
                                <NavLink className="btn btn-primary w-100" to={`/admin/adminnewpassword`} onClick={() => handleSubmit()} type="button">Send OTP</NavLink>
                            </div>
                            <div className="col-12">
                                <p className="small mb-0">Already have an account? <a href="pages-login.html">Log in</a></p>
                            </div>
                        </div>
                    </div>
                    </div>
                    </div>
                    </div>
                    
                </section>
            </div>
        </main>
    );
};

export default AdminOtp;
