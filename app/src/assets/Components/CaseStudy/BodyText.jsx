import { React, useEffect, useRef, useState } from 'react'

function BodyText({text}){

  return(
    <>
      {/* {text.split('\n').map((line, index) => (
        <p className='casestudy_bodytext'>
            {line}
            <br />
        </p>
      ))} */}

  <p className="casestudy_bodytext" dangerouslySetInnerHTML={{ __html: text }} />
    </>
  )
}

export default BodyText;
