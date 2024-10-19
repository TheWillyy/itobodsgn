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

function InDriver(){
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
            year:'2021',
            role:'Product Designer',
            type:"UX/Product Design",
            duration:"3 Weeks",
            title:"Improving User Adoption on InDriver"
        }}
        />


        <ImgLarge src="https://res.cloudinary.com/dhlkiskhn/image/upload/v1717885433/faffa77f-59d6-4a35-b327-8022c576dd8d.png" alt="Cover image of shots of redesigned indriver app"/>

        <section>
          <BillboardText text="Sharing a Market with Transport Giants"/>
          <BodyText
              text="InDriver was introduced to Nigeria in August 2019 and has already connected more than 6,000 drivers in Lagos, competing side by side with Uber and Bolt, the existing prominent ride hailing services in Nigeria. 
              <br/><br/>The fares are always lower than its competitors, passengers who use the app pay on average 20% less than other prominent hailing services. However, the attractive negotiability of fares has not been enough to have a large chunk of users in its market, InDriver has not had huge enough adoption compared to the others."
          />
        </section>
        {/* <ImgSmall img1src="https://res.cloudinary.com/dhlkiskhn/image/upload/q_auto:eco/v1715739827/My%20Portfolio/jgcqhr4vprapeu2rpr4u.jpg" img1alt="fromt view of various yellow taxi cabs in lagos state" img2src="https://res.cloudinary.com/dhlkiskhn/image/upload/v1715739832/My%20Portfolio/uefuczcbxdmg003e6dvb.jpg" img2alt="side view of a yellow taxi in lagos state, the taxi is in motion"/> */}

        <section>
          <BillboardText text="What Issues Affect the Adoption and Usage of InDriver Among Commuters?"/>
          <BodyText
              text="I began by considering safety and trust as potential concerns. Numerous safety breaches have been reported by users of Bolt and Uber in Nigeria; however, there have been significantly fewer incidents reported by InDriver users.
              Could this be due to InDriver’s relatively small user base or perhaps the platform's less polished interface?<br/><br/>However, we needed to investigate further to validate these assumptions."
          />
        </section>

        {/* <ImgLarge src="https://res.cloudinary.com/dhlkiskhn/image/upload/q_auto:eco/v1715739832/My%20Portfolio/ec0aoiz4wshl1z1dkstl.png" alt="image of the modals to book a ride on the current and proposed redesign if the indriver app, side by side"/> */}
        


        <section>
          <Subheader text="Heuristic Evaluation"/>
          <BodyText
              text="I did a Heuristic Evaluation to find and tackle any superficial usability issues within the application.
              <br>
              The problems discovered in this phase were:
              <ul>
                <li>Even after rides have been completed, the Ride History remained empty at random times and is a setback on integrity as long as security is considered.</li>
                <li>Unauthorized users have the ability to accept rides and/or give feedback on ride requests.</li>
              </ul>"
          />
        </section>


        <section>
          <Subheader text="Competitive Analysis"/>
          <BodyText
              text="The goal of this phase was to compare InDriver’s core features with those of its two main competitors. This comparison would provide insights into where InDriver stands in terms of feature completeness or where it has a competitive edge. Additionally, the analysis would help identify opportunities for improvement by suggesting or including essential features that may have been overlooked.
              </br></br>The study uncovered the need for clear distinction between Driver and passenger onboarding in the application since both are handled in the same application. It also revealed that trip history was missing, which could pose a problem in tracking past trips and drivers in support evidence cases"
          />
        </section>

        <ImgLarge src="https://res.cloudinary.com/dhlkiskhn/image/upload/q_auto:eco/v1725959334/My%20Portfolio/ab12c45b-6b6b-49ef-86ad-4c7e74c58f02.png" alt="competitive analysis summary" divstyle={{height: 'auto'}}/>

        <section>
          <Subheader text="App Store Reviews"/>
          <BodyText
              text="With Appstore Reviews being an important source of user feedback from users who have actually used the application, I went through critical (2 stars and below) reviews on the application on Google Play Store and discovered that: 
            <br>
            <ul>
              <li>A sizeable number of people encountered issues with <b>geolocation and matching</b> with drivers </li>
              <li>Some drivers <b>inappropriately contact riders</b> outside the confines of transporting them to their destinations </li>
              <li>Inactive customer support systems and centers. </li>
            </ul>"
          />
        </section>
        <ImgLarge src="https://res.cloudinary.com/dhlkiskhn/image/upload/q_auto:eco/v1715739831/My%20Portfolio/nk7zusjh8yo8pupxahw4.png" caption="top critical reviews of the app on app store and google play store" alt="top critical reviews of the app on app store and google play store"/>

        
        <section>
          <Subheader text="User Interviews"/>
          <BodyText
              text="I also spoke with drivers and riders (i.e passengers) to clearly understand their usage contexts, patterns, and pain points. 
              There were five (5) Informal User Interview sessions with two (2) Riders (i.e. Passengers) and then three (3) Drivers on separate InDriver trips.
              
              <br><br>
              For recruiting participants for this study, there had to be a filter to obtain better quality in insights and they were:

              <ol>
              <li>The participant should be Nigerian or Residing in Nigeria.</li>
              <li> Must be aged 18 or older.</li>
              <li> Should have used InDriver and completed two rides at least twice in the past month.</li>
              </ol>"
          />
        </section>
        <ImgLarge src="https://res.cloudinary.com/dhlkiskhn/image/upload/q_auto:eco/v1725886396/My%20Portfolio/cf39439b-2e88-477e-a6b2-143efff17e61.png" alt="sticky notes for user responses clustered into related issues" divstyle={{height: 'auto'}}/>


        <section>
          <Subheader text="Insights from Interviews"/>
          <BodyText
              text="I was exposed to these findings:
              <br>
              <ul>
                <li>Despite the affordability and flexibility of prices on the side of passengers (riders) and the low commission on the side of the drivers, Drivers make a relatively lower income while using InDriver than other services.</li>
                <li>There's also a case where the cost of a journey may exceed the agreed fare, diminishing the profit that can be made by the driver.</li>
              </ul>"
          />
        </section>

        <ImgLarge src="https://res.cloudinary.com/dhlkiskhn/image/upload/q_auto:eco/v1715739830/My%20Portfolio/oynrx6nkkzi8leb4re9n.png" alt="projected user personas"/>
        
        <section>
          <BillboardText text="Recommendations"/>

          <BodyText 
            text="I recommended these solutions: 
            <ul>
              <li>Provision of physical customer support centers for cases when reporting an issue via email to customer support may not suffice.</li>
              <li>In-app calling. This way, it is easier to preserve rider anonymity.</li>
              <li>Improving customer support and how driver misconduct is handled.</li>
              <li>Quick options for reporting based on the most frequent occurrences of misconduct.</li>
              <li>Suggesting that riders tip their drivers for trips that take longer than expected.</li>
              <li>Visual cues for driver and rider location</li>
            </ul>
            "
          
          />

          <BodyText
            text="
            Given the common problems people face with using InDriver, which are as follows:
            <ul>
              <li>The automated support system is unresponsive.</li>
              <li>Some drivers contact riders outside the app inappropriately.</li>
              <li>Some drivers change trip fares when they arrive at the pickup locations after they have been agreed upon.</li>
              <li>Profit from ride fares reduces as trips get longer because the agreed prices do not change.</li>
              <li>Taking too much time to find available drivers and other GPS issues.</li>
            </ul>
            
            Users rarely receive support when facing issues such as locating drivers or dealing with inappropriate driver behavior. Additionally, fixed fares can negatively impact drivers' profits, especially when trips take longer than expected.
            "
          />
        </section>

        <section>
          <Subheader text={"Provision of physical customer support centers for cases when reporting an issue via email to customer support may not suffice."} />
          <BodyText text="Since there is a limit to the customer-related issues that can be solved by virtually contacting support, a physical support center, which is presently unavailable in Nigeria, will be important for handling more serious customer reports as there is closer human contact."/>
        </section>
        
          <Subheader text="In-app calling to easily ensure rider anonymity." />
          <ImgLarge src="https://res.cloudinary.com/dhlkiskhn/image/upload/q_auto:eco/v1715739828/My%20Portfolio/fcn8acsvpqljlk9ytps6.png" alt="screenshot showing in app calling feature"/>

        <section>
          <Subheader text="Improving customer support and driver misconduct handling." />
          <BodyText text="One way may be to suspend the account of the defaulting driver if the payment confirmation does not match the agreed fare and the responsiveness of the virtual customer service systems could better solve this."/>
        </section>

        <section>
          <Subheader text="Quick options for reporting based on the most frequent occurrences of misconduct." />
        </section>
          <ImgLarge src="https://res.cloudinary.com/dhlkiskhn/image/upload/q_auto:eco/v1715739832/My%20Portfolio/fzxjm4ihqmxwean6r0gj.png" alt="Screen showing quick support options"/>

        <section>
          <Subheader text="Suggesting that riders tip their drivers for trips that take longer than expected." />
          <BodyText text="Quick options for riders to leave a tip for their drivers and prompts for drivers to confirm the receipt. The confirmation action was included in case the tipping metrics need to be monitored."/>
        </section>
          <ImgLarge src="https://res.cloudinary.com/dhlkiskhn/image/upload/q_auto:eco/v1715739832/My%20Portfolio/e1wt6kc6nlsqbyf2cbbr.png" alt="screen showing tip"/>

        <section>
          <Subheader text="Visual cues for driver and rider location" />
          <BodyText text="Although this may be best handled as an engineering issue but using visual cues to indicate available drivers close to the searching rider (probably car icons on the map) alongside providing appropriate feedback with why there may be a delay in finding drivers for their trip."/>
        </section>
          <ImgLarge style={{objectFit:"contain"}} src="https://res.cloudinary.com/dhlkiskhn/image/upload/q_auto:eco/v1715739832/My%20Portfolio/qzhzqsuckkca7drwwko4.gif" alt="screen showing driver location"/>

        <section>
          <BillboardText text="How success was measured" />
          <BodyText text="Although, the tipping rate can only be measured via the live product through an A/B test, it would have been interesting to see the extent to which one modal influences decision-making in this context. "/>
          <Subheader text="The average time taken to complete tasks was cut down by 36.1% (6.6s)" />
        </section>

        <section>
          <BillboardText text="Reflections" />
          <BodyText text="I thoroughly enjoyed booking and taking trips, primarily to engage in conversations with drivers. They were open to sharing their experiences, and for me, this was the most rewarding part of identifying their needs and pain points. 
          </br></br>In conclusion, research often leads to further exploration. I believe that conducting additional usability tests could uncover even more valuable insights."/>
        </section>       

        <section>
          <BillboardText text="Prototype for booking a ride" />
          <BodyText text="Try it out to see how it works." />
          <iframe src='https://www.figma.com/embed?embed_host=notion&url=https%3A%2F%2Fwww.figma.com%2Fproto%2Fegv90JmwJgEWvLjheJzwrF%2FInDriver%3Fnode-id%3D46%253A195%26scaling%3Dscale-down%26page-id%3D1%253A3%26starting-point-node-id%3D46%253A195' />
        </section> 


      
      {/* ------------------------------------------- */}


        <p className='casestudy_thankyou'>Thank you for reading!</p>

        <div className='back-to-top'>
          <h1>Read Next: <br/><span><a href="/work/Bookateria">Making it easier to find and share study material</a></span></h1>
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

export default transition(InDriver);
