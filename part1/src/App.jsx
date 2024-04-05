import {useState} from 'react'
//App component
const App=()=>{
  //setting initial value of counter as 0 and assigning useState's fucntion attribute to setCounter
  const [counter,setCounter]=useState(0)
  console.log('rendering with the counter value',counter)

  //event handler to increase value of counter by 1
  const increaseByOne=()=>{
    console.log('increasing,value before ',counter)
    setCounter(counter +1)}
  
  //event handler to reset value of counter to 0
  const setToZero=()=>{
    console.log('setting to zero, value before ',counter)
    setCounter(0)}
  
  //event handler to decrease value of counter by 1
  const decreaseByOne=()=>{
    console.log('decreasing, value before ',counter)
    setCounter(counter-1)}
  
  //component to display value of counter
  const Display=({counter})=><div><p>The value of counter is {counter}</p></div>
  
  //component to call event handler functions
  const Buttons=({onClick,text})=><button onClick={onClick}>{text}</button>
  
  return(
    <>
    <Display counter={counter}/>
    
    <Buttons onClick={increaseByOne} text="plus"/>
    
    <Buttons onClick={setToZero} text="zero"/>
    
    <Buttons onClick={decreaseByOne} text="minus"/>
    
    </>
    
  )
}
export default App