import React from "react";
import { useContext } from "react";
import Context from "../contest/Context";
import { useState } from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";


const Login = () => {
  const context = useContext(Context);
  const Navigate = useNavigate();

  const { ToastAlert, settoken } = context;


  const [login, setlogin] = useState({ email: "", password: "" });




  const handleChange = (e) => {
    setlogin({ ...login, [e.target.name]: e.target.value })
  }

  const handleClick = async (e) => {
    e.preventDefault();
    // calling api data for signup 

    const res = await axios.post("http://localhost:80/user/api/login", { email: login.email, password: login.password });


    if (res.data.success) {
      settoken(res.data.authtoken)
      localStorage.setItem("auth-token", res.data.authtoken);
      ToastAlert(res.data.msg, "success");


      Navigate("/")

    } else {
      ToastAlert(res.data.msg, "error")
    }

    setlogin({ email: "", password: "" })

  }
  return (
    <>
      <div className="container-fluid">
        <div
          className="row  mt-3 p-4"
          style={{
            height: "80vh",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <div className="col-lg-3 col-md-6 col-sm-7  border  p-3 rounded shadow">
            <h2 className="text-center">Login </h2>
            <form onSubmit={handleClick}>
              <div className="mb-3">
                <label htmlFor="exampleInputEmail1" className="form-label ">
                  email
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="email"
                  name="email"
                  aria-describedby="emailHelp"
                  required
                  onChange={handleChange}
                  value={login.email}
                />
              </div>
              <div className="mb-3 ">
                <label htmlFor="exampleInputPassword1" className="form-label ">
                  Password
                </label>
                <input
                  type="password"
                  className="form-control"
                  id="password"
                  required
                  name="password"
                  onChange={handleChange}
                  value={login.password}
                />
              </div>

              <div>

                <Link to="/signup" style={{textDecoration:"none"}}>create new account</Link>
              </div>


              <div>

                <button type="submit" className="btn mt-3 btn-warning ">
                  Submit
                </button>

              </div>

            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
