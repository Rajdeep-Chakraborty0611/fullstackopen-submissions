import { useState } from 'react'
const App=()=>{
  const[persons,setPersons]=useState([
    {
      name : 'Arto Hellas',
      phonenumber : '657498393764',
  }
  ])
  const [newName,setNewName]=useState('')
  const [newNumber,setNewNumber] = useState('')

  const handleNameChange=(event)=>{
    console.log(event.target.value)
    setNewName(event.target.value)
  }

  const handleNumberChange=(event)=>{
    console.log(event.target.value)
    setNewNumber(event.target.value)
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
        phonenumber : newNumber,
      }
      setPersons(persons.concat(nameObject))
      
    }
    setNewName('')
    setNewNumber('')
    
  }

return(
  <div>
    <h2>Phonebook</h2>
    <form onSubmit={addName}>
      <div>
        name : <input value={newName} onChange={handleNameChange}/><br/>
        Phone Number : <input value={newNumber} onChange={handleNumberChange}/>
      </div>
      <div>
        <button type='submit'>add</button>
      </div>
    </form>
    <h2>Numbers</h2>
    {persons.map(person=>
    <p key={person.name}>
      {person.name} {person.phonenumber}
    </p>
    )}
  </div>
 )
}

export default App
