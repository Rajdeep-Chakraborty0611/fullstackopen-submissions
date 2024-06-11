const Course =({course})=>{
  
  const Header=(props)=>{
    return(
      <div>
      <h2>{props.course}</h2>
    </div>
    )
  }
  
  const Content=({parts})=>{
    
    return(
      <div>
        {parts.map(courses=>
          <p key={courses.id}>
            {courses.name} {courses.exercises}
          </p>
        )}
      </div>
    )
  }

  const Total=({parts})=>{

    const inival=0
    const total = parts.reduce((acc,curval)=>acc + curval.exercises,inival)
    return(
      <div>
        <b>Total number of exercises = {total}</b>
      </div>
    )
  }
  return(
    <div>
      <Header course={course.name}/>
      <Content parts={course.parts}/>
      <Total parts={course.parts}/>
    </div>
  )
}

const App = () => {
  
  const course = [
    {
    id: 1,
    name: 'Half Stack application development',
    parts: [
      {
        name: 'Fundamentals of React',
        exercises: 10,
        id: 1
      },
      {
        name: 'Using props to pass data',
        exercises: 7,
        id: 2
      },
      {
        name: 'State of a component',
        exercises: 14,
        id: 3
      },
      {
        name: 'Redux',
        exercises: 11,
        id: 4
      }
    ]
  },
  {
    name: 'Node.js',
    id: 2,
    parts: [
      {
        name: 'Routing',
        exercises: 3,
        id: 1
      },
      {
        name: 'Middlewares',
        exercises: 7,
        id: 2
      }
    ]
  }
]

  return(
  <div>
    <h1>Web Development Curriculum</h1>
    {course.map(courses=>
      <Course key={courses.id} course={courses} />
      )}
    
    </div>)
}

export default App