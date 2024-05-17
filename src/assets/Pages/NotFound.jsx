import { Link, useNavigate } from "react-router-dom"
import Button from '../Components/Button.jsx'
import styles from "../Styles/styles.scss"
import Reading from '../Components/Reading.jsx'
import WorkItem from '../Components/WorkItem.jsx'
import transition from '../../transitions.jsx'
import dumpcoverimg from "../Media/Images/imgplaceholder.png"

function NotFound(){
  
  const navigate = useNavigate();

  return(
    <>
    <div className='page_404'>
      <p>You shouldn't be here.</p>

      <div className='page_404_container'>
        <span><h1>4</h1></span>
        <div><img src="" alt="" /></div>
        <span><h1>4</h1></span>
      </div>

      <Button text="Go Back Home" onClick={()=>{navigate("/")}}/>

    <div className='credits_404'>
      <p>To Azur, Stans, Seunpaul, Brub, my bebisss, 'mo, omolxre, miss oddbod.
        <br/>Made with a fill of bread, lots of tea, in hyperfixation and out of spite,
        <br/>Against all Odds–––gegen alle widrigkeiten
      </p>
    </div>

    </div>

    </>
  )
}

export default NotFound
