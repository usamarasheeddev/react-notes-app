import React from 'react'
import Note from './Note'
export default function NoteList({ notes ,handleDeleteNote ,editNote }) {
    return (
        <>
        
        <div className='container d-flex justify-content-around flex-wrap' >

          
          {

                notes.map((note) => 
                    <Note   text={note.text} id={note.id} noteBg={note.color} handleOnDelete={handleDeleteNote} editNote={editNote}  />
                    // { console.log(note.about) }
                
       
            

            )}

        </div>
        </>
    )
}
