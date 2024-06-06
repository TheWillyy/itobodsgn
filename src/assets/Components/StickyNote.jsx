import { useEffect, useRef, useState } from 'react'
import styles from "../Styles/styles.scss"
import WorkItem from '../Components/WorkItem.jsx'


function StickyNote({text=""}){
    const [randomDeg, setRandomDeg] = useState(-5)
  return(
    <>
        <div className='stickynote' 
             onMouseEnter={()=>{
                setRandomDeg(Math.floor((Math.random() * 10) + 1))
             }}
        >
            <div style={{transform:`rotate(${randomDeg}deg)` }}>
                <p dangerouslySetInnerHTML={{ __html: text }} />
            </div>
        </div>
    </>
  )
}

export default StickyNote