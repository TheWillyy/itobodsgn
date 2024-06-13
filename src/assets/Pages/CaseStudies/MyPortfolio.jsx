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

function MyPortfolio(){


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
            year:'2024',
            role:'Art Director',
            type:'UI/Motion Design and Development',
            duration:"1 Month",
            title:"Portfolio Website for Williams Eni"
        }}
        />

        <ImgLarge src="https://res.cloudinary.com/dhlkiskhn/image/upload/v1718280479/My%20Portfolio/portfolio_cover.png" alt="Thumbnail"/>

        <BodyText
            text="I needed a new home for my work. As a designer who tends to wear multiple hats, It’s easy to forget what I have worked on if I don’t promptly document it. I also thought It would feel like a much needed new start. "
        />

        <section>
          <Subheader text="Why did I need this?"/>
          <BodyText
              text="My old means of documenting my work felt volatile. Using a note taker helps me move faster but it left me vulnerable to easily falling into the pit of disorganization. I wanted to drop everything in there.
              It became important to figure out a more structured means of adding new pieces and moving things around in a dedicated corner of the internet."
          />
        </section>

        <BillboardText link
          onClick={()=>{window.open("https://bit.ly/williamseni-portfolio", "_blank")}} 
          text="Old Porfolio Here &#x2197;"
        />

        <section>
          <Subheader text="What were the goals?"/>
          <BodyText
              text="To create a much more improved, easily customizable and personal collection of work. But first, It was important to analyze and evaluate the current portfolio for gaps and improvement areas. 
              It had all of the work, but that seemed a problem because I spent more time on more structured projects than explorations and there needed to be a clear distinction between them. 
              
              </br></br>
              Goals:
              </br>Separate work into case studies, dump and literature.
              </br>Make easily customizable components for each work entry and page.
              </br>Make a personal site that resonates with my skill and character"
          />
        </section>
        <ImgLarge src="https://res.cloudinary.com/dhlkiskhn/image/upload/v1718280471/My%20Portfolio/detail.png" alt="close up shot, detail"/>

        <section>
          <Subheader text="Approach"/>
          <BodyText
              text="I wanted to learn how recruiters scan portfolios nowadays: I watched hours of portfolio reviews, even for enjoyment, I should confess.
              Technical know-how for building modern and stylish interaction and design into the website couldn’t have been compromisable, but I stuck to something simpler.
              Incrementally test with anyone available to evaluate the simplicity and findability of work."
          />
        </section>

        <section>
          <Subheader text="Experiments"/>
          <BodyText
              text="You can tell I loved some elements so much that I kept them from start to finish."
          />
        </section>
        <ImgLarge src="https://res.cloudinary.com/dhlkiskhn/image/upload/v1718280472/My%20Portfolio/exploration.png" alt="explorations and experiments"/>
        <ImgLarge src="https://res.cloudinary.com/dhlkiskhn/image/upload/v1718280474/My%20Portfolio/footer_shot.png" alt="footer shot"/>
      
        <section>
          <Subheader text="Implementation"/>
          <BodyText
              text="I used react.js to build the final design into a working prototype since it is already a skill in my toolbox and to move fast without overcoming a learning curve that may slow down the process. Not that I don’t love challenges, it simply wasn’t necessary this time.
              However, it was lovely to implement animations and micro-interactions as they’re a significant part of my identity in product exploration and design.
              
              </br></br>
              Challenges faced during implementation
              </br>There were many stumbling blocks, however, one of the most notable was navigation and page transition. I wanted to implement a stylized page transition effect but with React.JS, route changing is usually instant and not directly customizable, so I used framer-motion to handle the transition effect, eventually running into the so-called learning curve I avoided."
          />
        </section>

        <BillboardText link
          onClick={()=>{window.open("https://x.com/itxbo/status/1779445608765436409", "_blank")}} 
          text="Reporting my progress and 'Rubberducking' in a twitter thread &#x2197;"
        />

        <section>
          <Subheader text="Conclusion"/>
          <BodyText
              text="I’m glad to be able to put all that is possible into something I love and is a part of me. I believe it was successful because of the incredible people I drew inspiration from and that contributed to its success. Special thanks to you all. I made a supplementary page with a short note.
              </br>This was thrilling."
          />
        </section>

        <ImgLarge src="https://res.cloudinary.com/dhlkiskhn/image/upload/v1718280440/My%20Portfolio/03c451a2-583b-433f-97da-24ac1d3239ff.png" alt="preview image exploration"/>



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

export default transition(MyPortfolio);
