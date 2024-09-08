import { useEffect, useRef, useState } from 'react'

function ImgLarge({style, src, alt, caption}){

  return(
    <>
        <div className='casestudy_imglarge'>
            <img style={style} src={src} alt={alt} />
        </div>
    </>
  )
}

export default ImgLarge;
