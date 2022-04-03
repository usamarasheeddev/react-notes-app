import React from 'react'
import Note from './Note'
export default function NoteList({ notes, handleDeleteNote, editNote, setEdit,setNoteId }) {

    return (
        <>

            <div className='container d-flex justify-content-around flex-wrap' >


                {

                    notes.map((note,i) =>
                        <Note key={i} text={note.text}
                            id={note.id}
                            noteBg={note.color}
                            handleOnDelete={handleDeleteNote}
                            editNote={editNote}
                            setEdit={setEdit} 
                            setNoteId={setNoteId}
                            />
                        // { console.log(note.about) }




                    )}

            </div>
        </>
    )
}
