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

function SeamlessUSSD(){
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
            year:'2024',
            role:'Product Design',
            type:"Product/UX Design",
            duration:"2 Weeks",
            title:"A Seamless way for Fintech App Users to Counter Poor Internet"
        }}
        />

        <ImgLarge src="https://res.cloudinary.com/dhlkiskhn/image/upload/v1717766208/apiconf_cover.png" alt="SeamlessUSSD cover"/>

        <section>
          <BillboardText text="Connecting without the Internet"/>
          <BodyText
              text="When living in areas where internet connectivity cannot be guaranteed 100% uptime, it is not unusual that it stands in the way between people and completing actions that require internet connection on their phones. 
              </br></br> Picture a Nigerian trying to transfer money to a friend (or enemy) with their mobile banking app, their internet indicator is stuck on “E”, and they don’t have the option to connect to a shared hotspot to complete the transfer. What do they do?
              "
            />
        </section>

        <Subheader text="Mobile banking users cannot complete transactions from the banking app seamlessly when internet connection is inevitably poor or unavailable." />

        <section>
          <BillboardText text="How did we solve it?"/>
          <BodyText
              text="If we were a bank or a fintech, this is how we would meet this need. 
              </br></br> <b>Generate a USSD code for the initiated transaction and provide options to either copy it or dial instantly.</b> </br> USSD service does not require internet access to run, and it offers most of the basic features of the main mobile apps, however, no user can memorise all of the actions and corresponding codes for one financial service, let alone several.
              </br></br> <b>Place the USSD Generation feature at the point of transaction completion.</b> </br> This will ensure that the task flow of transactions is not broken, aiding seamlessness.
              </br></br> <b> Provide a list of common transactions and generate USSD codes for them with access to changing variables (like amount to pay and plans to buy) </b>
              "
            />
        </section>

        <section>
          <BillboardText text="Getting to know the Users" />
          <BodyText text="Discovering the path to the solution involved merging the significant touchpoints in the offline and online means of completing mobile transactions since the processes are similar.
          </br></br>The usage flows similar but Users are more inclined to use Mobile apps because it takes significantly longer to complete transactions via USSD when they don’t know the codes beforehand." />
        </section>

          <section>
            <Subheader text="Users" />
            <BodyText text="The primary users were identified to be existing financial apps users who need an alternative method to complete their transactions when offline or when they have poor internet coverage." />
          </section>

          <section>
            <Subheader text="Needs" />
            <BodyText text="I understood that they want to (initiate and) complete transactions when they don’t have internet access. Another Important thing for them was quick access to a list of supported transactions and corresponding USSD codes" />
          </section>
      

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

export default transition(SeamlessUSSD);
