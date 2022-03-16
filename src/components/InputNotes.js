import React from 'react'
import { useState } from 'react'
let arr=[]
let id;
let newArr
export default function InputNotes() {
    
    const [text, setText] = useState('')
    let obj={
        id:id,
        notes:text
    }
    
    const handleSave = (event) => {
        event.preventDefault()
        id=Math.random()*4
        arr.push(obj={id,text})
        newArr= JSON.stringify([...arr])
        localStorage.setItem("notes",newArr)
        arr.forEach(element => {
        });
        setText('')

    }

    const handleOnChange = (event) => {
        setText(event.target.value)
   
    }
    //GET VALUE FORM LOCALSTORAGE MODULE..........................................
    // let newObj=JSON.parse(localStorage.getItem("notes"))
    // console.log(newObj)
    // newObj.forEach(element => {
    //     if(element.id=='0.06112483342732844')
    //     console.log(element)
    // });
    
    const handleEdit=()=>{
    }

    return (
        <>
            <form action="">

                <div className="input-group">

                    <textarea className="form-control mt-3" value={text} onChange={handleOnChange} aria-label="With textarea" rows={8}></textarea>

                </div>

                <div className='d-flex justify-content-center'>
                    <button type="submit" className="btn btn-outline-primary m-3 " onClick={handleSave}>Save</button>
                    <button type="button" className="btn btn-outline-success m-3" onClick={handleEdit}>Edit</button>
                    <button type="button" className="btn btn-outline-danger m-3 ">Delete</button>
                </div>
            </form>
        </>
    )
}
