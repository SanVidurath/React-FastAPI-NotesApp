import { useState } from "react";
import "./App.css";
import NavbarComponent from "./app/components/NavbarComponent";
import CreateArea from "./app/components/CreateArea";
import Footer from "./app/components/Footer";
import Note from "./app/components/Note";

function App() {
  const [notes, setNotes] = useState([]);

  const addNote = (newNote) => {
    setNotes((prevNotes) => {
      return [...prevNotes, newNote];
    });
  };

  const deleteNote = (id) => {
    setNotes((prevNotes) => {
      return prevNotes.filter((note, index) => {
        return index !== id;
      });
    });
  };

  return (
    <>
      <NavbarComponent />
      <CreateArea onAdd={addNote}/>
      {notes.map((note, index) => {
        return (
          <Note 
            key={index}
            id={index}
            title={note.title}
            content={note.content}
            onDelete={deleteNote}
          />
        )
      })}
      <Footer />
    </>
  );
}

export default App;
