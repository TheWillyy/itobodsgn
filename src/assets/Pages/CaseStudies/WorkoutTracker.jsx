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
          role:'Product Designer (Lead), Frontend Developer',
          duration:"4 months (Discovery to MVP Launch)",
          type:'Product Design',
          title:"Keeping track of Workout Routines with Ease"
      }}
      />

      <ImgLarge src="https://res.cloudinary.com/dhlkiskhn/image/upload/v1718274157/My%20Portfolio/Workout%20Tracker/workout_cover.png" alt="cover image" />
      <BodyText
          text="The fitness tracking app market is dominated by feature-heavy platforms that often overwhelm new users and lock core functionality behind paywalls. Despite 73% of fitness app users abandoning apps within 30 days, existing solutions continue to prioritize monetization over user experience fundamentals."
      />
      <ImgLarge src="https://res.cloudinary.com/dhlkiskhn/image/upload/v1718274158/My%20Portfolio/Workout%20Tracker/Workout_Tracker-1.png" alt="main app" />

      

      <section>
        <Subheader text="Problem Statement"/>
        <BodyText
            text="Fitness enthusiasts need a simple, accessible way to track their workouts consistently without cognitive overload or subscription barriers, while new fitness users require educational support to build sustainable tracking habits."
        />
      </section>

      <BillboardText text="Research" />

      <section>
        <Subheader text="User Research Methodology"/>
        <BodyText
            text="<ul>
            <li><b>Competitive Analysis:</b> In-depth evaluation of 5 fitness tracking applications</li>
            <li><b>User Interviews:</b> 28 participants across beginner to advanced fitness levels</li>
            <li><b>Contextual Inquiry:</b> Gym observations and workout session shadowing</li>
            <li><b>Survey Research:</b> 157 responses on current tracking methods and pain points</li>
          </ul>"
        />
      </section>

      <section>
        <Subheader text="Discovering The Challenge"/>
        <BodyText
            text="I explored and tested existing applications and workout trackers to discover the simplest of their forms and functions. Top of the list was 'Strong' and 'Hevy'.
            </br>While some of these platforms have features to suggest routines, weights and so on, the intent for this tracker is simply to help users take logs without a paid plan or subscription. 
            "
        />
      </section>

      <section>
        <Subheader text="Primary User Segments"/>
        <BodyText
            text="<ul>
              <li><b>The Committed Tracker (45% of users)</b>
                <ul>
                  <li>2–5 years fitness experience</li>
                  <li>Uses 2–3 different tracking methods currently</li>
                  <li>Values speed and consistency over detailed analytics</li>
                  <li><b>Primary frustration:</b> App complexity interrupting workout flow</li>
                </ul>
              </li>
              <li><b>The Learning Enthusiast (35% of users)</b>
                <ul>
                  <li>6 months – 2 years fitness experience</li>
                  <li>Intimidated by gym terminology and proper form</li>
                  <li>Seeks guidance without overwhelming information</li>
                  <li><b>Primary frustration:</b> Feeling lost with exercise names and techniques</li>
                </ul>
              </li>
              <li><b>The Returning Athlete (20% of users)</b>
                <ul>
                  <li>Previous fitness experience with recent restart</li>
                  <li>Wants to rebuild tracking habits</li>
                  <li>Values simplicity after complex app fatigue</li>
                  <li><b>Primary frustration:</b> Subscription costs for basic features</li>
                </ul>
              </li>
            </ul>
