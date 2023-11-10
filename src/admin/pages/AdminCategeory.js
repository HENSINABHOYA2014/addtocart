import { useEffect, useState } from "react";
import axios from "axios";

const AdminCategeory = () => {
    const[categeory,setCategeory]=useState("");
    const[record,setRecord]=useState([]);
    const[editid,setEditId]=useState("");

    const handleSubmit=()=>{
        axios.post(` http://localhost:8000/categeory`,{
          categeory:categeory
        }).then((res)=>{
            setCategeory("");
            getRecord();
        }).catch((err)=>{
            console.log(err);
            return false;
        })
    }

    const getRecord=()=>{
        axios.get(` http://localhost:8000/categeory`)
        .then((res)=>{
            setRecord(res.data)
        }).catch((err)=>{
            console.log(err);
            return false;
        })
    }

    const deleteData=(id)=>{
        axios.delete(` http://localhost:8000/categeory/${id}`)
        .then((res)=>{
            setCategeory("");
            getRecord();
        }).catch((err)=>{
            console.log(err);
            return false;
        })
    }

    const editdata=(id)=>{
        axios.get(` http://localhost:8000/categeory/${id}`)
        .then((res)=>{
            setCategeory(res.data.categeory);
            setEditId(id)
            getRecord();
        }).catch((err)=>{
            console.log(err);
            return false;
        })
    }

    const handleUpdate=()=>{
        axios.put(` http://localhost:8000/categeory/${editid}`,{
          categeory:categeory
        }).then((res)=>{
            setCategeory("");
            getRecord();
        }).catch((err)=>{
            console.log(err);
            return false;
        })
    }

    useEffect(()=>{
        getRecord();
    },[])

    return (
        <>
    <center>
        <h1>Admin Categeory Page</h1>
      <br/>
    <table>
    <tr>
      <td>Categeory:-</td>
      <td><input type='text' name='categeory' value={categeory} onChange={(e)=>setCategeory(e.target.value)}/></td>
    </tr>
    <tr>
      <td></td>
      <td>
        {
          editid ? (<input type='button' value={"Edit"} onClick={()=>handleUpdate()}/>):<input type='button' value={"Submit"} onClick={()=>handleSubmit()}/>
        }      
        </td>
    </tr>
   </table>
   <br/>
   <table>
    <tr>
      <td>Id</td>
      <td>categeory</td>
      <td>Action</td>
    </tr>
    {
      record.map((val)=>{
        const{id,categeory}=val;
        return(
          <tr>
            <td>{id}</td>
            <td>{categeory}</td>    
            <td>
              <button onClick={()=>deleteData(id)}>Delete</button>&nbsp;
              <button onClick={()=>editdata(id)}>Edit</button>
            </td>
          </tr>
        )
      })
    }
   </table>
    </center>
   </>
    )
}
export default AdminCategeory;