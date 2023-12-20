import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';


const User = () => {
  const [users, setUsers] = useState([]);
  useEffect(() => {
    axios.get(`http://localhost:8000/users`)
      .then((res) => {
        setUsers(res.data)
      }).catch((err) => {
        console.log(err);
        return false;
      })
  }, [])
  return (
    <>

  <main id='main' className='main'>
  <div className=" col-lg-12 ">
        <div style={{ boxShadow: '3px 3px 5px 6px #ccc' }} className="mt-3 p-5">
          <h3 className="text-center">View Users</h3>
          <table className="table table-hover">
            <thead>
              <tr>
                <th className='h2' scope="col">Id</th>
                <th className='h2' scope="col">Name</th>
                {/* <th scope="col">Email</th> */}
                <th className='h2' scope="col">Password</th>
                <th className='h2' scope="col">Action</th>
              </tr>
            </thead>
            <tbody>
              {
                users.map((val) => {
                  return (
                    <tr>
                      <td className='h3'>{val.id}</td>
                      <td className='h3'>{val.username}</td>
                      {/* <td>{val.email}</td> */}
                      <td className='h3'>{val.password}</td>
                      <td>
                        <Link to={`/admin/userdetail/${val.id}`}>
                          <button className='btn btn-primary btn-sm p-2' >View</button>
                        </Link>
                      </td>
                    </tr>
                  )
                })
              }
            </tbody>
          </table>
        </div>
      </div>
  </main>

      
    </>
  )
}

export default User;