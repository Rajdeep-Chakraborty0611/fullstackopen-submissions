const DisplayName=({filtered})=>{

    return(
      <div>
      {filtered.map(person=>
        <p key={person.name}>
          {person.name} {person.phonenumber}</p>  
      )}
      </div>
    )
  }

  export default DisplayName