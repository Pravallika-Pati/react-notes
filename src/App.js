import { useEffect, useState } from 'react';
import {nanoid} from 'nanoid';
import NotesList from './components/NotesList';
import Search from './components/Search';
import Header from './components/Header';

const App= () => {
  const [notes,setNotes]=useState([
    {
    id:nanoid(),
    text:"1stNote",
    date:"oct 1-2022"
    },
    {
      id:nanoid(),
      text:"2nd Note",
      date:"oct 1-2022"
      },
      {
        id:nanoid(),
        text:"3rd Note",
        date:"oct 1-2022"
        },
        {
          id:nanoid(),
          text:"New Note",
          date:"oct 1-2022"
          },
]);

 const [searchText,setSearchText]=useState(""); 

 const [darkMode,setDarkMode]=useState(false);

useEffect(()=>{
  const savedNotes=JSON.parse(
    localStorage.getItem('react-notes-app-data')
  );
  if(savedNotes){
    setNotes(savedNotes);
  }
},[]);

 useEffect(()=>{
       localStorage.setItem(
         'react-notes-app-data',
          JSON.stringify(notes)
       );
 },[notes]);
  
 const addNote=(text)=>{
  const date=new Date();
  const newNote={
    id:nanoid(),
    text:text,
    date:date.toLocaleDateString()
  };
  const newNotes=[...notes,newNote];
  setNotes(newNotes);
 };
 const deleteNote=(id)=>{
  const newNotes=notes.filter((note)=>note.id!==id);
  setNotes(newNotes);
 }

  return( 
    <div>
      <div className="container">
      <Header handleToggleDarkMode={setDarkMode} />
      <Search handleSearchNote={setSearchText} />
     <NotesList 
         notes={notes.filter((note)=>
          note.text.toLocaleLowerCase().includes(searchText)
        )}
         handleAddNote={addNote}
         handledeleteNote={deleteNote} />
    </div>
    </div>
    );
};

export default App;