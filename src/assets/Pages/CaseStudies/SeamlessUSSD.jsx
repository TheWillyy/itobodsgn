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
            title:"Helping Fintech Apps Complete Transactions Offline",
            contributors:"Williams Eni, Emmanuel Akinde"
        }}
        />

        <ImgLarge src="https://res.cloudinary.com/dhlkiskhn/image/upload/v1729339844/My%20Portfolio/SeamlessUSSD/cover_ussd.png" alt="SeamlessUSSD cover"/>

        <section>
          {/* <BillboardText text="Connecting without the Internet"/> */}
          <BodyText
              text="In Nigeria and similar emerging markets, unreliable internet connectivity creates significant barriers to digital financial inclusion. 
              </br></br>Users frequently encounter situations where they initiate mobile banking transactions but cannot complete them due to poor network conditions—indicated by 'E' (EDGE) connectivity or complete network unavailability."
            />
        </section>
        <ImgLarge src="https://res.cloudinary.com/dhlkiskhn/image/upload/v1729273502/My%20Portfolio/SeamlessUSSD/ussd_tweet.png" alt="SeamlessUSSD cover"/>
          
        <section>
          <BodyText text="Through contextual inquiries with 45 participants across Lagos, Abuja, and Port Harcourt, we identified users aged 25-45 who conduct 8-15 transactions monthly and experience connectivity issues 40% of the time during peak hours. These frequent transactors needed seamless transaction completion regardless of connectivity and quick access to USSD codes without memorization.
          " />
          {/* <BodyText text="Discovering the path to the solution involved merging the significant touchpoints in the offline and online means of completing mobile transactions since the processes are similar.
            </br>The usage flows are similar, but users are more inclined to use Mobile apps because it takes significantly longer to complete transactions via USSD when they don’t know the codes beforehand." /> */}
          <BodyText text="<b>Primary User Profile</b>
            <ul>
              <li><b>Age range:</b> 25–45 years</li>
              <li><b>Transaction frequency:</b> 8–15 monthly</li>
              <li><b>Connectivity issues:</b> 40% of peak usage time</li>
              <li><b>Experience level:</b> Familiar with mobile banking concepts</li>
            </ul>

            <b>Core User Needs</b>
            <ul>
              <li><b>Seamless transaction completion</b> regardless of connectivity</li>
              <li><b>Quick access to USSD codes</b> without memorization</li>
              <li><b>Confidence</b> in transaction security and completion</li>
            </ul>"
          />
          <Subheader text="The core insight: Mobile banking users cannot seamlessly complete financial transactions when internet connectivity is poor or unavailable, creating frustration and financial barriers." />
        </section>
          
        <section>
          <BillboardText text="Solution Strategy" />
          <BodyText text="Rather than building an entirely new system, we focused on preserving existing user flows while providing offline alternatives. The strategic approach involved two complementary features that maintained users' mental models while offering reliable fallback mechanisms." />
          <BodyText text="
              <b>Core Solution Components</b>
                <ul>
                  <li>
                    <b>Contextual USSD Generation</b><br>
                    When connectivity issues arise, the system automatically generates bank-specific USSD codes with pre-populated user data. This preserves the transaction flow users expect while providing immediate copy or dial options at the moment of failure.
                  </li>
                  <br>
                  <li>
                    <b>Offline Transaction Library</b><br>
                    A curated collection of common transactions with dynamic USSD code generation. Users can input variables like amounts and recipient details before code generation, eliminating the cognitive burden of remembering complex sequences that can stretch to 30 characters.
                  </li>
                </ul>"
          />
        </section>
        <ImgLarge src="https://res.cloudinary.com/dhlkiskhn/image/upload/q_auto:eco/v1729339844/My%20Portfolio/SeamlessUSSD/copy_ussd.png" alt="SeamlessUSSD cover"/>

        <section>
          <Subheader text="Technical Implementation" />
          <BodyText text="The architecture balanced functionality with security requirements, implementing encrypted local storage for user preferences and real-time connectivity monitoring with graceful degradation. The interface design prioritized clear visual hierarchy during error states, ensuring offline alternatives were prominently displayed when connectivity failed." />
          <BodyText text="
            <b>Key Technical Features</b>
              <ul>
                <li><b>Encrypted storage</b> of non-sensitive user preferences</li>
                <li><b>Client-side validation</b> of generated USSD sequences</li>
                <li><b>Smooth transitions</b> between online and offline modes</li>
                <li><b>High contrast indicators</b> for network status</li>
              </ul>" />
        </section>
        <ImgLarge src="https://res.cloudinary.com/dhlkiskhn/image/upload/q_auto:eco/v1729272560/My%20Portfolio/SeamlessUSSD/flow_without_ussd.png" alt="SeamlessUSSD cover"/>

        <section>
          <BillboardText text="What did this Change?"/>
          <Subheader text="Results & Impact" />
          <BodyText
              text="Early testing revealed significant improvements across key metrics. Transaction completion rates improved by 25%, while user retention during connectivity issues increased by 40%. Perhaps most importantly, offline transactions required only 30% additional time compared to online equivalents, demonstrating that the backup solution didn't significantly impact user efficiency."
            />
        </section>
        <ImgLarge src="https://res.cloudinary.com/dhlkiskhn/image/upload/q_auto:eco/v1729272560/My%20Portfolio/SeamlessUSSD/flow_with_ussd.png" alt="SeamlessUSSD cover"/>

        <section>
          <Subheader text="Constraints and Future Vision" />
          <BodyText text="The solution operates within several technical constraints that shaped our implementation approach. Users must have their bank-connected SIM card in the same device, and functionality depends on USSD service availability across different networks. Regulatory compliance with CBN mobile banking guidelines and PCI DSS requirements influenced many architectural decisions." />
          <BodyText text="
              <b>Future Roadmap Opportunities</b>
                <ul>
                  <li><b>SMS-based transaction confirmations</b> for additional reliability</li>
                  <li><b>Offline-first architecture expansion</b> to core banking features</li>
                  <li><b>Partnership integration with fintech aggregators</b> for cross-platform compatibility</li>
                  <li><b>Multi-country expansion</b> for similar connectivity-challenged markets</li>
                </ul>" 
              />
          <BodyText text="This project demonstrates how thoughtful design can transform infrastructure limitations into opportunities for innovation, creating more inclusive financial services that work for everyone, regardless of connectivity conditions." />
        </section>
        <ImgLarge src="https://res.cloudinary.com/dhlkiskhn/image/upload/q_auto:eco/v1729272561/My%20Portfolio/SeamlessUSSD/options.png" alt="SeamlessUSSD cover"/>


        <section>
          <Subheader text="Potential Challenges" />
          <BodyText text="The major potential challenge is ensuring that USSD services remain updated and functional, and to see to this, we will work closely with banks to ensure their USSD services are regularly updated and functional across different regions." />
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
