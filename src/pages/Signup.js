import React from "react";
import { useState } from "react";
import axios  from "axios"
import { useContext } from "react";
import Context from "../contest/Context";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";

const Signup = () => {
  const context=useContext(Context);
  const Navigate=useNavigate();
  const {ToastAlert,settoken}=context;

  const [signup, setsignup] = useState({name:"",email:"",password:""});





  const handleChange=(e)=>{
    setsignup({...signup,[e.target.name]:e.target.value})
  }

  const handleClick=async(e)=>{
    e.preventDefault();
    // calling api data for signup 

    const res= await axios.post("http://localhost:80/user/api/signup",{name:signup.name,email:signup.email,password:signup.password});
  
 
    if(res.data.success){
      settoken(res.data.authtoken);

      localStorage.setItem("auth-token",res.data.authtoken);
      ToastAlert(res.data.msg,"success")
      
      Navigate("/")
    }else{
      ToastAlert(res.data.msg,"error")
    }

    setsignup({name:"",email:"",password:""})

  }
  return (
    <div className="container-fluid">
      <div
        className="row  mt-3 p-4"
        style={{ height: "80vh", display: "flex", alignItems: "center",justifyContent:"center" }}
      >
        <div
          className="col-lg-3 col-md-6 col-sm-7 border  p-3 shadow rounded"
          style={{ height: "60vh" }}
        >
          <h2 className="text-center">Signup </h2>
          <form onSubmit={handleClick}>
            <div className="mb-3">
              <label htmlFor="exampleInputEmail1" className="form-label ">
                name
              </label>
              <input
                type="text"
                className="form-control form-control-lg"
                id="name"
                aria-describedby="emailHelp"
                name="name"
                onChange={handleChange}
                required
                value={signup.name}
              />
            </div>
            <div className="mb-3">
              <label htmlFor="exampleInputEmail1" className="form-label ">
                email
              </label>
              <input
                type="text"
                className="form-control form-control-lg"
                id="email"
                name="email"
                aria-describedby="emailHelp"
                required
                onChange={handleChange}
                value={signup.email}
              />
            </div>
            <div className="mb-3">
              <label htmlFor="exampleInputPassword1" className="form-label ">
                Password
              </label>
              <input
                type="password"
                className="form-control form-control-lg"
                id="password"
                name="password"
                required
                onChange={handleChange}
                value={signup.password}
              />
            </div>
            <div>
                <Link to="/login" style={{textDecoration:"none"}}>login account</Link>

              </div>
            <div>

            <button type="submit" className="btn mt-4  mx-auto btn-warning">
              Submit
            </button>

            </div>

          </form>
        </div>
      </div>
    </div>
  );
};

export default Signup;
