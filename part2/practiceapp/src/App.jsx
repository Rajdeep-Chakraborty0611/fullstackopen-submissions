import Note from './components/Note'

/*const Note=({note})=>(
  <li>{note}</li>
)*/

const App=({notes})=>{
  //const {notes}=props
  /*return(
    <div>
      <h1>
        Notes
      </h1>
      <ul>
        {notes.map(note=> 
        <li key={note.id}>
          {note.content}
        </li>
        )}
      </ul>
    </div>
  )
}*/
return(
  <div>
    <h1>
      Notes
    </h1>
    <ul>
      {notes.map(note=> 
      <Note key={note.id} note={note.content} />
      )}
    </ul>
  </div>
)
}
export default App
