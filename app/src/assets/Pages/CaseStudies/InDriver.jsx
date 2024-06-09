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
            title:"Tackling usage obstacles on InDriver as a Digital Hailing Service"
        }}
        />

        <ImgLarge src="https://res.cloudinary.com/dhlkiskhn/image/upload/v1717885433/faffa77f-59d6-4a35-b327-8022c576dd8d.png" alt="Cover image of shots of redesigned indriver app"/>

        <BodyText
            text="InDriver was introduced to Nigeria in August 2019 and has already connected more than 6,000 drivers in Lagos, competing side by side with Uber and Bolt, the existing prominent ride hailing services in Nigeria. One of the principles of the InDriver service are that cost of booking rides is always lower, passengers who use the app pay on average 20% less than other prominent hailing services.
            <br/><br/>Despite such attractive negotiability of fares enough to have a large chunk of users in its market, InDriver has not had huge enough adoption compared to the others."
        />

        <ImgSmall img1src="https://res.cloudinary.com/dhlkiskhn/image/upload/v1715739827/My%20Portfolio/jgcqhr4vprapeu2rpr4u.jpg" img1alt="fromt view of various yellow taxi cabs in lagos state" img2src="https://res.cloudinary.com/dhlkiskhn/image/upload/v1715739832/My%20Portfolio/uefuczcbxdmg003e6dvb.jpg" img2alt="side view of a yellow taxi in lagos state, the taxi is in motion"/>

        <section>
          <Subheader text="Why?"/>
          <BodyText
              text="I would assume, it is the case of safety. There have been numerous breaches to safety reported by users of Bolt and Uber in Nigeria but not many from InDriver. 
              <br/>Could this also be a result of the relatively small user base or an inauthentic looking interface?"
          />
        </section>

 
        <BillboardText text="What specific issues affect the adoption and usage of InDriver among commuters?" />

        <ImgLarge src="https://res.cloudinary.com/dhlkiskhn/image/upload/v1715739832/My%20Portfolio/ec0aoiz4wshl1z1dkstl.png" alt="image of the modals to book a ride on the current and proposed redesign if the indriver app, side by side"/>

        <section>
          <Subheader text="Heurisic Evaluation"/>
          <BodyText
              text="I did a Heuristic Evaluation to find and tackle any superficial usability problems.
              <br>
              The few problems discovered in this phase were:
              <ul>
              <li>Even after rides have been completed, the Ride History remained empty at random times and is a setback on integrity as long as security is considered.</li>
              <li>Unauthorized users have the ability to accept rides and/or give feedback on ride requests.</li>
              </ul>"
          />
        </section>

        <ImgLarge src="https://res.cloudinary.com/dhlkiskhn/image/upload/v1715739831/My%20Portfolio/nk7zusjh8yo8pupxahw4.png" alt="top critical revies of the app on app store and google play store"/>

        <section>
          <Subheader text="App Store Reviews"/>
          <BodyText
              text="With Appstore Reviews being an important source of user feedback from users who have actually used the application, I went through critical reviews on the application on Google Play Store and discovered that: 
            <br>
            <ul>
              <li>a sizeable number of people encountered issues with <b>geolocation and matching</b> with drivers </li>
              <li>some drivers <b>inappropriately contact riders</b> outside the confines of transporting them to their destinations </li>
              <li> <b>inactive customer support</b> systems and centers. </li>
            </ul>"
          />
        </section>
        
        <ImgLarge src="https://res.cloudinary.com/dhlkiskhn/image/upload/v1715739830/My%20Portfolio/oynrx6nkkzi8leb4re9n.png" alt="projected user personas"/>

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

        <section>
          <Subheader text="Insights from Interviews"/>
          <BodyText
              text="I was exposed to the fact that:
              <br>
              <ul>
              <li>Despite the affordability and flexibility of prices on the side of passengers (riders) and the low commission on the side of the drivers, Drivers make a relatively lower income while using InDriver than other services.</li>
              <li>There's also a case where the cost of a journey may exceed the agreed fare, diminishing the profit that can be made by the driver.</li>
              </ul>"
          />
        </section>
        
        <section>
          <Subheader text="Recommendation"/>
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
              
              Users rarely get any support for errors with locating drivers or inappropriate driver behaviour and fixed fares become a detriment to the drivers' profit when the time taken for a trip is longer than usual.
              "
          />
          <BodyText text="I recommended these solutions:" />
        </section>

        <section>
          <Subheader text={"Provision of physical customer support centers for cases when reporting an issue via email to customer support may not suffice."} />
          <BodyText text="Since there is a limit to the customer-related issues that can be solved by virtually contacting support, a physical support center, which is presently unavailable in Nigeria, will be important for handling more serious customer reports as there is closer human contact."/>
        </section>
        
          <Subheader text="In-app calling. This way, it is easier to preserve rider anonymity." />
          <ImgLarge src="https://res.cloudinary.com/dhlkiskhn/image/upload/v1715739828/My%20Portfolio/fcn8acsvpqljlk9ytps6.png" alt="screenshot showing in app calling feature"/>

        <section>
          <Subheader text="Improving customer support and how driver misconduct is handled." />
          <BodyText text="One way may be to suspend the account of the defaulting driver if the payment confirmation does not match the agreed fare and the responsiveness of the virtual customer service systems could better solve this."/>
        </section>

        <section>
          <Subheader text="Quick options for reporting based on the most frequent occurrences of misconduct." />
          <BodyText text="One way may be to suspend the account of the defaulting driver if the payment confirmation does not match the agreed fare and the responsiveness of the virtual customer service systems could better solve this."/>
        </section>
          <ImgLarge src="https://res.cloudinary.com/dhlkiskhn/image/upload/v1715739832/My%20Portfolio/fzxjm4ihqmxwean6r0gj.png" alt="Screen showing quick support options"/>

        <section>
          <Subheader text="Suggesting that riders tip their drivers for trips that take longer than expected." />
          <BodyText text="Quick options for riders to leave a tip for their drivers and prompts for drivers to confirm the receipt. The confirmation action was included in case the tipping metrics need to be monitored."/>
        </section>
          <ImgLarge src="https://res.cloudinary.com/dhlkiskhn/image/upload/v1715739832/My%20Portfolio/e1wt6kc6nlsqbyf2cbbr.png" alt="screen showing tip"/>

        <section>
          <Subheader text="Visual cues for driver and rider location" />
          <BodyText text="Although this may be best handled and as an engineering issue but using visual cues to denote available drivers close to the searching rider (probably car icons on the map) alongside providing appropriate feedback with why there may be a delay in finding drivers for their trip."/>
        </section>
          <ImgLarge style={{objectFit:"contain"}} src="https://res.cloudinary.com/dhlkiskhn/image/upload/v1715739832/My%20Portfolio/qzhzqsuckkca7drwwko4.gif" alt="screen showing driver location"/>

        <section>
          <Subheader text="How success was measured" />
          <BodyText text="Although the tipping rate can only be measured via the live product through an A/B test it would be interesting to see the extent to which one modal influences decision-making in this context. "/>
          <BillboardText text="The average time taken to complete tasks was cut down by 36.1% (6.6s)" />
        </section>

        <section>
          <Subheader text="Reflections" />
          <BodyText text="I was thrilled with booking and taking trips just to have conversations with drivers. They were open to speaking about their experiences and I reckon it was the best part for me while finding needs and pain points. 
          <br><br>In conclusion, research only breeds more research because I still believe conducting more usability tests could reveal more insights."/>
        </section>       

        <section>
          <Subheader text="Prototype for booking a ride" />
          <BodyText text="Try it out to see how it works." />
          <iframe src='https://www.figma.com/embed?embed_host=notion&url=https%3A%2F%2Fwww.figma.com%2Fproto%2Fegv90JmwJgEWvLjheJzwrF%2FInDriver%3Fnode-id%3D46%253A195%26scaling%3Dscale-down%26page-id%3D1%253A3%26starting-point-node-id%3D46%253A195' />
        </section> 


      
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

export default transition(InDriver);
