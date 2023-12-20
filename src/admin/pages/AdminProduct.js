import axios from "axios";
import { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";



const AdminProduct = () => {
  const [categeory, setCategeory] = useState([])

  const [categeoryname, setCategeoryName] = useState("");
  const [productname, setProductName] = useState("");
  const [price, setPrice] = useState("");
  const [qty, setQty] = useState("");
  const [image, setImage] = useState("");
  const [description, setDescription] = useState("");
  const [marketstatus, setMarketStatus] = useState("");
  const [status, setStatus] = useState("");

  const handleSubmit = () => {
    axios.post(` http://localhost:8000/products`, {
      categeoryname: categeoryname,
      productname: productname,
      price: price,
      qty: qty,
      image: image,
      description: description,
      marketstatus: marketstatus,
      status: status
    }).then((res) => {
      alert("Your Product Succesfully Add");
      setCategeoryName("");
      setProductName("");
      setPrice("");
      setDescription("");
      setImage("");
      setQty("");
      setMarketStatus("");
      setStatus("");
    }).catch((err) => {
      console.log(err);
      return false;
    })
  }
  useEffect(() => {
    axios.get(`  http://localhost:8000/category`)
      .then((res) => {
        setCategeory(res.data);
      }).catch((err) => {
        console.log(err);
        return false;
      })
  }, [])
  return (
    <>
    <div>
      <main id="main" className="main">
      <div className="row">
        <div className="ps-5 col-lg-9 pt-2">
          <div style={{ boxShadow: '3px 3px 5px 6px #ccc' }} className="mt-3 p-5">
            <h3 className="text-center">Add Product</h3>
            <form>
              <div className="row">
                <div className="col-lg-5">
                  <div className="mb-3">
                    <label htmlFor="exampleInputPassword1" className="form-label">Category</label>
                    <select name="category" onChange={(e) => setCategeoryName(e.target.value)} className="form-control">
                      <option value="">---Select Category---</option>
                      {
                        categeory.map((item) => {
                          return (
                            <option value={item.category_name}>{item.category_name}</option>
                          )
                        })
                      }
                    </select>
                  </div>
                  <div className="mb-3">
                    <label htmlFor="exampleInputEmail1" className="form-label">Product Name</label>
                    <input type="text" name="name" onChange={(e) => setProductName(e.target.value)} className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />

                  </div>
                  <div className="mb-3">
                    <label htmlFor="exampleInputPassword1" className="form-label">Product Price</label>
                    <input type="number" name="price" onChange={(e) => setPrice(e.target.value)} className="form-control" id="exampleInputPassword1" />
                  </div>
                  <div className="mb-3">
                    <label htmlFor="exampleInputPassword1" className="form-label">Product Qty</label>
                    <input type="number" name="qty" onChange={(e) => setQty(e.target.value)} className="form-control" id="exampleInputPassword1" />
                  </div>
                </div>
                <div className="col-lg-5">
                  <div className="mb-3">
                    <label htmlFor="exampleInputEmail1" className="form-label">Product Image Url</label>
                    <input type="text" name="image" onChange={(e) => setImage(e.target.value)} className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />

                  </div>
                  <div className="mb-3">
                    <label htmlFor="exampleInputEmail1" className="form-label">Product Description</label>
                    <input type="text" name="description" onChange={(e) => setDescription(e.target.value)} className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />

                  </div>
                  <div className="mb-3">
                    <label htmlFor="exampleInputPassword1" className="form-label">Product Market Status</label>
                    <select name="marketstatus" onChange={(e) => setMarketStatus(e.target.value)} className="form-control">
                      <option value="">---Select Market Status---</option>
                      <option value="trending">Trending</option>
                      <option value="latest">Latest</option>
                      <option value="upcomming">Upcomming</option>
                      <option value="best">Best</option>
                    </select>
                  </div>
                  <div className="mb-3">
                    <label htmlFor="exampleInputPassword1" className="form-label">Status</label>
                    <select name="status" onChange={(e) => setStatus(e.target.value)} className="form-control">
                      <option value="">---Select Status---</option>
                      <option value="instock">Instock</option>
                      <option value="outstock">Outstock</option>
                    </select>
                  </div>
                </div>
              </div>
              <button type="button" onClick={() => handleSubmit()} className="btn btn-primary">Submit</button>
            </form>

          </div>

          <button className="btn btn-primary mt-5">
            <NavLink to={`/admin/adminviewproduct`} className="text-white">View Product</NavLink>
          </button>
        </div>

      </div>
      </main>
    </div>
      
      {/* <div className="container">
        <div className="title">
          <h2>Bot Order Form</h2>
        </div>
        <div className="d-flex">
          <form action method>
            <label>
              <span>Categeory</span>
              <select name="categeory" onClick={(e) => setCategeoryName(e.target.value)}>
                <option value="">Select a categeory...</option>
                {
                  categeory.map((item) => {
                    return (
                      <option value={item.category_name}>{item.category_name}</option>
                    )
                  })
                }
              </select>
            </label>
            <label>
              <span className="fname" >Product Name</span>
              <input type="text" name="pname" onClick={(e)=>setProductName(e.target.value)} />
            </label>
            <label>
              <span className="fname" >Product Price</span>
              <input type="number" name="price" onClick={(e)=>setPrice(e.target.value)} />
            </label>
            <label>
              <span className="lname">Product Quantity</span>
              <input type="number" name="qty" onClick={(e)=>setQty(e.target.value)} />
            </label>
            <label>
              <span className="lname" >Product Image Url</span>
              <input type="text" name="img" onClick={(e)=>setImage(e.target.value)} />
            </label>
            <label>
              <span className="lname">Product Description</span>
              <input type="text" name="description" onClick={(e)=>setDescription(e.target.value)}/>
            </label>
            <label>
              <span>Product Market Status</span>
              <select name="selection"  onClick={(e)=>setMarketStatus(e.target.value)}>
                <option value="select">Select a Market Status...</option>
                <option value="trending">Trending</option>
                <option value="lasted">Lasted</option>
                <option value="best">Best</option>
                <option value="upcoming">Upcoming</option>
              </select>
            </label>
            <label>
              <span>Status</span>
              <select name="selection"  onClick={(e)=>setStatus(e.target.value)}>
                <option value="select">Select a Status...</option>
                <option value="instock">Instock</option>
                <option value="outstock">Outstock</option>
              </select>
            </label>
            
            <button type="button" onClick={ () => handleSubmit() } className="btn  btn-primary w-25">Submit</button>
          </form>
        </div>
      </div> */}
      {/* <button className="btn btn-primary mt-5">
                    <NavLink to={`/admin/viewproduct`} className="text-white">View Product</NavLink>
                 </button> */}
    </>
  )
}
export default AdminProduct;