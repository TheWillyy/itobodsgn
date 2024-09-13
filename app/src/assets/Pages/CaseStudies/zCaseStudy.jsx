import { useEffect, useRef, useState } from 'react'
import Button from '../../Components/Button.jsx'
import styles from "../../Styles/styles.scss"
import Reading from '../../Components/Reading.jsx'
import CaseStudyInfo from '../../Components/CaseStudy/CaseStudyInfo.jsx'
import ImgLarge from '../../Components/CaseStudy/ImgLarge.jsx'
import BodyText from '../../Components/CaseStudy/BodyText.jsx'
import ImgSmall from '../../Components/CaseStudy/ImgSmall.jsx'
import BillboardText from '../../Components/CaseStudy/BillboardText.jsx'

function CaseStudy(){
    //will have ID
  return(
    <>
    <div className='casestudy'>
        <CaseStudyInfo
            year='2024'
            role='Product Designer'
            title="Ideas are an ocean of something something this is a compilation of Archived works, WIPs"
        />

        <ImgLarge/>

        <BodyText
            text="The necessity of a malicious content detector in the expanding web landscape is paramount for bolstering cybersecurity defenses and safeguarding against the growing array of web-based threats. As the internet becomes increasingly integral to daily life and business operations, the risks posed by malicious actors seeking to exploit vulnerabilities for financial gain, data theft, and disruption of services continue to escalate."
        />

        <ImgSmall/>
 
        <BillboardText text="20% Increase in Sales" />

        <p className='casestudy_thankyou'>Thank you for reading!</p>

        <div className='progress_bar'></div>

    </div>

    </>
  )
}

export default CaseStudy;
