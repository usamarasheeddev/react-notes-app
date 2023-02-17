import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import NoteList from './components/NoteList';
import { useState } from 'react';
import TextArea from './components/TextArea';
import { nanoid } from 'nanoid'
import { toBeEnabled } from '@testing-library/jest-dom/dist/matchers';
import Footer from './components/Footer';

function App() {

  //HANDLE LOCAL STORAGE
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
      id: nanoid(),
      color: setNoteBg()
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


  //SET EDIT STATE
  const [edit, setEdit] = useState(false)

  //EDIT A NOTE
  const editNote = (id) => {
    // console.log(id)
    const find = notes.find((note) => note.id == id)
    let val = document.getElementById('textArea').value
    document.getElementById('textArea').value = find.text
    // const index = notes.findIndex(x => x.id === id);

  }


  const [noteText, setnoteText] = useState('')

  const [noteId, setNoteId] = useState('')

  const updateNote = () => {
    let val = document.getElementById('textArea').value
    const updatedArr = notes.map((note) => {
      if (note.id === noteId) {
        note.text = val;
      }
      return note;
    });
    setNotes(updatedArr);
    localStorage.setItem('notes', JSON.stringify(updatedArr))
    setnoteText("");
    setEdit(false);
    document.getElementById('textArea').value = ''

  }

  //SETTING NOTE COLOR
  const setNoteBg = () => {
    const colors = ["rgb(197, 243, 255)", "rgb(141, 228, 231)", "rgb(255, 237, 197)", "rgb(229, 197, 255)", "rgb(255, 169, 255)", "rgb(255, 221, 146)", "rgb(141, 228, 231)"];

    const random = Math.floor(Math.random() * colors.length);
    return random, colors[random]
  }

  return (
    <>


      <Navbar title="React Note App" />


      <div className="container">
        <TextArea handleNoteSave={addNote}
          setEdit={setEdit}
          edit={edit}
          updateNote={updateNote}
          noteText={noteText}
          setnoteText={setnoteText}
        />
      </div>

      <div className="container">

        <NoteList notes={notes}
          handleDeleteNote={deleteNote}
          editNote={editNote}
          setEdit={setEdit}
          setNoteId={setNoteId}

        />
      </div>
      <Footer/>

    </>
  );
}

export default App;

