import React from 'react'
import { Controller } from "react-hook-form";
import style from './inputs.module.css';

const Input = ({leftIcon, name, control, ...rest}:any) => {
  
  return (
    <div className={style.intupfirts} style={{marginTop:'1.5rem'}}>
      {leftIcon ? (<div className={style.intupContainer } >{leftIcon}</div>) : null}
      <Controller
        name={name}
        control={control}
        render={({ field }) =>  <div className={style.intupsecondy} {...field} {...rest} />}
      /> 
    </div>
  )
}

export { Input }; 