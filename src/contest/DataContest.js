import React from "react";
import Context from "./Context";
import { toast } from "react-toastify";
import { useState } from "react";
import axios from "axios";

const DataContest = ({ children }) => {
  // set token
  const [token, settoken] = useState(null);
  // set notes data
  const [Notes, setNotes] = useState([]);
 


  // set default headers
  const Toekn = localStorage.getItem("auth-token");

  axios.defaults.headers.common["auth-token"] = Toekn;

  // tost Alert
  const ToastAlert = (msg, type) => {
    toast(msg, {
      type: type,
      position: "top-center",
    });
  };

  //  get Notes

  const GetNotes = async () => {
    const res = await axios.get("http://localhost:80/notes/api/getallnotes");

    if (res.data.success) {
      setNotes(res.data.getnotes);
    }

    
  };

  //   add Notes

  const AddNotes = async (title, description) => {
    const res = await axios.post("http://localhost:80/notes/api/addnotes", {
      title,
      description,
    });


    if (res.data.success) {
      ToastAlert(res.data.msg, "success");
      setNotes(res.data.getnotes);
    } else {
      ToastAlert(res.data.msg, "error");
    }

    const note = {
      
      title: title,
      description: description,
    };
    setNotes(Notes.concat(note));
  };

  // delete notes ;
  const DeleteNotes = async (id) => {
    const res = await axios.delete(
      `http://localhost:80/notes/api/deletenotes/${id}`
    );


    if (res.data.success) {
      ToastAlert(res.data.msg, "success");
      setNotes(res.data.getnotes);
    } else {
      ToastAlert(res.data.msg, "error");
    }

    const newnotes = Notes.filter((note) => {
      return note._id !== id;
    });

    setNotes(newnotes);
  };

  // update notes ;
  const UpdateNotes = async (id, title, description) => {


    const res = await axios.put(
      `http://localhost:80/notes/api/updatenotes/${id}`,
      {
        title,
        description,
      }
    );

    if (res.data.success) {
      ToastAlert(res.data.msg, "success");
    } else {
      ToastAlert(res.data.msg, "error");
    }
const newnotes=JSON.parse(JSON.stringify(Notes))
    for (let i = 0; i < newnotes.length; i++) {
      if (newnotes[i]._id === id) {
        newnotes[i].title = title;
        newnotes[i].description = description;
      }
      break;
    }


    setNotes(newnotes);
  };

  return (
    <>
      <Context.Provider
        value={{
          ToastAlert,
          settoken,
          GetNotes,
          Notes,
          AddNotes,
          DeleteNotes,
          UpdateNotes,
        }}
      >
        {children}
      </Context.Provider>
    </>
  );
};

export default DataContest;
