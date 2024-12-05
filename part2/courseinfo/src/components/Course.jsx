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

export default Course