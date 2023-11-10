import React from 'react'; 
import '../src/assets/css/loginpage.css';
import 'typeface-rubik';
import '../src/assets/css/style.css';
import '../src/assets/css/default.css';
import '../src/assets/css/font-awesome-pro.css';
import '../src/assets/flaticon/flaticon.css';
import '../src/assets/css/nice-select.css';
import '../src/assets/css/magnific-popup.css';
import '../src/assets/css/backtotop.css';
import '../src/assets/css/swiper-bundle.css';
import '../src/assets/css/animate.css';
import '../src/assets/css/meanmenu.css';
import '../src/assets/css/preloader.css';
import '../src/assets/css/owl-carousel.css';
import 'bootstrap/dist/css/bootstrap.min.css';
// admin panel

import '../src/assets-nice/css/style.css';

// import '../src/css/app.css'
import '../src/css/layout.css'
// admin panel end css

import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './user/Home';
import AdminRegister from './admin/pages/AdminRegister';
import AdminProduct from './admin/pages/AdminProduct';
import AdminCategeory from './admin/pages/AdminCategeory';
import AdminLayout from './admin/pages/AdminLayout';
import Layout from './components/Layout';
import Product from './user/Product';
import ProductDetails from './user/ProductDetails';
import Login from './user/Login';
import AdminDashboard from './admin/pages/AdminDashboard';
import Cart from './user/Cart';
import AdminViewProduct from './admin/pages/AdminViewProduct';
// import AdminUser from './admin/pages/User';
import User from './admin/pages/User';
import AdminHeader from './admin/pages/AdminHeader';
import AdminsideLayout from './admin/pages/AdminsideLayout';
import AdminFooter from './admin/pages/AdminFooter';
import AdminLogic from './admin/pages/AdminLogic';
import AdminForgetPassword from './admin/pages/AdminForgetPassword';
import AdminOtp from './admin/pages/AdminOtp';
import AdminNewPassword from './admin/pages/AdminNewPassword';
import UserDetails from './admin/pages/UserDetails';
import UserProfile from './user/UserProfile';
import UserRegister from './user/UserRegister';
import UserLogin from './user/UserLogin';


function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* user route */}
        <Route path='/' element={<Layout />}>
          <Route path="/home" element={<Home />} />
          <Route path="/product" element={<Product />} />
          <Route path="/product_details/:productId" element={<ProductDetails />} />
          <Route path='/userregister' element={<UserRegister/>}></Route>
          <Route path='/userLogin' element={<UserLogin/>}></Route>
          <Route path='/cart' element={<Cart/>}></Route>
          <Route path='/login' element={<Login />}></Route>
          <Route path='/userprofile' element={<UserProfile/>}></Route>
        </Route>
        {/* admin route */}
        <Route path='/admin' element={<AdminsideLayout />}>
          <Route path="/admin/adminregister" element={<AdminRegister />} />
          <Route path='/admin/adminLogic' element={<AdminLogic/>}></Route>
          <Route path='/admin/adminforgetpassword' element={<AdminForgetPassword/>}></Route>
          <Route path='/admin/adminotp' element={<AdminOtp/>}></Route>
          <Route path='/admin/adminnewpassword' element={<AdminNewPassword/>}></Route>
          <Route path='/admin/admindashboard' element={<AdminDashboard />}></Route>
          <Route path='/admin/userdetail/:userid' element={<UserDetails/>}></Route>
          <Route path="/admin/adminproduct" element={<AdminProduct />} />
          <Route path='/admin/user' element={<User />}></Route>
          <Route path="/admin/admincategeory" element={<AdminCategeory />} />
         <Route path='/admin/adminviewproduct' element={<AdminViewProduct/>}></Route>
         <Route path='/admin/adminlayout' element={<AdminLayout/>}></Route>
         <Route path='/admin/adminfooter' element={<AdminFooter/>}></Route>
         <Route path='/admin/adminheader' element={<AdminHeader/>}></Route>
         </Route>
      </Routes>
    </BrowserRouter>
  );
}
export default App;
