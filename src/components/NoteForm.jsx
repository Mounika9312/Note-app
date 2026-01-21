import React, { useState } from "react";

const NoteForm = ({addNote}) => {
  const [note, setNote] = useState('');
  console.log(note);
  const handleChange = (e) => {
    setNote(e.target.value);
  }
   
  const handleSubmit=(e)=>{
    e.preventDefault();
    if(note.trim()){
        addNote(note);
        setNote('')
    }
  }
  return (
    <div className="input-section">
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Start Writing Text..."
          value={note}
          onChange={handleChange}
        />
        <button>Add Note</button>
      </form>
    </div>
  );
};

export default NoteForm;
