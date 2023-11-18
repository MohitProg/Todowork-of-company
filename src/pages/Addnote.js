import React, { useState } from "react";
import Context from "../contest/Context";
import { useContext } from "react";
import { useNavigate } from "react-router-dom";


const Addnote = () => {

  const context=useContext(Context);
  const Navigate=useNavigate()
  const {AddNotes}=context;

  const [newNote,setnewNote]=useState({title:"",description:""});
  const onChange=(e)=>{
    setnewNote({...newNote,[e.target.name]:e.target.value})

  }

  const handleClick=(e)=>{
    e.preventDefault();

    AddNotes(newNote.title,newNote.description)
    Navigate("/")
    setnewNote({title:"",description:""})

  }
  return (
    <div className="container-fluid">
      <div className="row align-item-center justify-content-center p-3">
        <div className="col-lg-5 p-3 mt-4 border rounded shadow">
          <h1 className="text-center ">Add Note</h1>
          <div className="mb-3">
            <label htmlFor="exampleInputEmail1" className="form-label ">
              Title
            </label>
            <input
              type="text"
              className="form-control"
              id="title"
              name="title"
              aria-describedby="emailHelp"
              required
              onChange={onChange}
              value={newNote.title}
            />
          </div>

          <div className="mb-3">
            <label htmlFor="exampleInputEmail1" className="form-label ">
              Description
            </label>
            <textarea
              type="text"
              className="form-control"
              id="title"
              name="description"
              aria-describedby="emailHelp"
              required
              onChange={onChange}
              value={newNote.description}
            />
          </div>


          <div className="mt-3 text-center">
            <span><i className="bi bi-plus-circle text-warning" onClick={handleClick} style={{fontSize:"60px",cursor:"pointer"}}></i></span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Addnote;
