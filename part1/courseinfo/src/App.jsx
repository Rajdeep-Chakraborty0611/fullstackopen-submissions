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
      <Part1 part1={props.part1.name} exercises1={props.part1.exercises}/>
      
      <Part2  part2={props.part2.name} exercises2={props.part2.exercises}/>
      
      <Part3  part3={props.part3.name} exercises3={props.part3.exercises}/>
      
    </div>
  )
}
const Total=(props)=>{
  return(
    <p>Number of exercises {props.exercises1+ props.exercises2 +props.exercises3}</p>
  )
}
const App =()=>{
  const course='Half Stack application development'
  const part1= {
    name:'Fundamentals of React',
    exercises: 10
  }
  const part2 = {
    name: 'Using props to pass data',
    exercises: 7
  }
  const part3= {
    name:'State of a component',
    exercises: 14
  }
  return (
    <>
      <Header course={course}/>
      <Content part1={part1} part2={part2} part3={part3} />
      <Total exercises1={part1.exercises} exercises2={part2.exercises} exercises3={part3.exercises} />
    </>
  )
}
export default App
