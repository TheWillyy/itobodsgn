import { useEffect, useRef, useState } from 'react'
import Button from '../Components/Button.jsx'
import styles from "../Styles/styles.scss"
import Reading from '../Components/Reading.jsx'
import WorkItem from '../Components/WorkItem.jsx'
import transition from '../../transitions.jsx'
import dumpcoverimg from "../Media/Images/imgplaceholder.png"

function Dump(){
  return(
    <>
    <div className='dump'>
        <div className='casestudy_info'>
            <h1 className='dump_title'>Ideas are an ocean of something something this is a compilation of Archived works, WIPs</h1>
        </div>

        <div className='dump_items'>
          <WorkItem dump coverimg="https://layers-uploads-prod.s3.eu-west-2.amazonaws.com/15115b8c-e230-48b3-8299-6d1a8ebaafba-App-Folder.gif"/>
          <WorkItem dump coverimg="https://cdn.dribbble.com/users/3236646/screenshots/20374192/media/7b51317be6866d66ad55c7ebd710674e.gif"/>
          <WorkItem dump coverimg="https://cdn.dribbble.com/users/3236646/screenshots/20331823/media/c337005f5e4e70a71d8306b31e81ea59.gif" />
          <WorkItem dump coverimg="https://cdn.dribbble.com/users/3236646/screenshots/19763625/media/40cdff10bc97d46ac5209be7be032dba.gif" />
          <WorkItem dump covervid="https://cdn.dribbble.com/userupload/11576658/file/original-60caa92fe850eeda5436d3b1164f8536.mp4" />
          <WorkItem dump covervid="https://cdn.dribbble.com/userupload/11508948/file/original-25d71da8202341c3e4cf8e1fb8cd0697.mp4" />
          <WorkItem dump covervid="https://cdn.dribbble.com/userupload/11914294/file/original-6dc76a97d18da52b6a9646ffb120116c.mp4" />
          <WorkItem dump iframelink="https://twitter.com/i/status/1785754210874937418"/>
          <WorkItem dump />
          <WorkItem dump />
          <WorkItem dump />
          <WorkItem dump />
          <WorkItem dump />
          <WorkItem dump />
          <WorkItem dump />
          <WorkItem dump />
          <WorkItem dump />
          <WorkItem dump />
        </div>

        <p className='casestudy_thankyou'>Thank you for viewing!</p>
    </div>
    {/* //footer */}

    </>
  )
}

export default transition(Dump)
