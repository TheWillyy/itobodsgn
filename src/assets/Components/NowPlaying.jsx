import { useState } from 'react'
import styles from "../Styles/styles.scss"
import spinningvinyl from "../Media/Videos/spinning vinyl.webm"
import spinningvinyl2 from "../Media/Videos/spinning vinyl.gif"

function NowPlaying ({songTitle='', artistsName=''}) {

  return (
    <>
        <div className='nowplaying'>
            <video src={spinningvinyl} alt="a spinning vinyl animation" muted playsInline loop autoPlay poster={spinningvinyl2} ></video>
            <div>
                <p>{songTitle || "Deep Brown Noise"}</p>
                <p>{artistsName || "Trust Me"}</p>
            </div>
        </div>
    </>
  )
}

export default NowPlaying
