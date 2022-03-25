import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import NoteList from './components/NoteList';
import { useState } from 'react';
import TextArea from './components/TextArea';
import { nanoid } from 'nanoid'
import { toBeEnabled } from '@testing-library/jest-dom/dist/matchers';

function App() {


  const handleLocalStorage = () => {
    let notes = JSON.parse(localStorage.getItem("notes"))
    if (notes) {
      return JSON.parse(localStorage.getItem("notes"))
    }
    else
      return []

  }

  const [notes, setNotes] = useState(handleLocalStorage)




  //ADD A NOTE
  const addNote = (text) => {
    let newArr = JSON.parse(localStorage.getItem("notes"))
    const newNote = {
      text: text,
      id: nanoid()

    }
    newArr = [...notes, newNote]
    localStorage.setItem('notes', JSON.stringify(newArr))
    setNotes(newArr)


  }
  //HANDLE NOTE DELETE
  const deleteNote = (id) => {
    const newArr = notes.filter((note) => note.id !== id)
    // setNotes(newArr)
    localStorage.setItem('notes', JSON.stringify(newArr))
    const localValue = JSON.parse(localStorage.getItem('notes'))
    setNotes(localValue)
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

  //SETTING NOTE COLOR
  const setNoteBg = () => {
    const colors = ["rgb(197, 243, 255)", "rgb(141, 228, 231)", "rgb(255, 237, 197)", "rgb(229, 197, 255)"];

    const random = Math.floor(Math.random() * colors.length);
    return random, colors[random]
  }

  return (
    <>


      <Navbar title="React Note App" />
      <div className="container">
        <TextArea handleNoteSave={addNote} findText={editNote} /*updateNote={updateNote}*/ />
      </div>
      <div className="container">

        <NoteList notes={notes} handleDeleteNote={deleteNote} editNote={editNote} noteBg={setNoteBg} />
      </div>

    </>
  );
}

export default App;

