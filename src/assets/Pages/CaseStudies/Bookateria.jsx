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

function Bookateria(){
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
          onClick={()=>{navigate("/dump")}}
          />

        <CaseStudyInfo props={{
            year:'2021',
            role:'Product Designer, Illustrator',
            type:"Product/UI Design",
            duration:"3 Weeks",
            title:"Making it easier to find and share study material"
        }}
        />

        <ImgLarge src="https://res.cloudinary.com/dhlkiskhn/image/upload/v1717634007/My%20Portfolio/Bookateria/Bookateria_Cover.png" alt="Cover image of shots of bookateria"/>

        <BodyText
            text="A percentage of students study with difficulty understanding concepts making studying itself a chore. Gathering materials shouldn't be difficult when colleagues or course-mates may have these recommended materials for free and available as digital files, eliminating the need for carrying around many books physically.

            </br> <b>Bookateria solves the problem of gathering, organising and sharing recommended texts and study materials for Nigerian students by hosting them online.</b>"
        />

        <section>
          <Subheader text="My Goals"/>
          <BodyText
              text="My goals were to conduct UX Research, Design the Web and Mobile Web Interfaces, Refine the Visual Brand Identity and Craft Illustrations."
          />
        </section>

        <ImgLarge src="https://res.cloudinary.com/dhlkiskhn/image/upload/v1717633561/My%20Portfolio/Bookateria/Cover_2.png" alt="case study image"/>

        <section>
          <Subheader text="Heurisic Evaluation"/>
          <BodyText
              text="I did a Heuristic Evaluation to discover existing usability issues that needed attention.
              <br>
              Also explored by speaking with students to also discover what habits they have with acquiring and sharing academic materials for study and how to leverage these habits to streamline the process of sharing them.
              </br>I found:
              <ul>
              <li>Error Recovery with Uploading Files and Signing Up.</li>
              <li>Difficulty finding files using advanced search options amidst others.</li>
              </ul>
              "
          />
        </section>

        <BillboardText text="What are the habits students have with acquiring study material and how can we streamline the process of sharing them?" />

        <ImgLarge src="https://res.cloudinary.com/dhlkiskhn/image/upload/v1717634656/My%20Portfolio/Bookateria/Bookateria_Group_48.png" alt="case study image"/>

        <section>
          <Subheader text="1:1 Interviews"/>
          <BodyText
              text="I spoke with 5 students about finding and sharing study material and learned that:
            <br>
            <ul>
             <li> Although physical libraries are limited in available textbooks and past questions and they typically contain outdated resources.</li>
             <li> Sharing study material is done via WhatsApp Group Chats – the primary source of information for them.</li>
             <li> There is tendency for shared files to get missing in the myriad of messages that clutter WhatsApp Group Chats.</li>
            </ul>"
          />
        </section>

        <BillboardText text="Recommendations and Proposed Solutions" />
        


        <section>
          <Subheader text={"Compulsory tagging while uploading for easier identification and sectioning when users search for any document."} />
        </section>
          <ImgLarge src="https://res.cloudinary.com/dhlkiskhn/image/upload/v1717634392/My%20Portfolio/Bookateria/Tags_1.png" alt="case study image"/>

        <section>
          <Subheader text="Sharing direct download links to files" />
          <BodyText text="This was imagined to work just like the WhatsApp download button that's visible when a file is shared on WhatsApp."/>
        </section>
        <ImgLarge src="https://res.cloudinary.com/dhlkiskhn/image/upload/v1717633562/My%20Portfolio/Bookateria/Notion_Links.png" alt="case study image"/>

        <section>
          <Subheader text="The Brand" />
          <BodyText text="Bookateria, coined from the words 'Book' and 'Cafeteria', is an endeavour to illustrate the intertwine between Food and Sharing Food, with: Books, Knowledge and Sharing Knowledge.
          I used an illustration of a burger with a bookmark to depict the idea.
          </br>Blue as an elegant colour, complemented with an orange which represents the appeal of food, to further accentuate the quality of a solid resource hub were used to carry the brand identity through colour."/>
        </section>

        <ImgLarge src="https://res.cloudinary.com/dhlkiskhn/image/upload/v1717633559/My%20Portfolio/Bookateria/Notion_Logo.png" alt="case study image"/>
        <ImgLarge src="https://res.cloudinary.com/dhlkiskhn/image/upload/v1717633561/My%20Portfolio/Bookateria/Illustrations_1.png" alt="case study image"/>
        <ImgLarge style={{height:"auto"}} src="https://res.cloudinary.com/dhlkiskhn/image/upload/v1717633559/My%20Portfolio/Bookateria/Identity_from_Notion.png" alt="case study image"/>


        <section>
          <Subheader text="In Conclusion," />
          <BodyText text="Since this is just a small start to the product, I'd like to learn a lot more about usage patterns as it scales so, more quantitative research will be carried out in the future.
          </br> I had a wonderful time especially in creating illustrations on the branding end of the product."/>
        </section>
      
      {/* ------------------------------------------- */}


        <p className='casestudy_thankyou'>Thank you for reading!</p>

        <div className='back-to-top'>
          <h1>Read Next: <br/><span><a href="/work/SpicedUp">Crafting a palatable learning platform for cooking beginners</a></span></h1>
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

export default transition(Bookateria);
