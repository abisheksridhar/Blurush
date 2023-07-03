import React from 'react'
import './Label.scss'

const Label = ({variant,onlblClick,text,required,lblFor}) => {
  return (
    <div className="label">
    <label className={variant} onClick={onlblClick} htmlFor={lblFor}>
        {text}
        {required && <span className='labelRequired'>*</span>}
    </label>
    </div>
  )
}

export default Label
