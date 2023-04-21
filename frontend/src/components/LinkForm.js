import {useState} from 'react'
const LinkForm = (props)=>{
  
    const [values, setValues] = useState({
    url: '',
    name:'',
    description:''
  })

    const handleInputChange = e => {
      const {name, value} = e.target
      setValues({...values, [name]: value})
    }
  
  const handleSubmit = e =>{
    e.preventDefault();
    console.log(values)
    props.addOrEdit()
  }

  
  return (
    <form className="card card-body" onSubmit={handleSubmit}>

      <div className="form-group input-group my-2">
        <div className="input-group-text bg-light">
          <i class="material-icons">link</i>
        </div>
        <input type="text" className="form-control" placeholder="url" name="url" onChange={handleInputChange} />
      </div>
      <div className="form-group input-group my-2">
        <div className="input-group-text bg-light">
          <i class="material-icons">person</i>
        </div>
        <input type="text" className="form-control" placeholder="name" name="name" onChange={handleInputChange} />
      </div>
      <div className="form-group input-group my-2">
        <div className="input-group-text bg-light">
          <i class="material-icons">add</i>
        </div>
        <input type="text" className="form-control" placeholder="description" name="description" onChange={handleInputChange} />
      </div>
      <button class="btn btn-primary btn-block">
        Save
      </button>
    </form>
  )
}

export default LinkForm