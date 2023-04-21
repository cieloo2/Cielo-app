import React from 'react'
import LinkForm from './LinkForm'

const Links = () => {
const addTask = () => {
  console.log('new task')
}
  
 return (
   <LinkForm addOrEdit={addTask} />
   
 )
}

export default Links