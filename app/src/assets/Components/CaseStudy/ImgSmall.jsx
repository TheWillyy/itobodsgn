import { useEffect, useRef, useState } from 'react'

function ImgSmall({img1src, img2src, img1alt, img2alt, img1caption, img2caption}){

  return(
    <>
      <div className='casestudy_imgsmall'>
        <div>
            <img src={img1src} alt={img1alt} />
        </div>

        <div>
            <img src={img2src} alt={img2alt} />
        </div>
      </div>
    </>
  )
}

export default ImgSmall;
