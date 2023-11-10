import React from "react";
import { useState,useEffect } from "react";

const UserProfile=()=>{
    const [profile, setProfile] = useState([]);
    useEffect(() => {
        setProfile(JSON.parse(localStorage.getItem('checkUserLogin')))
        
      }, [])
    return(
        <>
        <div className="container">
  <div className="panel panel-info">
    <div className="panel-heading">
      <h3 className="panel-title">User Profile</h3>
    </div>
    {/* Panel-Body */}   
    <div className="panel-body">
      <div className="row">
        <div className="col-xs-12 col-md-3 col-lg-3" align="center">
          <img src="https://s-media-cache-ak0.pinimg.com/564x/d6/09/d6/d609d64961cb515a2e8e6ada8e8bc762.jpg" width={150} className="img-responsive img-rounded" alt="User image" />
        </div>{/* /.col-xs-12 */}
        {/* User Information */}
        <div className="col-xs-12 col-md-5 col-lg-5">  
          <h3>{profile.name}</h3>
          <h4>Queen of Arendelle</h4>
          <div className="table-responsive">
            <table className="table table-responsive table-user-information">
              <tbody>
                <tr>
                  <td>
                    <strong>
                      <span className="glyphicon glyphicon-home" />
                    </strong>
                  </td>
                  <td className="text-primary">
                    Arendelle, Norway
                  </td>
                </tr>{/*/home */}
                <tr>
                  <td>
                    <strong>
                      <span className="glyphicon glyphicon-envelope" />
                    </strong>
                  </td>
                  <td className="text-primary">
                    ElsaArendelle@gmail.com
                  </td>
                </tr>{/*/email */}
              </tbody>
            </table>
          </div> {/* /.table-responsive */}
          {/* Social Buttons */}
          <div className="button-group">
            <button className="btn">
              <a href="#" className="social-icon si-border si-github si-border-round">
                <i className="fa fa-github" /></a></button>
            <button className="btn"><a href="#" className="social-icon si-border si-g-plus si-border-round">
                <i className="fa fa-google-plus" />             
              </a></button>
            <button className="btn"><a href="#" className="social-icon si-border si-linkedin si-border-round">
                <i className="fa fa-linkedin" />             
              </a></button>
            <button className="btn"><a href="#" className="social-icon si-border si-facebook si-border-round">
                <i className="fa fa-facebook" />             
              </a></button>
          </div>{/* /.button-group */}
        </div>{/* /.col-xs-12 */}
      </div>{/* /.row */}
    </div>{/* /.panel-body */}
    {/* Panel-Footer */}
    <div className="panel-footer">
      <h5 className="pull-left">© Practice makes perfect</h5>
      <div className="pull-right">
        <a href="#" data-original-title="Follow" data-toggle="tooltip" type="button" className="btn btn-sm btn-success"><i className="glyphicon glyphicon-heart" /></a>
        <a data-original-title="Message" data-toggle="tooltip" type="button" className="btn btn-sm btn-danger"><i className="glyphicon glyphicon-pencil" /></a>
      </div>
    </div>
  </div>{/* /.panel panel-info */}
</div>{/* /.container */}

        </>
    )
}
export default UserProfile;