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

function Coducate(){
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
            duration:"2 Months",
            title:"Ending the 'Code on Paper' Era in Nigerian Education",
            contributors:"Williams Eni, Ali-Brown Julius"
        }}
        />

        <ImgLarge src="https://res.cloudinary.com/dhlkiskhn/image/upload/v1768565449/My%20Portfolio/coducate/coducate01.png" alt="coducate cover"/>
        <section>
          {/* <BillboardText text="Connecting without the Internet"/> */}
          <BodyText
              text="Learning Computer Science in a nigerian university will usually mean that you wrote code on paper during exams, then lecturers spent hours manually grading syntax errors. There is very little transparency and accountability in this process. 
              <br><br>We built a system where lecturers create and monitor tests in real-time, students write actual code that compiles, and admins manage everything from one dashboard." 
            />
        </section>

        <section>
          <BillboardText text="Discovery"/>
          <BodyText
              text="We interviewed 18 students and 3 lecturers across three Nigerian universities to understand the pain points of paper-based pseudocode exams.
                    <h3>Key Findings</h3>
                    <ul>
                      <li>Students find paper pseudocode frustrating—no syntax checking, no way to test logic, and grading feels arbitrary</li>
                      <li>Lecturers spend 6-8 hours grading 100+ scripts, struggling with handwriting and manually tracing through logic</li>
                      <li>The current process wastes time for everyone while failing to actually test whether students understand how code works</li>
                      <li>Both groups want a better way but are stuck with outdated assessment methods</li>
                    </ul>" 
            />
        </section>
        <ImgLarge src="https://res.cloudinary.com/dhlkiskhn/image/upload/v1768565850/My%20Portfolio/coducate/coducate04.png" alt="coducate cover"/>
        <ImgLarge src="https://res.cloudinary.com/dhlkiskhn/image/upload/v1768565450/My%20Portfolio/coducate/coducate05.png" alt="coducate presentation"/>
          
        <section>
          <Subheader text="Nigerian CS students need a way to write and test actual code during assessments instead of paper-based pseudocode" />
          <BodyText text="The current system doesn't reflect real programming work, wastes lecturer time on manual grading, and gives students no feedback on whether their solutions actually work" />
        </section>
          
        <section>
          <BillboardText text="Solution Strategy" />
          <Subheader text="Competitive Analysis" />
          <BodyText text="We looked at 'Codility' and 'HackerRank', but they're built for corporate hiring with features universities don't need, and pricing models that don't work for Nigerian budgets. 
          <br><br>'Google Classroom' handles assignment submission but has no code execution environment. Existing education platforms assume reliable internet and power—deal-breakers for Nigerian infrastructure. 
          <br><br>We built specifically for Nigerian university constraints: unstable power, spotty internet, shared computer labs, and the assumption of zero-budget departments."
          />
      

          <Subheader text="Ideation" />
          <BodyText text="
          <h3>We created three sections of the platform.</h3>
            <ul>
              <li>Lecturer Dashboard for easy test creation, time limits, and live monitoring showing each student's progress with suspicious activity flagging</li>
              <li>Student Portal with clean code editor (syntax highlighting, autocomplete), test cases to validate answers, and persistent timer</li>
              <li>Admin Panel for managing all accounts and platform analytics</li>
            </ul>"
          />

          <BodyText text="
          <h3>Users' Journeys and Why They Matter to Them</h3>
            <ul>
              <li>Students:</br> Log in → see dashboard with courses → click on course → view available tests → start test → write code in editor with syntax highlighting → run → submit </br> no more guessing if their logic works or waiting weeks for results</li>
              <li>Lecturers:</br> Log in → create new test with questions → set time limits and rules → publish to students → monitor live progress → auto-grade → export results </br> turning 6-8 hours of grading into a few clicks</li>
              <li>Admins:</br> Log in → view all users and accounts → manage users and accounts </br> keeping everything running without constant firefighting</li>
              <li>Everyone gets what they need without the chaos—clear paths from start to finish with no lost work, wasted time, or confusion</li>
            </ul>"
          />
          <ImgLarge src="https://res.cloudinary.com/dhlkiskhn/image/upload/v1770249383/My%20Portfolio/coducate/coducate_flow.png" alt="coducate flow"/>

          <Subheader text="Iteration" />
          <BodyText text="We tried to webcam monitoring but put the idea on hold becaus of concerns with quality of internet bandwidth. 
          <br>Pivoted to behavior-based detection instead: Detecting how many times the students lost focus and only sharing their screen. Tested with 45 students—3% false positive rate, and lecturers felt confident without being invasive. This pivot was critical: 5/6 pilot lecturers agreed to abandon paper with behavior monitoring vs. 1/6 with webcams."
          />
        </section>
        <ImgLarge src="https://res.cloudinary.com/dhlkiskhn/image/upload/v1768565850/My%20Portfolio/coducate/coducate03.png" alt="SeamlessUSSD cover"/>

        <section>
          <BillboardText text="Expected Outcomes & Takeaway" />
          <Subheader text="Core Features" />
          <BodyText text="Piloting with 3 universities and 500 students next semester. Success metrics: 80%+ students complete exams without technical issues, lecturers reduce grading time by 60% (from 6-8 hours to 2-3 hours), and 70%+ prefer this over paper. Tracking completion rates, grading time per test, and support tickets for reliability." />
          
          <Subheader text="Key Takeaway" />
          <BodyText text="The win was understanding lecturers weren't avoiding digital tools because they preferred paper—they just needed solutions that addressed real concerns about cheating and reliability. 
          <br>By building efficient monitoring alongside student features and designing for Nigerian infrastructure realities, we gave them confidence to switch. Students code like actual developers, lecturers save hours, and CS education finally catches up to how programming is actually done." />
        </section>
        <ImgLarge src="https://res.cloudinary.com/dhlkiskhn/image/upload/v1768565435/My%20Portfolio/coducate/coducate_cover.png" alt="SeamlessUSSD cover"/>      

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

export default transition(Coducate);
