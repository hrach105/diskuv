import React from 'react';

const Input = ({type,placeholder,value,handleChange,id}:any):any => {
  return (
    <div className='input-item'>
        <input 
            id={id}
            type={type} 
            placeholder={placeholder}
            value={value}
            onChange={handleChange}  
        />
        
    </div>
  )
}

export default Input