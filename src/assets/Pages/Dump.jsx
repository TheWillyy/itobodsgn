import { useEffect, useRef, useState } from 'react'
import { Link, useNavigate } from "react-router-dom"
import Button from '../Components/Button.jsx'
import styles from "../Styles/styles.scss"
import Reading from '../Components/Reading.jsx'
import WorkItem from '../Components/WorkItem.jsx'
import transition from '../../transitions.jsx'
import dumpcoverimg from "../Media/Images/imgplaceholder.png"
import SmoothScroll from '../../SmoothScroll.component.jsx'

function Dump(){

  const navigate = useNavigate()

  return(
    <>
    {/* <SmoothScroll> */}
      <div className='dump'>
          <div className='casestudy_info'>
              <h1 className='dump_title'>Personal experiments 🧪, unfinished work 📂, collaboration projects 🫶🏾 and the archived 🗑️ live here.</h1>
          </div>

          {/* <div className='dump_items dump_test'>
            <WorkItem />
            <WorkItem />
            <WorkItem dump/>
            <WorkItem />
            <WorkItem dump/>
            <WorkItem dump/>
            <WorkItem />
          </div> */}

          <div className='dump_items'>

            <WorkItem comingsoon coverimg="https://res.cloudinary.com/dhlkiskhn/image/upload/v1718206902/010b4a56-6187-429d-8126-30653cefa3b1.png"
              type="UX Design"
              year="2023"
              titleLg="Making it easier to find and share study material"
              titleSm="Workout Logger"
            />

            <WorkItem coverimg="https://res.cloudinary.com/dhlkiskhn/image/upload/v1717634007/My%20Portfolio/Bookateria/Bookateria_Cover.png"
              titleLg="Making it easier to find and share study material"
              titleSm="Bookateria"
              type="Product/UI Design"
              year="2021"
              onClick={()=>{navigate("/casestudies/Bookateria")}} 
            />

            <WorkItem coverimg="https://res.cloudinary.com/dhlkiskhn/image/upload/v1717633643/My%20Portfolio/SpicedUp%21/Spiced_Up_Image.png"
              titleLg="Crafting a palatable learning platform for cooking beginners"
              titleSm="Spiced Up!"
              type="Product/UI Design"
              year="2020"
              onClick={()=>{navigate("/casestudies/SpicedUp")}} 
            />

          </div>

          <div className='dump_items'>
            <WorkItem dump coverimg="https://res.cloudinary.com/dhlkiskhn/image/upload/v1717673453/dash.png" />
            <WorkItem dump coverimg="https://layers-uploads-prod.s3.eu-west-2.amazonaws.com/15115b8c-e230-48b3-8299-6d1a8ebaafba-App-Folder.gif"/>
            <WorkItem dump coverimg="https://cdn.dribbble.com/users/3236646/screenshots/20374192/media/7b51317be6866d66ad55c7ebd710674e.gif"/>
            <WorkItem dump coverimg="https://cdn.dribbble.com/users/3236646/screenshots/20331823/media/c337005f5e4e70a71d8306b31e81ea59.gif" />
            <WorkItem dump coverimg="https://cdn.dribbble.com/users/3236646/screenshots/19763625/media/40cdff10bc97d46ac5209be7be032dba.gif" />
            <WorkItem dump covervid="https://cdn.dribbble.com/userupload/11576658/file/original-60caa92fe850eeda5436d3b1164f8536.mp4" />
            <WorkItem dump covervid="https://cdn.dribbble.com/userupload/11508948/file/original-25d71da8202341c3e4cf8e1fb8cd0697.mp4" />
            <WorkItem dump covervid="https://cdn.dribbble.com/userupload/11914294/file/original-6dc76a97d18da52b6a9646ffb120116c.mp4" />
            <WorkItem dump covervid="https://res.cloudinary.com/dhlkiskhn/video/upload/v1717547823/Kunstraum_2.mp4" />
            {/* <WorkItem dump covervid="https://i.vimeocdn.com/video/1390781534-c5fd7b878aa9b5d6eb6e63607d4d0d21b8a92349882363c23dcc95498a440cd9-d?mw=3700&mh=2255&q=70"/> */}
            {/* <WorkItem dump covervid="https://vimeo.com/686404026"/> */}
          </div>

          <p className='casestudy_thankyou'>Thank you for viewing!</p>
      </div>
    {/* </SmoothScroll> */}
    {/* //footer */}

    </>
  )
}

export default transition(Dump)
