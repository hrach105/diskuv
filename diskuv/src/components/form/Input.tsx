import React from 'react';

const Input = ({type,placeholder,value,handlerChange,id}:any):any => {
  return (
    <div className='input-item'>
        <input 
            id={id}
            type={type} 
            placeholder={placeholder}
            value={value}
            onChange={handlerChange}
        />
        
    </div>
  )
}

export default Input