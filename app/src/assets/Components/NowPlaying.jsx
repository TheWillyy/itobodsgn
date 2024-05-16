import { useState } from 'react'
import styles from "../Styles/styles.scss"
import spinningvinyl from "../Media/Videos/spinning vinyl.gif"

function NowPlaying ({songTitle='', artistsName=''}) {

  return (
    <>
        <div className='nowplaying'>
            <img src={spinningvinyl} alt="a spinning vinyl animation" />
            <div>
                <p>{songTitle || "Deep Brown Noise"}</p>
                <p>{artistsName || "Trust Me"}</p>
            </div>
        </div>
    </>
  )
}

export default NowPlaying
