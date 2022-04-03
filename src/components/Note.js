import React from 'react'

export default function Note({ text, id, noteBg, handleOnDelete, editNote,setEdit ,setNoteId}) {
  const handleDelete = () => {
    handleOnDelete(id)
  }

  const handleEdit = () => {
    editNote(id)
    setEdit(true)
    setNoteId(id)
    
  }
  return (
  
  <div className="card mt-4 " id='note' style={{backgroundColor:noteBg}}>
      <div className="card-body">
        <h5 className="card-title">Note</h5>
        <p id='textPara' className="card-text">{text}</p>
        <div className="container d-flex justify-content-end" id='btn' >
          <small className='mt-2' d> </small>
          <a href="#" className="btn btn-outline-dark" onClick={handleEdit} ><i className="fa-solid fa-pen"></i></a>
          <a href="#" className="btn btn-outline-dark ms-3" onClick={handleDelete}><i className="fa-solid fa-trash-can"></i></a>
        </div>
      </div>
    </div>
  )
}
