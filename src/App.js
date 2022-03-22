import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import NoteList from './components/NoteList';
import { useState } from 'react';
import TextArea from './components/TextArea';
import { nanoid } from 'nanoid'


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
  const deleteNote=(id)=>{
    const newArr=notes.filter((note)=> note.id!==id)
    setNotes(newArr)
  }

  //EDIT A NOTE
  const editNote=(id)=>{
    const find=notes.find((note)=>note.id==id)
    console.log(find)
  }

  return (
    <>


      <Navbar title="Magic Notes" />
      <div className="container">
        <TextArea handleNoteSave={addNote} />
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