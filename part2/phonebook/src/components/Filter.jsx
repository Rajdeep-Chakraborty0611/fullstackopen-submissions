const Filter=({name,handler})=>{
    return(
      <div>
        filter : <input value={name} onChange={handler}/>
      </div>
    )
  
  }
  export default Filter