import React from 'react'

const Button = ({btnText, btnClassName, btnType, onBtnClick, btnDisable}:any) => {
  return (
    <button 
        type={btnType || "button"} 
        className={`button ${btnClassName}`}
        onClick={onBtnClick}
        disabled={btnDisable}
    >
        {btnText}
    </button>
  )
}

export default Button