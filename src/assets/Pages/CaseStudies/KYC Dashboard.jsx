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

function KYCDashboard(){
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
            role:'Product/UX Designer',
            type:"Product/UX Design",
            duration:"1 Week",
            title:"Helping Businesses Manage Customer Verification"
        }}
        />

        <ImgLarge src="https://res.cloudinary.com/dhlkiskhn/image/upload/v1729493698/My%20Portfolio/KYC%20Dashboard/dashboard_cover.png" alt="Dashboard Cover"/>
        <BodyText
            text="
              To design a KYC dashboard for a small business to manage and monitor customer signups and verification, the main goal was to provide a bird's eye view of metrics and trends, with options to manage user data while they are stored securely and following compliance standards.

              </br></br>
              My main assumption was that the dashboard is plugged in to a client-side application to automatically collect data submitted by users/customers.
              </br></br>
              Despite being automated on the client-side in collecting user info and verification documents, it is necessary for the user of the dashboard to be able to control customers who are
              verified and their documents to complete the KYC process.
              </br></br>
              So, I crafted a solution. An organized way of keeping track of signup and verification trends, and a means of verifying KYC documents. Users on the client-side of the connected application will attempt to verify their KYC status by submitting official documents.
            "
        /> 

        <section>
          <BillboardText text="User discovery" />
          <BodyText
              text="
              Firstly, following the assumption, I identified users of the platform. The prospective users of the Dashboard were identified to be Administrators, Compliance Managers (For Applications, Businesses)
              "
          />
        </section>
        {/* <ImgLarge src="https://res.cloudinary.com/dhlkiskhn/image/upload/v1729265799/My%20Portfolio/APIConf/APIconflagos_Twitter_5.jpg" alt="APIConf Cover"/> */}

        <section>
          <Subheader text="Needs" />
          <BodyText
              text="
              To narrow down the control parts of the dashboard, it was necessary to identify the specific needs of the identified users. They are:
              <ul>
                <li>Admins want to see metric details of Signup and User Verification performancs.e</li>
                <li>Admins and Compliance Managers want to manage user database and inspect submitted documents.</li>
                <li>Admins want to monitor the performance of each step in the KYC process.</li>
              </ul>
              "
          />
        </section>
        {/* <ImgLarge src="https://res.cloudinary.com/dhlkiskhn/image/upload/v1729265799/My%20Portfolio/APIConf/APIconflagos_Twitter_5.jpg" alt="APIConf Cover"/> */}
      
        <Subheader text="Problem: Administrators and compliance Managers of authentication powered applications want to monitor signup rates and KYC verification from a central portal." />

        <section>
          <Subheader text="User Goals" />
          <BodyText
              text="
              To show that we achieved user satisfaction, we shall make sure that these goals are met. Users ahould be able to:
              <ul>
                <li>Monitor All User Details Provided on signup</li>
                <li>Analyze New signup Rates.</li>
                <li>* Track drop-off Rate.</li>
                <li>* Monitor Flagged Accounts.</li>
                <li>* Inspect documents.</li>
              </ul>
              "
          />

          <BodyText
              text="
              Nice to haves
              <ul>
                <li>Add/Remove Steps (to Signup)</li>
                <li>Add New Apps to monitors</li>
                <li>Task Management (Show pending admin tasks)</li>
              </ul>
              "
          />
        </section>
        {/* <ImgLarge src="https://res.cloudinary.com/dhlkiskhn/image/upload/v1729265799/My%20Portfolio/APIConf/APIconflagos_Twitter_5.jpg" alt="APIConf Cover"/> */}

        <section>
          <Subheader text="Success Metrics" />
          <BodyText
              text="
                The main metrics for success, while immeasurable are: Visual Clarity and User Details Security
              "
          />
        </section>
        <ImgLarge src="https://res.cloudinary.com/dhlkiskhn/image/upload/v1729493698/My%20Portfolio/KYC%20Dashboard/full_display.png" alt="APIConf Cover"/>
      
        <section>
          <BillboardText text="How I solved the problems" />
          <BodyText
              text="
              To achieve user satisfaction, I tackled the goals directly and came up with these effecctives:
              <ul>
                <li>Provided a clear summary of all metrics.</li>
                <li>Control and monitor accounts and submitted documents, with the ability to flag suspicious accounts.</li>
              </ul>
              "
          />
        </section>

        <section>
          <Subheader text="a bird's eye view of metrics" />
          <BodyText
              text=" With organised cards, the dashboard presents user signup information, with a summarised graph showing the performance trends for daily signups,
              and intuitively, the user can control the display range.
              On the other end, it highlights negative performances, Dropoff rates, Deleted accounts and Flagged Accounts.
              "
          />
        </section>
        <ImgLarge src="https://res.cloudinary.com/dhlkiskhn/image/upload/v1729493697/My%20Portfolio/KYC%20Dashboard/dashboard_metrics.png" alt="APIConf Cover"
        
        caption="This is a short caption describing this image" />

        <section>
          <Subheader text="Controlling account Verifications" />
          <BodyText
              text="I provided admins the ability to preview submitted documents and decide to manually verify or flag the selected account.
              "
          />
        </section>
        <ImgLarge src="https://res.cloudinary.com/dhlkiskhn/image/upload/v1729494509/My%20Portfolio/KYC%20Dashboard/dashboard_review.png" alt="APIConf Cover"
        caption="This is a short caption describing this image" />

      
      {/* ------------------------------------------- */}


        <p className='casestudy_thankyou'>Thank you for reading!</p>

        <div className='back-to-top'>
          <h1>Read Next: <br/><span><a href="/work/InDriver">Tackling usage obstacles on InDriver as a Digital Hailing Service</a></span></h1>
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

export default transition(KYCDashboard);
