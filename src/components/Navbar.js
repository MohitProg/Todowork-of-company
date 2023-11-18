
import React from 'react'
import { Link } from 'react-router-dom'
import { useLocation } from 'react-router-dom'
import { useNavigate } from "react-router-dom";

const Navbar = () => {
  let location = useLocation();
  const Navigate=useNavigate();
  const handleClick=()=>{
    localStorage.removeItem("auth-token");
    Navigate("/login")
   }

  return (
    <>
      <nav className="navbar navbar-expand-lg bg-light shadow ">
        <div className="container-fluid">
          <Link className="navbar-brand" >
            <i className="bi bi-snapchat text-danger fs-2 mx-2"></i>
            Note-Book
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse " id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0 mx-auto">
              <li className="nav-item">
                <Link className={`nav-link ${location.pathname === "/" ? "active" : ""}`} aria-current="page" to="/">
                  Home
                </Link>
              </li>
              <li className="nav-item">
                <Link className={`nav-link ${location.pathname === "/addnote" ? "active" : ""}`} aria-current="page" to="/addnote">
                  AddNote
                </Link>
              </li>
              {!localStorage.getItem("auth-token") ? 
             
               

                <>
                  <li className="nav-item">
                    <Link className={`nav-link ${location.pathname === "/login" ? "active" : ""}`} aria-current="page" to="/login">
                      Login
                    </Link>
                  </li>
                 
                </>:<button onClick={handleClick} className="btn">Logout</button>
              }

             
            </ul>
           
          </div>
        </div>


      </nav>

    </>
  )
}

export default Navbar