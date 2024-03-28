const Header=(props)=>{
  return(
    <div>
    <h1>{props.course}</h1>
  </div>
  )
}
const Part1=(helo)=>{
  return(
    <div>
      <p>
        {helo.part1} {helo.exercises1}
      </p>
    </div>
  )
}
const Part2=(helo)=>{
  return(
    <div>
      <p>
        {helo.part2} {helo.exercises2}
      </p>
    </div>
  )
}
const Part3=(helo)=>{
  return(
    <div>
      <p>
        {helo.part3} {helo.exercises3}
      </p>
    </div>
  )
}
const Content=(props)=>{
  return(
    <div>
      <Part1 part1={props.parts[0].name} exercises1={props.parts[0].exercises}/>
      
      <Part2  part2={props.parts[1].name} exercises2={props.parts[1].exercises}/>
      
      <Part3  part3={props.parts[2].name} exercises3={props.parts[2].exercises}/>
      
    </div>
  )
}
const Total=(props)=>{
  return(
    <p>Number of exercises {props.parts[0].exercises+ props.parts[1].exercises +props.parts[2].exercises}</p>
  )
}
const App =()=>{
  const course='Half Stack application development'
  const parts = [
    {
      name:'Fundamentals of React',
      exercises: 10
    },
    {
      name: 'Using props to pass data',
      exercises: 7
    },
    {
      name:'State of a component',
      exercises: 14
    }
  ]
    
  return (
    <>
      <Header course={course}/>
      <Content parts={parts}/>
      <Total parts={parts} />
    </>
  )
}
export default App
