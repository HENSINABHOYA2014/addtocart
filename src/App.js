import React from 'react';  // You need to import React
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
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './user/Home';
import AdminLogic from './admin/AdminLogic';
import AdminRegister from './admin/AdminRegister';
import AdminProduct from './admin/AdminProduct';
import AdminCategeory from './admin/AdminCategeory';
import Layout from './components/Layout';
import Product from './user/Product';
import ProductDetails from './user/ProductDetails';
import Login from './user/Login';



function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* user route */}
        <Route path='/' element={<Layout />}>
          <Route path="/home" element={<Home />} />
          <Route path="/product" element={<Product />}/>
          <Route path="/product_details/:productId" element={<ProductDetails />} />
           <Route path='/login' element={<Login/>}></Route>
        </Route>

        {/* admin route */}
        <Route path="/adminlogic" element={<AdminLogic />} />
        <Route path="/adminregister" element={<AdminRegister />} />
        <Route path="/adminProduct" element={<AdminProduct />} />
        <Route path="/admincategory" element={<AdminCategeory />} />
      </Routes>
    </BrowserRouter>
  );
}
export default App;
