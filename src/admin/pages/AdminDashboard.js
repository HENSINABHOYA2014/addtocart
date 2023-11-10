import axios from "axios";
import { useEffect, useState } from "react"

const AdminDashboard = () => {
  const [usercount, setUserCount] = useState(0);
  const [categorycount, setCategoryCount] = useState(0);
  const [productcount, setProductCount] = useState(0);

  useEffect(() => {
    axios.get(`http://localhost:8000/users`)
      .then((res) => {
        setUserCount(res.data.length)
      }).catch((err) => {
        console.log(err);
        return false;
      })

    axios.get(`http://localhost:8000/category`)
      .then((res) => {
        setCategoryCount(res.data.length)
      }).catch((err) => {
        console.log(err);
        return false;
      })

    axios.get(`http://localhost:8000/products`)
      .then((res) => {
        setProductCount(res.data.length)
      }).catch((err) => {
        console.log(err);
        return false;
      })
  })
  return (
    <>
      <div className='p-5'>
        <div className='row justify-content-between'>
          <div className="col-xl-6 col-xxl-5 d-flex">
            <div className="w-100">
              <div className="row">
                <div className="col-sm-3">
                  <div className="card">
                    <div className="card-body text-center">
                      <div className="row">
                        <div className="col ">
                          <h5 className="card-title">Users</h5>
                        </div>
                      </div>
                      <h1 className="mt-1 mb-3 ">{usercount}</h1>
                    </div>
                  </div>
                </div>
                <div className="col-sm-3">
                  <div className="card">
                    <div className="card-body text-center">
                      <div className="row">
                        <div className="col mt-0">
                          <h5 className="card-title">Product</h5>
                        </div>
                      </div>
                      <h1 className="mt-1 mb-3">{productcount}</h1>
                    </div>
                  </div>
                </div>
                <div className="col-sm-3">
                  <div className="card">
                    <div className="card-body text-center">
                      <div className="row">
                        <div className="col mt-0">
                          <h5 className="card-title">Category</h5>
                        </div>

                      </div>
                      <h1 className="mt-1 mb-3">{categorycount}</h1>

                    </div>
                  </div>
                </div>
                <div className="col-sm-3">
                  <div className="card">
                    <div className="card-body text-center">
                      <div className="row">
                        <div className="col mt-0">
                          <h5 className="card-title">Orders</h5>
                        </div>

                      </div>
                      <h1 className="mt-1 mb-3">64</h1>

                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* <div style={{ height: '100px', backgroundColor: 'orange',boxShadow : '5px 5px 5px gray' }} className='col-lg-2 p-3'>
          <h4 className='text-center text-white'>Category</h4>
          <h3 className='text-center text-white'>{categorycnt}</h3>
        </div>
        <div style={{ height: '100px', backgroundColor: 'orange',boxShadow : '5px 5px 5px gray' }} className='col-lg-2 p-3'>
          <h4 className='text-center text-white'>Product</h4>
          <h3 className='text-center text-white'>{productcnt}</h3>
        </div>
        <div style={{ height: '100px', backgroundColor: 'orange',boxShadow : '5px 5px 5px gray' }} className='col-lg-2 p-3'>
          <h4 className='text-center text-white'>User</h4>
        </div> */}


        </div>
      </div>
    </>
  )
}
export default AdminDashboard