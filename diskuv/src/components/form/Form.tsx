import React,{useState} from 'react'
import Input from '../../components/form/input'
import Button from '../Button'

import './form.scss'
import Textarea from './Textarea'
const Form = () => {

    const [input,setInput] = useState('')
   
  return (
    <form>
        <div className='inputs'>
        <Input
            type="text"
            placeholder="Enter your name"
            onChange={()=>setInput}
        />
         <Input
            type="text"
            placeholder="Enter your email adress"
        />
        </div>
       <Textarea />
      <div> 
        <Button btnText="Submit Your Message" />
      </div>
    </form>
  )
}

export default Form