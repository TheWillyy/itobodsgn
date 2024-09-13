import { useEffect, useRef, useState } from 'react'

function ImgLarge({style, src, alt, caption, divstyle}){

  return(
    <>
        <div className='casestudy_imglarge' style={divstyle}>
            <img style={style} src={src} alt={alt}/>
            {/* <p>{caption}</p> */}
        </div>
    </>
  )
}

export default ImgLarge;
