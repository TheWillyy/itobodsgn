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

function APIConf(){
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
            role:'Art Direction, Brand Design, Web Design',
            type:"Art Direction & Brand Design",
            duration:"11 Months",
            title:"Leading Art Direction for the Pioneer Edition of API Conference Lagos 2024."
        }}
        />

        <ImgLarge src="https://res.cloudinary.com/dhlkiskhn/image/upload/v1717766208/apiconf_cover.png" alt="APIConf Cover"/>

        <section>
          <BillboardText text="200:OK!"/>
          <BodyText
              text="API Conference Lagos 2024 is a tech convention that brought together tech professionals, industry leaders, and innovators to explore the latest advancements in API technology. 
                    In its Pioneer Edition, it featured interactive workshops, live demos, and insightful discussions across various sectors in modern technology.
              </br></br> To bring the conference to life, We crafted a Flexible Visual Identity for it, that not only stands out, but also powerfully communicates the conference's purpose.
              </br></br> The work comprised of its striking logo mark, easily identifiable colour scheme, familiar brand voice, user-friendly and accessibility standard website, and physical merchandise for use in social media marketing campaigns and physical networking opportunities.
              "
            />
        </section>

        <section>
          <Subheader text="Discovering People"/>

          <BodyText
              text="
              Getting to know our audience by figuring out what makes them interested to join the community and attend the conference and follow-up events.
              <ul>
                <li>Web Technology (API) Executors, Managers and Communities</li>
                <li>Tech Industry Leaders</li>
              </ul>"
          />
        </section>

        <section>
        <Subheader text="What Were Their Needs?"/>
          <BodyText
              text="Tuning into what attendees were really looking for to make sure they got the most out of the event.
              <ul>
                <li>Opportunities to engage with potential clients, collaborators, or mentors.</li>
                <li>User-friendly conference website with easy navigation for all-in-one conference details.</li>
                <li>Media exposure and PR opportunities for industry leaders to reinforce their brand's influence.</li>
                <li>Exhibitor space or sponsorship opportunities to showcase offerings.</li>
              </ul>"
          />

          <Subheader text="How did we measure the success of APIConf?"/>
          <BodyText
              text="
              To gauge the success of our attendee conversion and repeat attendance efforts, we looked at how many new attendees we brought in and how many chose to return from the previous event. By tracking registration numbers and gathering feedback from post-event surveys, we got a clear picture of what was working and where we could improve.
              </br></br>
              For sponsorships and partnerships, we focused on the number and quality of collaborations, and we measured their impact by tracking things like partner referrals, sponsor-driven registrations, and social media engagement. To check on brand awareness and community building, we monitored social media activity and participation in our online spaces, which gave us a sense of our reach and how engaged our audience was even after the event ended."
          />

        </section>


        <section>
          <Subheader text="My Responsibilities"/>

          <BodyText
              text="
              To be successful in the project we needed to be clear on what roles I embodied. In summary, they were:
              <ul>
                <li>Breakdown and Management of Timeline and Deliverables</li>
                <li>Brand Identity Design (Logo, Colours, Visual Assets, Brand Voice and Tone)</li>
                <li>Design and Documentation of v1 and v2 of Websites</li>
                <li>Event Space Design</li>
                <li>Merchandise Design</li>
              </ul>"
          />
        </section>


        <section>
          <BillboardText text="What we achieved"/>
          <Subheader text="Early Concepts" />

          <Subheader text="Solutions" />
          <BodyText
              text="
                <li>I created a strong, easily identifiable brand identity with brand guidelines for contributors on the team to work with.</li>
                <li>We designed and documented the website and web interactions to aid ticketing and provide detailed information about the conference.</li>
                <li>We improved the Existing website (V1) to evolve with the visual brand identity.</li>
                <li>Crafted Custom Visual physical assets tailored to event venue specifications. Stage, Backdrops, etc.</li>
                <li>Creation of Template Tags to leave attendees to customise their identification, which provided networking opportunities and served as an icebreaker.</li>
                <li>Experimentation with Mixed Reality powered stickers, in collaboration with <a href='https://' >Joshua Omobola </a> </li>
              </ul>"
          />
        </section>


        <section>
          <Subheader text="What we Struggled with" />
          <BodyText
              text="
                <li>Volunteering. There were very few hands, which was understandable, and we made this easier with better time management.</li>
                <li>Handling last minute changes. There wasn't a straightforward way to solve this, we just had to work faster :).</li>
                <li>We improved the Existing website (V1) to evolve with the visual brand identity.</li>
                <li>V1 had sleek design but not simple enough to adapt to specific changes (name length, etc).</li>
                <li>Collaboration with external team members and alignment on sizing and size specifications for physical items (Printers, etc).</li>
              </ul>"
          />
        </section>

        <BillboardText text="2000+ registrations, 600+ attendees. 16 awesome sessions and workshops, and 23 amazing speakers! See you again soon!" />

        {/* <ImgLarge src="https://res.cloudinary.com/dhlkiskhn/image/upload/v1727961509/My%20Portfolio/0xHuntBot%20Section.gif" alt="shots of section" /> */}

      
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

export default transition(APIConf);
