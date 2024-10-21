import { useEffect, useRef, useState } from 'react'
import BodyText from './BodyText';

function ImgLarge({style, src, alt, caption, divstyle}){

  return(
    <>
        <div className='casestudy_imglarge' style={divstyle}>
            <img style={style} src={src} alt={alt}/>
            <BodyText text={caption}/>
            {/* <p>{caption}</p> */}
        </div>
    </>
  )
}

export default ImgLarge;
