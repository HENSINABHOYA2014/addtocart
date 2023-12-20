import React from 'react'
import { useState } from 'react';
import { Navigate, useNavigate } from 'react-router-dom'; 
import { NavLink } from 'react-router-dom'

const UserForgetPassword = () => {
  // const history = useHistory();
  const navigate = useNavigate()
  const[email,setEmail] = useState("");

 

  const handlesubmit = ()=>{
      let emailData = JSON.parse(
localStorage
.getItem('checkUserLogin'))
      if(emailData.email === email){
          navigate('/userotp')
          console.log(email);
      }
  }


  return (
    <>
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
                    <label htmlFor="yourEmail" className="form-label">Your Email</label>
                    <input type="email" name="email" className="form-control" id="useremail"
               
                onChange={(e) => setEmail(e.target.value)} required />
                    <div className="invalid-feedback">Please enter a valid Email adddress!</div>
                  </div>
                  <div className="col-12">
                    <div className="form-check">
                      <input className="form-check-input" name="terms" type="checkbox" defaultValue id="acceptTerms" required />
                      <label className="form-check-label" htmlFor="acceptTerms">I agree and accept the <a href="#">terms and conditions</a></label>
                      <div className="invalid-feedback">You must agree before submitting.</div>
                    </div>
                  </div>
                  <div className="col-12">
                    <NavLink className="btn btn-primary w-100" to={`/userotp`} onClick={()=>handlesubmit()} type="button">Send Email</NavLink>
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

    </>
  )
}

export default UserForgetPassword;