import { useEffect, useRef, useState } from 'react'

function BillboardText({text, onClick, link}){

  return(
    <>
        <h1 className={link? 'custom-hover casestudy_billboardtext casestudy_billboardtext_link' : 'casestudy_billboardtext'} onClick={onClick}>{text}</h1>
    </>
  )
}

export default BillboardText;