"
        />
      </section>

      <section>
        <Subheader text="Points Discovered"/>
        <BodyText
            text="
              <ul>
                <li><b>Cognitive Load:</b> Average 47 seconds to log a single set in existing apps</li>
                <li><b>Learning Curve:</b> 68% of beginners abandon apps due to unfamiliar terminology</li>
                <li><b>Subscription Fatigue:</b> 84% prefer one-time payment or free alternatives</li>
                <li><b>Workout Interruption:</b> Complex interfaces break exercise flow and focus</li>
              </ul>"
        />
      </section>


      <section>
        <Subheader text="Design Strategy"/>
        <BodyText
            text="We embraced constraint-driven design, optimizing every interaction for the gym environment. The visual design deliberately chose grayscale to mirror the utilitarian gym aesthetic, reducing visual noise. Research showed 67% of users preferred 'invisible' design that didn't compete with workout focus.
              </br></br>The solution centered on rapid set entry with sub-10-second completion targets. Large touch targets accommodated gym usability, gesture-based incrementing enabled quick adjustments, and the system learned from previous sessions to pre-populate likely values.
              </br></br>Educational integration occurred contextually rather than through separate sections. We also defined the terms during exercise selection.
            
              </br></br>
              
              <b>Feature Prioritization Framework</b>
                  <ul>
                    <li><b>Must-Have (MVP)</b>
                      <ul>
                        <li>Quick set logging (target: <10 seconds per set)</li>
                        <li>Exercise library with categorization</li>
                        <li>Basic progress visualization</li>
                        <li>Offline functionality</li>
                      </ul>
                    </li>
                    <li><b>Should-Have (V1.1)</b>
                      <ul>
                        <li>Streak tracking and motivation</li>
                        <li>Exercise technique glossary</li>
                        <li>Workout routine templates</li>
                      </ul>
                    </li>
                    <li><b>Could-Have (Future)</b>
                      <ul>
                        <li>Social features and community</li>
                        <li>Advanced analytics</li>
                        <li>Wearable integration</li>
                      </ul>
                    </li>
                  </ul>
              "
            />
      </section>
      <ImgSmall img1src="https://res.cloudinary.com/dhlkiskhn/image/upload/v1718274158/My%20Portfolio/Workout%20Tracker/Workout_Tracker-3.png" img2src="https://res.cloudinary.com/dhlkiskhn/image/upload/v1718274164/My%20Portfolio/Workout%20Tracker/Workout_Tracker-4.png" img1alt="tracker" img2alt="dropdown list" />

      <section>
        <Subheader text="Results and Impact"/>
        <BodyText
            text="
                  <b>User Adoption Metrics</b>
                  <ul>
                    <li><b>Beta User Retention:</b> 76% weekly active users after 8 weeks</li>
                    <li><b>Logging Speed:</b> Average 12 seconds per set (58% faster than competitors)</li>
                    <li><b>User Satisfaction:</b> 4.7/5 average rating with 89% completion rate on feedback surveys</li>
                  </ul>

                  <b>Behavioral Insights</b>
                  <ul>
                    <li><b>Learning Progression:</b> 82% of beginner users successfully learned 5+ new exercise names within first month</li>
                    <li><b>Consistency Improvement:</b> Users logged workouts 34% more frequently compared to previous tracking methods</li>
                    <li><b>Feature Adoption:</b> Glossary feature used by 91% of new users in first week</li>
                  </ul>

                  <b>Business Impact</b>
                  <ul>
                    <li><b>Development Cost:</b> 60% lower than native app alternatives</li>
                    <li><b>User Acquisition:</b> Organic growth through word-of-mouth, 2.3x referral rate</li>
                    <li><b>Market Positioning:</b> Successfully differentiated from subscription-based competitors</li>
                  </ul>"
            />
      </section>


      <section>
        <Subheader text="Key Learnings"/>
        <BodyText
            text="<ul>
              <li><b>What Worked</b>
                <ul>
                  <li>Constraint-Driven Design: Limitations fostered creativity and focus</li>
                  <li>User-Centered Iteration: Regular testing prevented feature creep</li>
                  <li>Educational Design: Learning integration increased user confidence and retention</li>
                </ul>
              </li>
              <li><b>What We'd Do Differently</b>
                <ul>
                  <li>Earlier User Testing: More prototype validation before development</li>
                  <li>Accessibility Considerations: Better planning for users with disabilities</li>
                  <li>Data Export: Users requested workout data portability from launch</li>
                </ul>
              </li>
            </ul>"
        />
      </section>


      <section>
        <Subheader text="Opportunities"/>
        <BodyText
            text="To encourage consistency, We introduced streaks: You begin a streak after logging your workout for 3 consistent days in a row.
            However, this was revised into at least twice a week, because you’re not expected to go to the gym or exercise every day."
        />
      </section>
      <ImgLarge src="https://res.cloudinary.com/dhlkiskhn/image/upload/v1718274161/My%20Portfolio/Workout%20Tracker/Workout_Tracker.png" alt="streaks" />

      <section>
        <Subheader text="Conclusion"/>
        <BodyText
            text="Constraint-driven design fostered creativity that feature-rich approaches couldn't match. Regular user testing prevented feature creep while maintaining focus on core needs. The project validated that thoughtful design can democratize fitness tracking by removing traditional barriers.
                  </br></br>This foundation now enables expansion into community features, AI-powered form correction, and health platform integration. Most importantly, it demonstrates how understanding fundamental user needs, rather than copying competitor features which creates more engaging experiences serving underserved market segments."
        />
      </section>

      
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

export default transition(WorkoutTracker);
