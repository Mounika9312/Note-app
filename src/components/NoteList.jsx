import React from 'react'

const NoteList = ({notes,deleteNote}) => {
  return (
    <div className='notes-wrapper'>
       { notes.length > 0 ? (
            notes.map((note,index)=>(
                <div key={index} className='note-item'>
                    <span className='note-text'>{note}</span>
                    <button className='delete-btn' onClick={()=> deleteNote(index)}>Delete</button>
                </div>
            ))
            
        ):(<p className='empty-text'>No Notes Yet!</p>)}
    </div>
  )
}

export default NoteList