import { useState } from 'react'
import Filter from './components/Filter'
import DisplayName from './components/Display'
import Form from './components/Form'


const App=()=>{
  const [persons, setPersons] = useState([
    { name: 'Arto Hellas', phonenumber: '040-123456', id: 1 },
    { name: 'Ada Lovelace', phonenumber: '39-44-5323523', id: 2 },
    { name: 'Dan Abramov', phonenumber: '12-43-234345', id: 3 },
    { name: 'Mary Poppendieck', phonenumber: '39-23-6423122', id: 4 }
  ])

  const [newName,setNewName]=useState('')
  const [newNumber,setNewNumber] = useState('')
  const [filterName, handleFilterName] = useState('')

  const handleNameChange=(event)=>{
    console.log(event.target.value)
    setNewName(event.target.value)
  }

  const handleNumberChange=(event)=>{
    console.log(event.target.value)
    setNewNumber(event.target.value)
  }

  const handleFilter=(event)=>{
    console.log(event.target.value)
    handleFilterName(event.target.value)
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

 const filteredppl = persons.filter(person=> person.name.toLowerCase().includes(filterName.toLowerCase()))

 return(
  <div>
    <h2>Phonebook</h2>
    <Filter name={filterName} handler={handleFilter}/>

    <h2>New Number :</h2>
    <Form onsub={addName} nval={newName} pval={newNumber} nchange={handleNameChange} pchange={handleNumberChange}/>
    
    <h2>Numbers</h2>
    <DisplayName filtered={filteredppl} />
  </div>
 )
}

export default App
