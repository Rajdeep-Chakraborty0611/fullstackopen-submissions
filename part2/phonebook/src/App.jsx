import { useState } from 'react'
const App=()=>{
  const[persons,setPersons]=useState([
    {name : 'Arto Hellas'}
  ])
  const [newName,setNewName]=useState('')

  const handleNameChange=(event)=>{
    console.log(event.target.value)
    setNewName(event.target.value)
  }

  const doesExist=(props)=>{
    if(JSON.stringify(props.name)===JSON.stringify(newName)){
      return true
    }
    else{
      return false
    }
  }

  const addName=(event)=>{
    
    event.preventDefault()
    console.log("button clicked",event.target)

    if (persons.find(doesExist)) {
      alert(`${newName} is already added to phonebook`)
      
    } else {
      const nameObject={
        name: newName,
      }
      setPersons(persons.concat(nameObject))
      setNewName('')
    }
    
    
  }

return(
  <div>
    <h2>Phonebook</h2>
    <form onSubmit={addName}>
      <div>
        name : <input value={newName} onChange={handleNameChange}/>
      </div>
      <div>
        <button type='submit'>add</button>
      </div>
    </form>
    <h2>Numbers</h2>
    {persons.map(person=>
    <p key={person.name}>
      {person.name}
    </p>
    )}
  </div>
 )
}

export default App