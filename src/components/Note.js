import React from 'react'

export default function Note({text,id,handleOnDelete,editNote}) {
  const handleDelete=()=>{
    handleOnDelete(id)
  }

  const handleEdit=()=>{
    editNote(id)
  }
    return (
        // <div className="contaner">
        //     <div>Note</div>
        //     this is a note1

        // </div>
        <div className="card mt-4 " >
            <div className="card-body">
              <h5 className="card-title">Note</h5>
              <p className="card-text">{ text}</p>
              <div className="container d-flex justify-content-start " >
              <a href="#" className="btn btn-primary" onClick={handleEdit} >Edit</a>
              <a href="#" className="btn btn-primary ms-3"onClick={handleDelete}>Delete</a>
                </div>
            </div>
          </div> 
    )
}
