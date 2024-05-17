import { useEffect, useRef, useState } from 'react'

// function CaseStudyInfo({year, role, title}){
  function CaseStudyInfo({props}){

  return(
    <>
    <div className='casestudy_info'>
        <div className='casestudy_info_metadata'>
          <div>
              <p>Year</p>
              <p>{props.year}</p>
          </div>

          <div>
              <p>Type</p>
              <p>{props.type}</p>
          </div>

          <div>
              <p>Role</p>
              <p>{props.role}</p>
          </div>

          {props.duration? 
            <div>
              <p>Duration</p>
              <p>{props.duration}</p>
            </div> : null
          }
        </div>

        <h1>{props.title}</h1>
    </div>

    </>
  )
}

export default CaseStudyInfo;
