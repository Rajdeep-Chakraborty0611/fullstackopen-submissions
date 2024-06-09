import {useState} from 'react'
  
const Button=({handleClick,text})=>(
  <button onClick={handleClick} >
    {text}
  </button>
)
const Statistics=(props)=>{
  if(props.total>0){
    return(
      <div>
        <h3><p>good {props.good}</p>
      <p>neutral {props.neutral}</p>
      <p>bad {props.bad}</p>
      <p>all {props.total}</p>
      <p>average {props.avg/props.total}</p>
      <p>positive feedback {props.good*100/props.total}%</p></h3>
      </div>
    )
  }
  return(
    <div>
      <h3>No feedback given</h3>
    </div>
  )
  
}
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
      <Statistics good={good} bad={bad} neutral={neutral} total={total} avg={avg} />
      
    </div>
    
  )
}
export default App

//