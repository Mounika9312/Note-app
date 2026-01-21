import React from "react";
import NoteForm from "./components/NoteForm"
import {useState,useEffect} from 'react'
import NoteList from "./components/NoteList";

const App = () => {
    const [notes,setNotes]=useState([]);
    useEffect(()=>{
        const savedNotes= JSON.parse(localStorage.getItem('notes')) ||  [];;
        setNotes(savedNotes)
    },[])
    const addNote=(newNote)=>{
        const  updatedNotes =[...notes,newNote];
        setNotes(updatedNotes);
        localStorage.setItem('notes',JSON.stringify(updatedNotes))
    }
    const deleteNote=(index)=>{
        const updateNotes= notes.filter((_, i) =>i !== index);
        setNotes(updateNotes);
        localStorage.setItem('notes',JSON.stringify(updateNotes))
    }
  return (
    <div className="app">
      <h1>Notes App</h1>
      <NoteForm addNote={addNote}/>
      <NoteList notes={notes} deleteNote={deleteNote}/>
    </div>
  );
};

export default App;
