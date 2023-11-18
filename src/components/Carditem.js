import React, { useContext } from "react";
import Context from "../contest/Context";

const Carditem = ({ note, id,updatenote}) => {
  const context=useContext(Context);
  const {DeleteNotes}=context;
  const deleteitem=()=>{
    // console.log("delete item",id);
    DeleteNotes(id)
  }




  return (
    <>
      <div  className="col-lg-3 col-md-5 col-sm-8 mx-3 p-0 border rouded shadow mt-4">
        <div className="card  ">
          <div className="card-body">
            <h5 className="card-title ">{note.title}</h5>
            <p className="card-text ">{note.description}</p>
          </div>
          <div className="mt-2 d-flex justify-content-between p-2">
            <span>
              <i className=" fs-3 bi bi-pencil-square" onClick={()=>updatenote(note)} style={{cursor:"pointer"}}></i>
            </span>
            <span>
              <i className=" fs-3 bi bi-trash" style={{cursor:"pointer"}} onClick={deleteitem}></i>
            </span>
          </div>
        </div>
      </div>
    </>
  );
};

export default Carditem;
