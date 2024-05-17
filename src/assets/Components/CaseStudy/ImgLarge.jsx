import { useEffect, useRef, useState } from 'react'

function ImgLarge({src, alt, caption}){

  return(
    <>
        <div className='casestudy_imglarge'>
            <img src={src} alt={alt} />
        </div>
    </>
  )
}

export default ImgLarge;
