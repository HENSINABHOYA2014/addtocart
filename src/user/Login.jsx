import React from "react";
import { Link, NavLink } from "react-router-dom";

const Login = () => {
  return (
    <>
    
    <form className="login">
  <h2>Welcome, User!</h2>
  <p>Please log in</p>
  <input type="text" placeholder="User Name" />
  <input type="password" placeholder="Password" />
  <input type="button" defaultValue="Log In" />
  {/* <Link to={'/product_details/:productId'}>
  <input type="button" defaultValue="Log In" />
  </Link> */}
  
  <div className="links h5">
    <NavLink>Forgot password</NavLink>
    <NavLink>Register</NavLink>
  </div>
</form>


    </>
  )
}
export default Login;