import { useState } from 'react'
import styles from "../Styles/button.scss"

function Button({text, iconsrc, customstyle={}, onClick, onMouseEnter, onMouseLeave}) {

  return (
    <>
      { text?
        <button onMouseLeave={onMouseLeave} onClick={onClick} onMouseEnter={onMouseEnter} className="custom-hover" >{text}</button> : iconsrc ? //regular button
        <button onMouseLeave={onMouseLeave} onClick={onClick} onMouseEnter={onMouseEnter} className='iconbtn custom-hover'  style={{...customstyle}} ><img src={iconsrc}/></button> : //icon button
        <button onMouseLeave={onMouseLeave} onClick={onClick} onMouseEnter={onMouseEnter} className="custom-hover" >Unset</button> //default unset
      }
    </>
  )
}

export default Button