import React, { useState } from 'react'


export default function TextArea({ noteText, setnoteText, handleNoteSave, edit, setEdit, updateNote }) {
    const remainingCh = 200

    const handleOnChange = (event) => {
        if (remainingCh - event.target.value.length >= 0) {
            setnoteText(event.target.value)
        }
        else{
            handleSave()
        }
    }


    //HANDLE SAVE 
    const handleSave = () => {
        if (noteText.trim().length > 0) {

            handleNoteSave(noteText)
            setnoteText('')
            document.getElementById('textArea').value = ''
        }

    }

    // HNADLE UPDATE
    const cancelEdit = () => {
        setnoteText('')
        document.getElementById('textArea').value = ''
        setEdit(false)


    }
    return (
        <>
            <form onSubmit={edit ? updateNote  : handleSave }>
                <div className="mb-3">
                    {/* <label htmlFor="exampleFormControlTextarea1" className="form-label">Add Note Here</label> */}
                    <textarea className="form-control mt-5" placeholder='Type here....' id="textArea" onChange={handleOnChange} rows="5"></textarea>
                </div>
                <div className="container d-flex justify-content-between flex-wrap">

                    <small id='remaining'><h6>{remainingCh - noteText.length} Remaining</h6></small>

                    <div className="container d-flex justify-content-end">
                        <button type="submit" className="btn btn-outline-info me-3">{edit ? "Update Note" : "Add Note"}</button>
                        <button type="submit" className="btn btn-outline-info me-3" onClick={cancelEdit} >Cancel</button>

                    </div>

                </div>
            </form>
        </>
    )
}