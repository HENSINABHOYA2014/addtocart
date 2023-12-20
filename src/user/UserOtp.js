import React, { useState, useEffect } from 'react';
import { NavLink, useNavigate } from 'react-router-dom';

const UserOtp = () => {
  const [otp, setOtp] = useState('');
  const navigate = useNavigate();

  const Otp = () => {
    let userData = JSON.parse(localStorage.getItem('checkUserLogin'));
    if (!userData) {
      // Handle case where user data doesn't exist
      return;
    }

    let otpValue = Math.floor(Math.random() * 10000);
    let obj = {
      otp: otpValue,
      email: userData.email,
    };
    localStorage.setItem('userOtp', JSON.stringify(obj));
    alert('Your OTP:-' + otpValue);
  };

  const handleSubmit = () => {
    let storedOtp = JSON.parse(localStorage.getItem('userOtp'));
    if (otp === storedOtp.otp.toString()) {
      navigate('/');
    } else {
      alert('OTP is not correct');
    }
  };

  useEffect(() => {
    Otp();
  }, []);

  return (
    <div className="container">
      {/* Your form JSX */}
      <div className="col-12">
        <label htmlFor="yourEmail" className="form-label">
          Enter Your OTP
        </label>
        <input
          type="number"
          name="otp"
          className="form-control"
          id="otp"
          value={otp}
          onChange={(e) => setOtp(e.target.value)}
          required
        />
        <div className="invalid-feedback">Please enter a valid OTP!</div>
      </div>
      <div className="col-12">
        <div className="form-check">
          <input
            className="form-check-input"
            name="terms"
            type="checkbox"
            defaultValue
            id="acceptTerms"
            required
          />
          <label className="form-check-label" htmlFor="acceptTerms">
            I agree and accept the <a href="#">terms and conditions</a>
          </label>
          <div className="invalid-feedback">You must agree before submitting.</div>
        </div>
      </div>
      <div className="col-12">
        <NavLink
          className="btn btn-primary w-100"
          to={`/usernewpassword`}
          onClick={handleSubmit}
          type="button"
        >
          Send OTP
        </NavLink>
      </div>
      <div className="col-12">
        <p className="small mb-0">
          Already have an account? <a href="pages-login.html">Log in</a>
        </p>
      </div>
    </div>
  );
};

export default UserOtp;
