import { useEffect, useRef, useState } from 'react'
import { Link, useNavigate } from "react-router-dom"
import Button from '../../Components/Button.jsx'
import styles from "../../Styles/styles.scss"
import CaseStudyInfo from '../../Components/CaseStudy/CaseStudyInfo.jsx'
import ImgLarge from '../../Components/CaseStudy/ImgLarge.jsx'
import BodyText from '../../Components/CaseStudy/BodyText.jsx'
import ImgSmall from '../../Components/CaseStudy/ImgSmall.jsx'
import BillboardText from '../../Components/CaseStudy/BillboardText.jsx'
import transition from '../../../transitions.jsx'
import backicon from '../../Media/Icons/back-icon.svg'
import Subheader from '../../Components/CaseStudy/Subheader.jsx'

function HuntBot(){
  const [scrollY, setScrollY] = useState(0);

  const handleScroll = () => {
    setScrollY(window.scrollY);
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    })
  }

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const navigate = useNavigate()
  const bodyHeight = document.querySelectorAll("body")[0].clientHeight;

    //will have ID
  return(
    <>
    <div className='casestudy'>

      <Button iconsrc={backicon} name="back" alt="back icon" customstyle={{
            backgroundColor:'white',
            position: 'absolute',
            left: 'calc( 5vw - 16px )',
            padding:'0'
          }} 
          onClick={()=>{navigate("/")}}
          />

        <CaseStudyInfo props={{
            year:'2023',
            role:'UI Designer',
            type:"Web UI and Motion Design",
            duration:"2 Days",
            title:"Marketing Website for an on-chain analysis tool"
        }}
        />

        <ImgLarge src="https://res.cloudinary.com/dhlkiskhn/image/upload/v1717673388/My%20Portfolio/0xhunt.png" alt="Shots of Website"/>

        <BodyText
            text="With an incredibly short deadline, I was tasked to design a catchy website for a web3 tool.
            </br> It earned me the opportunity to explore existing ideas and put a story together as quickly as possible within th constraint of time.
            
            </br></br>Another challenge of note was the learning curve involved in using Rive as an animation tool for the product logo/mascot for the first time on a live project."
        />

        <ImgLarge src="https://res.cloudinary.com/dhlkiskhn/video/upload/q_auto:low/v1717766209/Screen_Recording_Sept_15.gif" alt="shots of mascot" />

        <BodyText
            text="I worked alongside Bolarinwa Owuogba, who was the Web developer on the project."
        />

        <BillboardText link
          onClick={()=>{window.open("https://0xHuntBot.xyz", "_blank")}} 
          text="0xHuntbot.xyz &#x2197;"
        />

      
      {/* ------------------------------------------- */}


        <p className='casestudy_thankyou'>Thank you for reading!</p>

        <div className='back-to-top'>
          <h1>Read Next: <br/><span><a href="">Making it easier to find and share study material</a></span></h1>
          {/* can we automate the titles? */}
          <Button text="Back to Top" name="backtotop"
            onClick={scrollToTop}
          />
        </div>

        <div className='progress_bar' style={{width:`${( ((scrollY) / bodyHeight) * 110) + window.screen.height/bodyHeight }vw`}}></div>

    </div>

    </>
  )
}

export default transition(HuntBot);
