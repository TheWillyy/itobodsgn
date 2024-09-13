import { useState } from 'react'
import styles from "../Styles/styles.scss"

function Reading ({book_title}) {

  return (
    <>
        {
            book_title?
            <p><span>Reading</span>The Design of Everyday Things</p> :
            <p><span>Doomscrolling</span>Tiktok</p>
        }
    </>
  )
}

export default Reading;

