import { Link, useNavigate } from "react-router-dom"
import Button from '../Components/Button.jsx'
import notfoundimg from '../Media/Images/notfound-img.jpeg'
import styles from "../Styles/styles.scss"

function NotFound(){
  
  const navigate = useNavigate();

  return(
    <>
    <div className='page_404'>
      <p>You shouldn't be here.</p>

      <div className='page_404_container'>
        <span><h1>4</h1></span>
        <div><img src={notfoundimg} alt="picture of a hand with all fingers together in a pinching gesture as a prank" /></div>
        <span><h1>4</h1></span>
      </div>

      <Button text="Go Back Home" onClick={()=>{navigate("/")}}/>

    <div className='credits_404'>
      <p>Say a thank you to Azur, Stans, Seunpaul, Femi, Brub, zik, my bebisss, 'mo, omolxre, and miss oddbod.
        <br/>Made with a fill of bread, lots of tea, in hyperfixation and out of spite,
        <br/>Against all Odds–––gegen alle widrigkeiten
      </p>
    </div>

    </div>

    </>
  )
}

export default NotFound
