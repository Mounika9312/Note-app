import React from 'react'

const NoteList = ({notes,deleteNote}) => {
  return (
    <div className='notes-list'>
       { notes.length > 0 ? (
            notes.map((note,index)=>(
                <div key={index} className='note'>
                    <span>{note}</span>
                    <button onClick={()=> deleteNote(index)}>Delete</button>
                </div>
            ))
            
        ):(<p>No Notes Yet!</p>)}
    </div>
  )
}

export default NoteList