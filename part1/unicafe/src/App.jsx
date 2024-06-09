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
  const [total,setTotal] = useState(0)
  const [avg,setAvg] = useState(0)

  const goodclick=()=>{
    const updatedgood=good+1
    setGood(updatedgood)
    const updatedtotal=total+1
    setTotal(updatedtotal)
    const updatedavg=avg+1
    setAvg(updatedavg)
    console.log("no of good clicks" , updatedgood)
  }

  const neutralclick=()=>{
    const updatedneutral=neutral+1
    setNeutral(updatedneutral)
    const updatedtotal=total+1
    setTotal(updatedtotal)
    console.log("no of neutral clicks" , updatedneutral)
  } 

  const badclick=()=>{
    const updatedbad=bad+1
    setBad(updatedbad)
    const updatedtotal=total+1
    setTotal(updatedtotal)
    const updatedavg=avg-1
    setAvg(updatedavg)
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
      <p>bad {bad}</p>
      <p>all {total}</p>
      <p>average {avg/total}</p>
      <p>positive feedback {good*100/total}%</p></h3>
      
    </div>
    
  )
}
export default App

//