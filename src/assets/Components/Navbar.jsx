import { useEffect, useState } from 'react'
import { Link, useLocation, useNavigate } from "react-router-dom"
import styles from "../Styles/styles.scss"


function Navbar ({}) {

const [position, setPosition] = useState(0);
let pillPosition = ['pos1', 'pos2', 'pos3'];
const navigate = useNavigate()
const location = useLocation()
const currentlocation = location.pathname;

const timeGetter = ()=> {
    const t1 = new Date();
    // const t2 = new Date(t1.getTime() + (1 * 60 * 60 * 1000))
    return t1;
}
const formatTime = (time) => {
    return time < 10 ? `0${time}` : time;
};

const [thLive,setThLive] = useState(formatTime(timeGetter().getHours()));
const [tmLive,setTmLive] = useState(formatTime(timeGetter().getMinutes()));
const [scrollY, setScrollY] = useState(0);

useEffect(()=>{
    const intervalId = setInterval(() => {
        const currentTime = timeGetter();
        setThLive(formatTime(currentTime.getHours()))
        setTmLive(formatTime(currentTime.getMinutes()));
    }, 1000); //clock

    const handleScroll = ()=>{
        setScrollY(window.scrollY);
    }
    window.addEventListener('scroll', handleScroll);
    return () => {
    window.removeEventListener('scroll', handleScroll);
    }; //scroll handler

    return () => clearInterval(intervalId);

},[]);

  return (

    <>
        <div className='prog_blur'></div>
        <nav className={scrollY > 32 ? 'nav_element_hover' : ''}  style={ currentlocation === "/" || "/dump" || "/casestudies/1" ? { } : {display:"none"} } >
            <div className='nav_title'>
                <h5>Williams Eni</h5>
                <h5>Product Designer</h5>
            </div>

            <div className='nav_tabs'>
                <div className={pillPosition[position]}></div>

                {/* automatically set position to whatever tab we're at */}

                <Link className="custom-hover" onClick={()=>{setPosition(0)}} to="/" >Bio<span>1</span></Link>

                <Link className="custom-hover" onClick={()=>{setPosition(1)}} to="/dump" >All Work<span>2</span></Link>

                {/* <Link className="custom-hover" onClick={()=>{setPosition(2)}} style={{pointerEvents:"none", opacity:"0.25"}} >Empty<span>98</span></Link> */}

                <div className='divider_vertical_small'></div>

                <a className="custom-hover" href="mailto:williams.eitobo@gmail.com?subject=Hello, Williams&body=Hi, Here's a Raven with a message. My name is">Send a Raven<span>&#x2197;</span></a>
            </div>

            <div className='status'>
                <h5>{thLive}:{tmLive} Lagos, NG</h5>
                <h5>Open to Work</h5>
                {/* probably sleeping */}
            </div>
        </nav>
    </>
  )
}

export default Navbar
