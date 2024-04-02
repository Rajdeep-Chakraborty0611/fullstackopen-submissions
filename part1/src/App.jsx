const Hello = (props) =>{
  const bornYear=()=>{
    const yearNow=new Date().getFullYear()
    return yearNow - props.age
  }
  return (
    <div>
      <p>Hello {props.name} of age {props.age}</p>
      <p>So you were probably born in {bornYear()}</p>
    </div>
  )
}

const App =()=>{
  const name='Peter'
  const age='10'
  /*const friends=[
    {name:'Mahir', age:20},
    {name:'Sujal', age:19},
  ]
  const friend=[
    'Mahir ','Sujal ','Parth'
  ]*/
  return (
    /*<>
      <h1>Greetings</h1>
      <Hello name='George' age='27'/>
      <Hello name={name} age={age} />
      <Hello name={friends[0].name} age={friends[0].age}/>
      <p>Hello {friends[1].name} of age {friends[1].age}</p>
      <p>{friend}</p>
    </>*/
    <>
    <h1>Greetings</h1>
    <Hello name="Maya" age={26+10} />
    <Hello name={name} age={age} />
    </>
  )
}
export default App