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

function PocketPay(){
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
            year:'2025',
            role:'Product Design',
            type:"Product/UX Design",
            duration:"3 Months",
            title:"Bridging the gap between savings and bill payments",
            contributors:"Williams Eni"
        }}
        />

        <ImgLarge src="https://res.cloudinary.com/dhlkiskhn/image/upload/v1768564900/My%20Portfolio/pocketpay/pocketpaycover.png" alt="Pocketpay image"/>
        <section>
          {/* <BillboardText text="Connecting without the Internet"/> */}
          <BodyText
              text="I led design for PocketPay, a banking app that helps Nigerians organize and manage their personal finances better. The main thing is letting people create pockets for different expenses—rent, bills, savings, whatever—and automate payments where possible, promising to match how they think about finances" 
            />
        </section>

        <section>
          <BillboardText text="The Problem"/>
          <BodyText
              text="People mentally separate their money even though it all sits in one account. 
              There's numerous bills all mentally earmarked but physically mixed together. 
              When bills come due, people have to manually calculate (if they don't have a budgetting tool), remember amounts, and transfer funds. It's exhausting and leads to overspending or missed payments.
              <br><br>Existing apps are great for moving money around, but they didn't often help to organize it. " 
            />
        </section>
        <ImgLarge src="https://res.cloudinary.com/dhlkiskhn/image/upload/v1768564848/My%20Portfolio/pocketpay/pocketpay03.png" alt="Pocketpay image"/>
          
        <section>
          <BodyText text="After talking to 24 people and surveying 156 more across Nigeria, We learned that everyone was already using mental pockets, they just needed the app to reflect it. some people even keep notebooks where they'll write something like 'Prepaid/NEPA: ₦20,000' and cross it out when paid. Another person had three different bank accounts just to keep money separated." />
          <BodyText text="As a secondary benefit, we realized this same pocket concept could work for groups. Roommates splitting rent, friends saving for a trip, family contributions—same organizing principle, just with multiple people contributing to one pocket." />

          <Subheader text="Many digital banking customers cannot split their expenses without manually documenting them, ridding them of a seamless experience" />
        </section>
          
        <section>
          <BillboardText text="Solution Strategy" />
          <Subheader text="The Pocket Concept" />
          <BodyText text="
              Pockets are presented as personal containers you create to keep money for specific purposes. Althous you can automate funding the wallets, they are not for savings. they are made to set money aside to pay for expenses or sort bills. Create a 'Savings' pocket and watch your balance grow separately from spending money. Each pocket is visually distinct so you can tell them apart instantly.
              The core flow is simple: get paid → split money into pockets → bills pay automatically or you get reminders. No more mental tracking."
          />

          <Subheader text="Key Design Decisions" />
          <BodyText text="I designed for automatic bill payments where possible. Link your light pocket to your prepaid meter, and the app can buy tokens automatically when the goal is reached. For bills that can't automate (like market runs), you get smart reminders based on your pocket's due date."
          />
          <BodyText text="The pockets screen shows all your pockets at once with balances clearly depending on if you want them displayed. 
           We also used progress bars for goal-based pockets so you can see savings growing over time."
          />
        </section>
        <ImgLarge src="https://res.cloudinary.com/dhlkiskhn/image/upload/v1768564843/My%20Portfolio/pocketpay/pocketpay04.png" alt="Pocketpay image"/>

        <section>
          <BillboardText text="The Implementation" />
          <Subheader text="Core Features" />
          <BodyText text="Personal pockets came first. Create unlimited pockets, set targets or budgets, schedule recurring splits from your main balance. We added smart notifications: 'Your light bill is due in 3 days, you have ₦20,000' in your 'light bill' pocket. Want to pay now?" />
          <BodyText text="Auto-pay was trickier than expected. We created payment shortcuts—one tap from the notification pays the bill and marks the pocket as settled." />
          <BodyText text="Group pockets were the natural extension. Same interface, but now multiple people can contribute to one pocket. We added contribution tracking, activity feeds to show who paid when." />
        </section>
        <ImgLarge src="https://res.cloudinary.com/dhlkiskhn/image/upload/v1768565223/My%20Portfolio/pocketpay/pocketpay05.png" alt="Pocketpay image"/>

        <section>
          <Subheader text="Testing and Iteration" />
          <BodyText text="Tested with 18 people across three rounds. Early confusion with people thinking pockets were separate bank accounts. We iterated on the interface and messaging to clarify the concept." />
          <BodyText text="Some participants inquired about an 'Auto-split on payday' feature. Users wanted the app to automatically divide incoming salary into pockets based on their setup. This will be a consideration for the future." />
        </section>
        <ImgLarge src="https://res.cloudinary.com/dhlkiskhn/image/upload/v1768566940/My%20Portfolio/pocketpay/pocketpay02.png" alt="Pocketpay image"/>

        <section>
          <BillboardText text="Expected Results"/>
          <Subheader text="Projected Impact" />
          <BodyText text="We're targeting a beta launch with 500 users to validate core assumptions. Success looks like 60%+ creating their first pocket within 24 hours and 40%+ still using it by week 4. We expect users to create 2-3 pockets on average."/>
          <BodyText text="Bill payment completion rates is the key metric. If users with auto-pay enabled hit 85%+ on-time payments, we know the automation is delivering real value."/>
        </section>
        <ImgLarge src="https://res.cloudinary.com/dhlkiskhn/image/upload/v1768566940/My%20Portfolio/pocketpay/pocketpay06.png" alt="Pocketpay image"/>      
        
        <section>
          <BillboardText text="Key Learnings"/>
          <Subheader text="What Worked" />
          <BodyText text="The pocket metaphor clicked instantly. People got it in seconds because it matched how they already thought about money. Prioritizing personal use before group features was the right call. Nail the core problem first, add social later."/>
          
          <Subheader text="What's Next" />
          <BodyText text="Smarter auto-pay integrations with more merchants and service providers. AI-powered spending insights and better goal-setting tools for savings pockets with visual milestones.
          For groups, we're adding automated contribution reminders and recurring splits for people who share regular bills. But it'll always be secondary to personal money management."/>
          <BodyText text="By helping people manage the money they already have, we're setting a foundation for more seamlessness in bill settlement."/>
        </section>
        <ImgLarge src="https://res.cloudinary.com/dhlkiskhn/image/upload/v1768564900/My%20Portfolio/pocketpay/pocketpaycover.png" alt="Pocketpay image"/>      

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

export default transition(PocketPay);
