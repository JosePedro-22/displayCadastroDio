import React from 'react'
import { Button } from '@mui/material';

import style from './button.module.css';

const ButtonUsed = ({title,variant = "primary", onClick}:any) => {
  
  return (

    <div className={style.borderButton}>
      <Button 
        className={style.button}
        variant={variant} 
        onClick={onClick}
        style={{fontSize:'20px'}}
      >
        {title}
      </Button>
    </div>
  )
}

export { ButtonUsed }