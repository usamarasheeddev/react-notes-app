import React, { useState } from 'react'


export default function TextArea({ handleNoteSave, findText, updateNote }) {
    const [noteText, setnoteText] = useState('')

    const handleOnChange = (event) => {
        setnoteText(event.target.value)


    }
    //HANDLE SAVE 
    const handleSave = () => {
        if (noteText.trim().length > 0) {

            handleNoteSave(noteText)
            setnoteText('')
            document.getElementById('textArea').value = ''
        }

    }

    //HNADLE UPDATE
    // const handleUpdate = () => {
    //     updateNote(noteText)
    //     console.log(noteText)
    // }
    return (
        <>
            <form >
                <div className="mb-3">
                    {/* <label htmlFor="exampleFormControlTextarea1" className="form-label">Add Note Here</label> */}
                    <textarea className="form-control mt-5" placeholder='Type here....' id="textArea" onChange={handleOnChange} rows="5"></textarea>
                </div>
                <div className="container d-flex justify-content-end">
                    {/* <button type="button" onClick={handleUpdate} className="btn btn-outline-info me-5" id='updateBtn' >Update</button> */}
                    <button type="button" onClick={handleSave} className="btn btn-outline-info">Add Note</button>

                </div>
            </form>
        </>
    )
}