/*import {useState} from 'react'
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
export default <App>*/



//part1d

import {useState} from 'react'
const History=(props)=>{
  if(props.allClicks.length === 0){
    return(
      <div>
        no buttons have been pressed
      </div>
    )
  }
  return(
    <div>
      button press history: {props.allClicks.join(' ')}
      <p>Total : {props.allClicks.length}</p>
    </div>
  )
}

const Button=({handleClick,text})=>(
  <button onClick={handleClick}>
    {text}
  </button>
)
const App=()=>{
  const[left,setLeft]=useState(0)
  const[right,setRight]=useState(0)
  //const[clicks,setClicks]=useState({left:0, right:0})
  const[allClicks,setAll]=useState([])
  const[total,setTotal]=useState(0)

  const handleLeftClick=()=>{
    setAll(allClicks.concat('L'))
    console.log('left before' , left)
    const updatedleft=left+1
    setLeft(updatedleft)
    console.log('left after', updatedleft)
    setTotal(updatedleft + right)
  }

  const handleRightClick=()=>{
    setAll(allClicks.concat('R'))
    console.log('right before',right)
    const updatedright=right+1
    setRight(updatedright)
    console.log('right after',updatedright)
    setTotal(left+updatedright)
  }
  return(
    /*<div>
      {left}
      <button onClick={handleLeftClick}>
        left
      </button>
      <button onClick={handleRightClick}>
        right
      </button>
      {right}
      <p>{allClicks.join(' ')}</p>
      <p>Total clicks = {total}</p>
    </div>*/
    <div>
      {left}
      <Button handleClick={handleLeftClick} text='left'/>
      <Button handleClick={handleRightClick} text='right'/>
      {right}
      <History allClicks={allClicks}/>      
    </div>
  )
}

export default App





































