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
            title:"Crafting a Marketing Website for an On-Chain Analysis Tool"
        }}
        />

        <ImgLarge src="https://res.cloudinary.com/dhlkiskhn/image/upload/v1717886600/My%20Portfolio/0xHuntBot.png" alt="Shots of Website"/>

        <section>
          <BillboardText text="Marketing the Evolution of Blockchain Exploration"/>
          <BodyText
              text="The primary objective was to create a catchy website that would capture the essence of the Web3 tool, 0xHuntBot, while also ensuring quick completion. In addition, I needed to incorporate an animated product logo/mascot, which added complexity to the project.
              </br></br> To achieve this, I drew inspiration from existing ideas and trends in the Web3 space to build a cohesive narrative for the website, and also overcome the learning curve of using Rive&emdash;an animation tool I was working with for the first time, to deploy assets to a live project."
              />
        </section>

        <ImgLarge src="https://res.cloudinary.com/dhlkiskhn/image/upload/v1727961509/My%20Portfolio/0xHuntBot%20Section.gif" alt="shots of section" />

        <section>
          <BillboardText text="Outcome"/>
          <BodyText
              text="I quickly gathered design ideas and learned Rive to animate the mascot, creating a compelling website. Despite the tight deadline, I delivered an interactive site on time, using web UI animation and interaction design to convey the concept effectively. This project sharpened my skills and boosted my expertise in live animations."
              />
        </section>
        
        <ImgLarge src="https://res.cloudinary.com/dhlkiskhn/video/upload/q_auto:low/v1717766209/Screen_Recording_Sept_15.gif" alt="shots of mascot" />


        <BodyText
            text="I worked alongside <a style='color:#000000; font-decoration:none;' href='https://linkedin.com/in/bolarinwa-owuogba-12952816a', '_blank'> Bolarinwa Owuogba </a>, who was the Web developer on the project and assisted in design critique."
        />

        <BillboardText link
          onClick={()=>{window.open("https://0xHuntBot.xyz", "_blank")}} 
          text="0xHuntbot.xyz &#x2197;"
        />

      
      {/* ------------------------------------------- */}


        <p className='casestudy_thankyou'>Thank you for reading!</p>

        <div className='back-to-top'>
          <h1>Read Next: <br/><span><a href="/casestudies/InDriver">Tackling usage obstacles on InDriver as a Digital Hailing Service</a></span></h1>
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
