const Hello = (props) =>{
  return (
    <div>
      <p>Hello {props.name} of age {props.age}</p>
    </div>
  )
}

const App =()=>{
  const name='Maya'
  const age='15'
  const friends=[
    {name:'Mahir', age:20},
    {name:'Sujal', age:19},
  ]
  const friend=[
    'Mahir ','Sujal ','Parth'
  ]
  return (
    <>
      <h1>Greetings</h1>
      <Hello name='George' age='27'/>
      <Hello name={name} age={age} />
      <Hello name={friends[0].name} age={friends[0].age}/>
      <p>Hello {friends[1].name} of age {friends[1].age}</p>
      <p>{friend}</p>
    </>
  )
}
export default App