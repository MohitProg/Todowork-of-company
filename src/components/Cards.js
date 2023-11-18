import React from 'react'
import Carditem from './Carditem'

import Context from '../contest/Context'
import { useContext } from 'react'
import { useEffect } from 'react'
import { useRef } from 'react'
import { useState } from 'react'

const Cards = () => {
  const context = useContext(Context);
  const { GetNotes, Notes,UpdateNotes } = context;
  const ref = useRef(null)
  const closeref=useRef(null)
  const [update, setupdate] = useState({id:"",newtitle:"",newdescription:""});


  useEffect(() => {
    GetNotes();
  }, []);

  
  const onChange=(e)=>{
    setupdate({...update,[e.target.name]:e.target.value})
  }

  const handleclick=()=>{
    // console.log(update)
    UpdateNotes(update.id,update.newtitle,update.newdescription)
    closeref.current.click()
  }

  const updatenote = (note) => {

   setupdate({id:note._id,newtitle:note.title,newdescription:note.description})
    ref.current.click()
  }
  return (


    <>
      {/* modals  */}
      {/* <!-- Button trigger modal --> */}
      <button type="button" ref={ref} style={{ display: "none" }} className="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal">
        Launch demo modal
      </button>

      {/* <!-- Modal --> */}
      <div className="modal fade" id="exampleModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h1 className="modal-title fs-5" id="exampleModalLabel">Update Notes</h1>
              <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div className="modal-body">
              <div className="mb-3">
                <label htmlFor="exampleInputEmail1" className="form-label ">
                  Title
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="title"
                  name="newtitle"
                  aria-describedby="emailHelp"
                  required
                onChange={onChange}
                value={update.newtitle}
                />

                <div className="mb-3">
                  <label htmlFor="exampleInputEmail1" className="form-label ">
                    Description
                  </label>
                  <textarea
                    type="text"
                    className="form-control"
                    id="title"
                    name="newdescription"
                    aria-describedby="emailHelp"
                    required
                  onChange={onChange}
                  value={update.newdescription}
                  />
                </div>
              </div>
            </div>
            <div className="modal-footer">
              <button type="button" className="btn btn-secondary" ref={closeref} data-bs-dismiss="modal">Close</button>
              <button type="button" className="btn btn-warning" onClick={handleclick}>Save changes</button>
            </div>
          </div>
        </div>
      </div>

      <div className='container-fluid'>

        <div className='row mt-3 p-2 justify-content-center '>
          <h1 className='text-center'>Your Notes</h1>
          {
            Notes&&Notes.map((note) => {

              
              return (

                <Carditem key={note._id} note={note} id={note._id} updatenote={updatenote} />
              )

            })
          }



        </div>


      </div>




    </>

  )
}

export default Cards