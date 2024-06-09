import { useState } from 'react'

const Button=({event,text})=>(
  <button onClick={event}>
    {text}
  </button>
)
const App = () => {
  const anecdotes = [
    'If it hurts, do it more often.',
    'Adding manpower to a late software project makes it later!',
    'The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
    'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
    'Premature optimization is the root of all evil.',
    'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.',
    'Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when diagnosing patients.',
    'The only way to go fast, is to go well.'
  ]
  //const votes=[0,0,0,0,0,0,0,0] 
  //const votecopy=[...votes]
  const [selected, setSelected] = useState(0)
  const [vote,setVote] = useState(Array(anecdotes.length).fill(0))

  const totVote=()=>{
    console.log("before clicking vote button" ,vote[selected])
    const votecopy=[...vote]
    votecopy[selected]+=1
    setVote(votecopy)
    console.log("after clicking vote button",votecopy[selected])
  }
  const nextAnec=()=>{
    console.log("before clicking button : " , anecdotes[selected])
    const updateselected=Math.floor(Math.random()*8)
    setSelected(updateselected)
    console.log("after clicking button : " , anecdotes[updateselected])
  }
  return (
    <div>
      <p>{anecdotes[selected]}</p>
      <p>No of votes : {vote[selected]}
      </p>
      <p><Button event={totVote} text='votes' /> 
         <Button event={nextAnec} text='next anecdote'/>
      </p>
    </div>
  )
}

export default App