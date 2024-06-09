import {useState} from 'react'
  
const Button=({handleClick,text})=>(
  <button onClick={handleClick} >
    {text}
  </button>
)
const App=()=>{
  const [good,setGood] = useState(0)
  const [neutral,setNeutral] = useState(0)
  const [bad,setBad] = useState(0)
  const goodclick=()=>{
    const updatedgood=good+1
    setGood(updatedgood)
    console.log("no of good clicks" , updatedgood)
  }

  const neutralclick=()=>{
    const updatedneutral=neutral+1
    setNeutral(updatedneutral)
    console.log("no of neutral clicks" , updatedneutral)
  } 

  const badclick=()=>{
    const updatedbad=bad+1
    setBad(updatedbad)
    console.log("no of bad clicks" , updatedbad)
  }
  
  return(
    <div>
      <h1>give feedback</h1>
      <Button handleClick={goodclick} text='good' />
      <Button handleClick={neutralclick} text='neutral' />
      <Button handleClick={badclick} text='bad' />
      <h1>statistics</h1>
      <h3><p>good {good}</p>
      <p>neutral {neutral}</p>
      <p>bad {bad}</p></h3>
      
    </div>
    
  )
}
export default App

//