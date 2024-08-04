import { useState,useEffect } from 'react'
import Filter from './components/Filter'
import DisplayName from './components/Display'
import Form from './components/Form'
import axios from 'axios'

const App=()=>{
  const [persons, setPersons] = useState([])
  const [newName,setNewName]=useState('')
  const [newNumber,setNewNumber] = useState('')
  const [filterName, handleFilterName] = useState('')

  useEffect(()=>{
    axios
    .get('http://localhost:3001/persons')
    .then(response=>{
      setPersons(response.data)
    })
  },[])
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
