const Form=(props)=>{
    return(
      <div>
        <form onSubmit={props.onsub}>
        <div>
          
          name : <input value={props.nval} onChange={props.nchange}/><br/>
          Phone Number : <input value={props.pval} onChange={props.pchange}/>
        </div>
        <div>
          <button type='submit'>add</button>
        </div>
      </form>
      </div>
    )
  }

export default Form