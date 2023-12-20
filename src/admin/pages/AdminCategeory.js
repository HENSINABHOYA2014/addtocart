import { useEffect, useState } from "react";
import axios from "axios";

const AdminCategeory = () => {
  const [categeory, setCategeory] = useState("");
  const [record, setRecord] = useState([]);
  const [editid, setEditId] = useState("");

  const handleSubmit = () => {
    axios.post(`http://localhost:8000/category`, {
      category_name: categeory
    }).then((res) => {
      setCategeory("");
      getRecord();
    }).catch((err) => {
      console.log(err);
      return false;
    })
  }

  const getRecord = () => {
    axios.get(` http://localhost:8000/category`)
      .then((res) => {
        setRecord(res.data)
      }).catch((err) => {
        console.log(err);
        return false;
      })
  }

  const deleteData = (id) => {
    axios.delete(` http://localhost:8000/category/${id}`)
      .then((res) => {
        setCategeory("");
        getRecord();
      }).catch((err) => {
        console.log(err);
        return false;
      })
  }

  const editdata = (id) => {
    axios.get(` http://localhost:8000/category/${id}`)
      .then((res) => {
        setCategeory(res.data.category_name);
        setEditId(id)
        getRecord();
      }).catch((err) => {
        console.log(err);
        return false;
      })
  }

  const handleUpdate = () => {
    axios.put(` http://localhost:8000/category/${editid}`, {
      category_name: categeory
    }).then((res) => {
      setCategeory("");
      getRecord();
    }).catch((err) => {
      console.log(err);
      return false;
    })
  }

  useEffect(() => {
    getRecord();
  }, [])

  return (
    <>
      <main id="main" className="main">
        <center>
          <h1>Admin Categeory Page</h1>
          <br />
          <table>
            <tr>
              <td>Categeory:-</td>
              <td><input type='text'  name='categeory' className="col-12 h3" value={categeory} onChange={(e) => setCategeory(e.target.value)} /></td>
            </tr>
            <tr>
              <td></td>
              <td>
                {
                  editid ? (<input type='button' class="btn btn-primary" value={"Edit"} onClick={() => handleUpdate()} />) : <input type='button' value={"Submit"} class="btn btn-primary p-3 mt-3" onClick={() => handleSubmit()} />
                }
              </td>
            </tr>
          </table>
          <br />
          <div className="container">
            <div className="ps-5 col-lg-12 pt-2 text-center">
              <div style={{ boxShadow: '3px 3px 5px 6px #ccc' }} className="mt-3 p-5">
                <h1 className="text-center">Users Details</h1>
                <hr />
                <div className='container'>
                  <table class="table table-striped">
                    <thead>
                      <tr className="h1">
                        <th scope="col">Id</th>
                        <th scope="col">Categeory</th>
                        <th scope="col">Action</th>
                      </tr>
                      {
                        record.map((val) => {
                          const { id, category_name } = val;
                          return (
                            <tr>
                              <td className="h3">{id}</td>
                              <td className="h3">{category_name}</td>
                              <td className="h3">
                                <button type="button" class="btn btn-primary p-3" onClick={() => deleteData(id)}>Delete</button>&nbsp;
                                <button type="button" class="btn btn-danger p-3" onClick={() => editdata(id)}>Edit</button>
                              </td>
                            </tr>
                          )
                        })
                      }
                    </thead>
                  </table>
                 

                </div>


              </div>



              {/* <ToastContainer /> */}
            </div>

          </div>
        </center>
      </main>
    </>
  )
}
export default AdminCategeory;