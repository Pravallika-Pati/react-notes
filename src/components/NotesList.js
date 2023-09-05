import Note from './Note';
import AddNote from './AddNote';

const NotesList=({notes,handleAddNote,handledeleteNote})=>{
    return (
        <div className="notes-list">
            {notes.map((notes)=>(
            <Note id={notes.id} text={notes.text} 
            date={notes.date} 
            handledeleteNote={handledeleteNote} />
            ))}
            <AddNote handleAddNote={handleAddNote} />
        </div>
    );
}

export default NotesList;