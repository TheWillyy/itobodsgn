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

function WorkoutTracker(){

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
          role:'Product Designer',
          duration:"5 Weeks",
          type:'Product Design',
          title:"Keeping track of Workout Routines with Ease"
      }}
      />

      <ImgLarge src="https://res.cloudinary.com/dhlkiskhn/image/upload/v1718274157/My%20Portfolio/Workout%20Tracker/workout_cover.png" alt="cover image" />
      <BodyText
          text="We needed a small, Web-based lightweight application that logs and tracks workout statistics, that will transform into a progressive web application or a cross-platform mobile application."
      />
      <ImgLarge src="https://res.cloudinary.com/dhlkiskhn/image/upload/v1718274158/My%20Portfolio/Workout%20Tracker/Workout_Tracker-1.png" alt="main app" />

      

      <section>
        <Subheader text="Who is it for?"/>
        <BodyText
            text="Fitness Enthusiasts and budding Fitness Enthusiasts, and this will mean they would have some experience with the vocabulary and terminology: “reps”, and “sets” do not sound alien,
            and they are eager to learn new terms and techniques involved in exercising and fitness in general"
        />
      </section>
      <ImgLarge src="https://res.cloudinary.com/dhlkiskhn/image/upload/v1718274160/My%20Portfolio/Workout%20Tracker/Workout_Tracker-5.png" alt="glossary within the application" />

      <section>
        <Subheader text="What do they use now?"/>
        <BodyText
            text="I explored and tested existing applications and workout trackers to discover the simplest of their forms and functions. Top of the list was 'Strong' and 'Hevy'.
            </br>While some of these platforms have features to suggest routines, weights and so on, the intent for this tracker is simply to help users take logs without a paid plan or subscription. "
        />
      </section>


      <section>
        <Subheader text="The Challenge"/>
        <BodyText
            text="To make it easier for fitness enthusiasts and those slowly transitioning into enthusiasts to keep track of their workouts in flexible time (ie: realtime or later). 

            </br></br>
            The goals were to:
            <ul>
              <li>Ensure the tracker is not too different from existing trackers, but more minimalist.</li>
              <li>Make it easy to log multiple sets of workouts in seconds.</li>
              <li>Make it easy for new fitness entusiasts to learn new terms.</li>
            </ul>
            
            </br>To achieve this, we:
            <ul>
              <li>Used minimal Visual elements, even down to colour, keeping it mainly grayscale to imitate pen and whiteboard and marker you’d find in the gym.</li>
              <li>Provided a list of workouts to select from, even helping the user learn routine names.</li>
              <li>Provided a glossary for terms and their definitions.</li>
              <li>Categorised routines by type to keep them organized and neat.</li>
            </ul>"
        />
      </section>
      <ImgSmall img1src="https://res.cloudinary.com/dhlkiskhn/image/upload/v1718274158/My%20Portfolio/Workout%20Tracker/Workout_Tracker-3.png" img2src="https://res.cloudinary.com/dhlkiskhn/image/upload/v1718274164/My%20Portfolio/Workout%20Tracker/Workout_Tracker-4.png" img1alt="tracker" img2alt="dropdown list" />



      <section>
        <Subheader text="Opportunities"/>
        <BodyText
            text="To encourage consistency, I introduced streaks: You begin a streak after logging your workout for 3 consistent days in a row.
            However, this was revised into at least twice a week, because you’re not expected to go to the gym or exercise every day."
        />
      </section>
      <ImgLarge src="https://res.cloudinary.com/dhlkiskhn/image/upload/v1718274161/My%20Portfolio/Workout%20Tracker/Workout_Tracker.png" alt="streaks" />

      <section>
        <Subheader text="Conclusion"/>
        <BodyText
            text="Working alongside a cofounder and my Involvement in functional prototyping with React.JS for this product was an immensely wonderful learning experience. I also learned once again that the one true way to build something loved and usable is to listen and observe true users. I'm excited to share it when it goes live!"
        />
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

export default transition(WorkoutTracker);
