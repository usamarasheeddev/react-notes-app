import React, { useState } from 'react'
import { ReactPropTypes } from 'react'

// let html=` <div className="card mt-4 " id="card" id=${this.id} >
// <div className="card-body">
//   <h5 className="card-title">Special title treatment</h5>
//   <p className="card-text">With supporting text below as a natural lead-in to additional content.</p>
//   <div className="container d-flex justify-content-start " >
//   <a href="#" className="btn btn-primary">Edit</a>
//   <a href="#" className="btn btn-primary ms-3">Delete</a>
//     </div>
// </div>
// </div>
// `
let text,id;
  let newObj
// const handleSave =()=>{

  
//   newObj=JSON.parse(localStorage.getItem("notes"))
//   console.log(newObj)
//   newObj.forEach(element => {
//     text=element.text;
//     id=element.id;
//     console.log(id)
//     console.log(text)
//   });
// }
    // const [obj, setObj] = useState('')

export default function PreviewNotes(Props) {
  const [pNotes,setNotes]=useState('No note entered yet!')

  return (
    <>

      <h2 className='text-center' >Preview Notes</h2>

      <div className="container d-flex justify-content-around flex-wrap" id='PreviewNotes'>
        {Props.notes}

      {/* <div className="card mt-4 " id="card" >
        <div className="card-body">
          <h5 className="card-title">Note</h5>
          <p className="card-text">{obj.text}</p>
          <div className="container d-flex justify-content-start " >
          <a href="#" className="btn btn-primary">Edit</a>
          <a href="#" className="btn btn-primary ms-3">Delete</a>
            </div>
        </div>
      </div> */}


        </div>
    </>
  )
}
