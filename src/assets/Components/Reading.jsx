import { useState } from 'react'
import styles from "../Styles/styles.scss"

function Reading ({book_title}) {

  return (
    <>
        {
            book_title?
            <p><span><p>Reading</p></span>The Design of Everyday Things</p> :
            <p><span><p>Doomscrolling</p></span>Tiktok</p>
        }
    </>
  )
}

export default Reading;

