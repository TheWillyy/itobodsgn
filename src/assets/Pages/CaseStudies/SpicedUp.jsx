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

function SpicedUp(){
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
            year:'2020',
            role:'Product Designer',
            type:"Product/UI Design",
            duration:"1 Week",
            title:"Crafting a palatable learning platform for cooking beginners"
        }}
        />

        <ImgLarge src="https://res.cloudinary.com/dhlkiskhn/image/upload/v1717633643/My%20Portfolio/SpicedUp%21/Spiced_Up_Image.png" alt="Cover image"/>
       

        <BodyText
            text="Informal culinary education in a typical Nigerian household is usually provided by an older family member who is pretty comfortable with the duty.

            </br>The internet is a huge network of resources. There is a whole lot to do and to learn on this network ranging from formal or academic content to casual content — the kind of skills picked up just to pass time.
            
            </br>Cooking skill is one of the lot technology can help gain if this typical method is not an option.
            
            </br>Some social or media-sharing platforms usually provide content for learning to cook or trying new recipes. However, most of these platforms provide this content informally despite the intent.
            
            </br></br>“Spiced Up!” allows people interested in trying out or learning to prepare African (Mostly Nigerian) dishes suitable for their dietary preferences in a step-by-step format with adequate information needed to stock up with the ingredients required for the dish.
            
            </br></br>This was my capstone project in Coursera’s UX Designer Specialisation Provided by the University of Michigan."
        />
       
       <section>
          <Subheader text="My Responsibilities"/>
          <BodyText
              text="In order to understand how people interested in cooking learn to cook, their motivations and stumbling blocks, and ideas to solve these problems, I conducted:
              <ul>
                <li> Informal Interviews: To understand how they accomplish these goals, frustrations, and find their way around them. </li>
                <li> Competitive Analysis: To discover the pattern with which already existing systems provide similar functions and how Spiced Up! would match against existing apps. </li>
                <li> Sketches Generation </li>
                <li> Low and High Fidelity Prototypes </li>
                <li> Conducted Remote Usability Tests </li>
              </ul>
              "
          />
        </section>

        <section>
          <Subheader text="Needs Finding"/>
          <BodyText
              text="I conducted User Interviews with 5 participants. The criteria were that they had to have used an existing similar service to either learn to cook or search for new recipes at least once.

                </br>This was to learn how different people source for recipes and how-to-cook content, what problems they face while searching for these, also, what motivates them to share their recipes.
                </br>Some of the Questions asked were:
                <ul>
                <li>When was the last time you cooked your favorite dish on your own?</li>

                <li>How did you learn to prepare this dish?</li>

                <li>The last time you can remember learning to prepare a new dish, can you take me through the process that you used to find and prepare a meal from the recipe?</li>
              </ul>

              Some participants stated how a popular media sharing platform — YouTube is useful to them for finding the videos they need to get the perfect one to learn with because of the vast variety of cooking methods from different uploaders. It also allows them to save the videos for later offline use.
              </br></br>
              While the existence of many videos works, multiple videos of similar meal preparation may exist with different cooking methods which makes it harder to contrast and find specific content.
              </br></br>
              Another problem with this is that there may not be a list of ingredients, and even if there is, the prices may not be listed and this may deter their interest if it is a new recipe to try.
              "
          />
        </section>
        <ImgLarge src="https://res.cloudinary.com/dhlkiskhn/image/upload/v1717633648/My%20Portfolio/SpicedUp%21/Spiced_Up.png" alt="Cover image"/>
        

        <section>
          <Subheader text="What I Learned"/>
          <BodyText
              text="
              <ul>
                <li>It is important for the prices of the ingredients to be included in the recipe’s details.</li>
                <li>Only a minority of Nigerians have uninterrupted internet, so, saving videos for offline use is useful despite the usual popular complete internet connectivity requirement of many mobile apps.</li>
                <li>Grouping similar recipes with different preparation modes can help users on their search for variety.</li>
              </ul>
              "
          />
        </section>

        <section>
          <Subheader text="Scope and Constraints"/>
          <BodyText
              text="
                Some activities like one on one Interviews were not entirely possible to carry out in person due to the pandemic that restricted contact with people.
                </br>
                The proposed system is made for people interested in Nigerian food so, content is expected to be populated with Nigerian Recipes.
                </br>
                It is meant for use on a mobile device and users are required to create an account to access some functions like upload content, save videos, and so on.
              "
          />
        </section>

        <section>
          <Subheader text="Competitive analysis"/>
          <BodyText
              text="
              To discover the pattern with which already existing systems provide similar function, a quantitative competitive analysis was conducted with 5 different apps that provide similar display of recipes.
              </br>
              Spiced Up, against similar applications
              "
          />
        </section>
        <ImgLarge src="https://res.cloudinary.com/dhlkiskhn/image/upload/v1717674301/My%20Portfolio/SpicedUp%21/Stellar_Rayon_Image.png" alt="Cover image"/>

        <section>
          <Subheader text="Sketching"/>
          <BodyText
              text="
              Sketches of pages with core functions.
              "
          />
        </section>
        <ImgLarge src="https://res.cloudinary.com/dhlkiskhn/image/upload/v1717633638/My%20Portfolio/SpicedUp%21/Spiced_Up_1.png" alt="Cover image"/>

        <BillboardText text="High Fidelity Prototype and Proposed Solutions" />

        <section>
          <Subheader text="Price Estimates"/>
          <BodyText
              text="
              In order to help users have a hint of the prices of ingredients, it was proposed that price estimates would be compulsorily added to each ingredient in the recipes while they are being uploaded.
              "
          />
        </section>
        <ImgLarge src="https://res.cloudinary.com/dhlkiskhn/image/upload/v1717633640/My%20Portfolio/SpicedUp%21/Spiced_Up_2.png" alt="Price Estimates"/>

        <section>
          <Subheader text="Advanced Filter"/>
          <BodyText
              text="
              Now, because people can only do as much as their resources can permit, adding a feature that helps with searching for recipes with a filter based on the ingredients they have in their physical pantry will aid proper tailoring of content to needs.
              </br></br>
              Also, some people have expressed how lack of ingredients has held them back from trying to make a meal from a recipe."
          />
        </section>
        <ImgLarge src="https://res.cloudinary.com/dhlkiskhn/image/upload/v1717633640/My%20Portfolio/SpicedUp%21/Spiced_Up_3.png" alt="Advanced Filter"/>

        <section>
          <Subheader text="Step-By-Step cooking"/>
        </section>
        <ImgLarge src="https://res.cloudinary.com/dhlkiskhn/image/upload/v1717633645/My%20Portfolio/SpicedUp%21/Spiced_Up_4.png" alt="Setp by step cooking"/>

        <section>
          <Subheader text="Remote Usability Testing"/>
          <BodyText
              text="
              This test session was conducted with two participants, Male and Female, both in the age ranges of 18–24 over a video and screen sharing service. One of them was a participant in the previous interview. It was done to evaluate the simplicity of navigating to complete core tasks within the app like:
              <ul>
                <li>Searching for a Recipe</li>

                <li>Searching For a recipe with advanced filters</li>

                <li>Navigating to the first step-by-step video in a recipe</li>

                <li>Uploading recipes with videos</li>

                <li>Checking bag for ingredients</li>
              </ul>"
          />
          <BillboardText text="2 out of 2 Participants completed each task without assistance" />
          <BodyText text="Through the course of the tests, I discovered that even with the categories of available recipes to browse (cuisines), the users were more inclined to using the search bar instead — This brought the initiative to add cuisines as options in the search filter." />
        </section>
        <ImgLarge src="https://res.cloudinary.com/dhlkiskhn/image/upload/v1717633641/My%20Portfolio/SpicedUp%21/Spiced_Up_5.png" alt="Case study image"/>

        <section>
          <Subheader text="Explore the Prototype here" />
          <BodyText text="Live Figma Prototype of 'Spiced Up!'" />
          <iframe src='https://www.figma.com/embed?embed_host=notion&url=https%3A%2F%2Fwww.figma.com%2Fproto%2FBF9Gw8wcf2WOtciTxic7h7' />
        </section> 
      
      {/* ------------------------------------------- */}


        <p className='casestudy_thankyou'>Thank you for reading!</p>

        <div className='back-to-top'>
          <h1>Read Next: <br/><span><a href="">Coming soon</a></span></h1>
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

export default transition(SpicedUp);
