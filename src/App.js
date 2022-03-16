import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import InputNotes from './components/InputNotes';
import PreviewNotes from './components/PreviewNotes';

function App() {

  
  return (
    <>
    

    <Navbar title="Magic Notes" />

    <div className="container">
    <InputNotes/>

    <PreviewNotes  />
    </div>

    </>
  );
}

export default App;
