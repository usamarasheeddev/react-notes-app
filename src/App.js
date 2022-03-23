import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import NoteList from './components/NoteList';
import { useState } from 'react';
import TextArea from './components/TextArea';
import { nanoid } from 'nanoid'
import { toBeEnabled } from '@testing-library/jest-dom/dist/matchers';


function App() {
  const [notes, setNotes] = useState([])

  //ADD A NOTE
  const addNote = (text) => {
    const newNote = {
      text: text,
      id: nanoid()

    }
    const newArr = [...notes, newNote]
    setNotes(newArr)

  }
  //HANDLE NOTE DELETE
  const deleteNote = (id) => {
    const newArr = notes.filter((note) => note.id !== id)
    setNotes(newArr)
  }

  //EDIT A NOTE
  const editNote = (id) => {
    const find = notes.find((note) => note.id == id)
    let val = document.getElementById('textArea').value
    document.getElementById('textArea').value = find.text
    // const index = notes.findIndex(x => x.id === id);


  }
  // const updateNote = (id) => {
  //   const findNote = notes.find((note) => note.id == id)

  //   let val = document.getElementById('textArea').value
  //   document.getElementById('textArea').value = findNote.text

  //   const index = notes.findIndex(x => x.id === id);

  //   const newArr = [...notes, notes[index] = { text: val, id: id }]
  //   setNotes(newArr)
  // }

  return (
    <>


      <Navbar title="React Note App" />
      <div className="container">
        <TextArea handleNoteSave={addNote} findText={editNote} /*updateNote={updateNote}*/ />
      </div>
      <div className="container">

        <NoteList notes={notes} handleDeleteNote={deleteNote} editNote={editNote} />
      </div>

    </>
  );
}

export default App;






  // const array = JSON.parse(localStorage.getItem("notes"))
  // const showArray = () => {

  //   array.forEach(element => {
  //     console.log(element)

  //   });
  // }