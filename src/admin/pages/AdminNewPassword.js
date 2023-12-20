// import React from 'react';
// import { useState,useEffect } from 'react';
// import { NavLink,Navigate } from 'react-router-dom';


// function AdminNewPassword() {
//     const[password,Setpassword] = useState("");
//   const[confirmpassword,SetConfirmpassword] = useState("");
  
//   const handleSubmit = () => {
//     if (password === confirmpassword) {
//       // Hash the password securely using bcrypt
//       bcrypt.hash(password, 10, function (err, hash) {
//         if (err) {
//           console.error(err);
//           return;
//         }
       
//         localStorage.setItem('hashedPassword', hash);
       
//       });
//     } else {
//       alert('Passwords do not match');
//     }
//   };

//   return (
//     <>
//     <div>
//                 <main>
//                     <div className="container">
//                         <section className="section register min-vh-100 d-flex flex-column align-items-center justify-content-center py-4">
//                             <div className="container">
//                                 <div className="row justify-content-center">
//                                     <div className="col-lg-4 col-md-6 d-flex flex-column align-items-center justify-content-center">
//                                         <div className="d-flex justify-content-center py-4">
//                                             <a href="index.html" className="logo d-flex align-items-center w-auto">
//                                                 <img src="assets/img/logo.png" alt />
//                                                 <span className="d-none d-lg-block">NiceAdmin</span>
//                                             </a>
//                                         </div>{/* End Logo */}
//                                         <div className="card mb-3">
//                                             <div className="card-body">
//                                                 <div className="pt-4 pb-2">
//                                                     <h5 className="card-title text-center pb-0 fs-4">Create an Account</h5>
//                                                     <p className="text-center small">Enter your personal details to create account</p>
//                                                 </div>
//                                                 <form className="row g-3 needs-validation" noValidate>
                                                   
//                                                     <div className="col-12">
//                                                         <label htmlFor="yourPassword" className="form-label">New Password</label>
//                                                         <input type="password" name="password" onChange={(e)=>Setpassword(e.target.value)} className="form-control" id="yourPassword" required />
//                                                         <div className="invalid-feedback">Please enter your new password!</div>
//                                                     </div>
//                                                     <div className="col-12">
//                                                         <label htmlFor="yourPassword" className="form-label">Conform Password</label>
//                                                         <input type="password" name="password" onChange={(e)=>SetConfirmpassword(e.target.value)} className="form-control" id="yourPassword" required />
//                                                         <div className="invalid-feedback">Please enter your confirm password!</div>
//                                                     </div>
//                                                     <div className="col-12">
//                                                         <div className="form-check">
//                                                             <input className="form-check-input" name="terms" type="checkbox" defaultValue id="acceptTerms" required />
//                                                             <label className="form-check-label" htmlFor="acceptTerms">I agree and accept the <a href="#">terms and conditions</a></label>
//                                                             <div className="invalid-feedback">You must agree before submitting.</div>
//                                                         </div>
//                                                     </div>
//                                                     <div className="col-12" >
//                                                         <NavLink to={`/admin/adminLogic`} className="btn btn-primary w-100" type="button" defaultValue="Submit" onClick= {()=>handleSubmit()} >Submit</NavLink>
//                                                     </div>
                                                  
//                                                     <div className="col-12">
//                                                         <p className="small mb-0">Already have an account? <a href="pages-login.html">Log in</a></p>
//                                                     </div>
//                                                 </form>
//                                             </div>
//                                         </div>
//                                         <div className="credits">
//                                             {/* All the links in the footer should remain intact. */}
//                                             {/* You can delete the links only if you purchased the pro version. */}
//                                             {/* Licensing information: https://bootstrapmade.com/license/ */}
//                                             {/* Purchase the pro version with working PHP/AJAX contact form: https://bootstrapmade.com/nice-admin-bootstrap-admin-html-template/ */}
//                                             Designed by <a href="https://bootstrapmade.com/">BootstrapMade</a>
//                                         </div>
//                                     </div>
//                                 </div>
//                             </div>
//                         </section>
//                     </div>
//                 </main>
//                 <a href="#" className="back-to-top d-flex align-items-center justify-content-center"><i className="bi bi-arrow-up-short" /></a>
//             </div>
//     </>
//   )
// }

// export default AdminNewPassword