import { useState } from 'react'
import styles from "../Styles/workitem.scss"

function WorkItem({dump, comingsoon, iframelink, dumpLink="", coverimg="", type="", year="", covervid="", titleSm, titleLg, onClick}) {

  return (
    <>

    {dump? 

    (   iframelink?   
        <div className='dump_card custom-hover'>
            <div className='cover_container'>
            <iframe src={iframelink} class="dump_iframe" frameborder="0"></iframe>
            </div>
        </div>
        
        :
    
        <div className='dump_card' onClick={onClick}>
            <div className='cover_container'>

                {covervid? 
                    <video src={covervid}></video>
                :
                coverimg? <img src={coverimg} alt=""/> : '' }

                    <a href={dumpLink}>Source &#x2197;</a>

            </div>
            
            <div className='title_sm'>
                <h5>{titleSm}</h5>
            </div>
        </div>
    )

        :

        <div className='workitem_card custom-hover' onClick={onClick}>
            <div className='cover_container'>

                <div className='title_lg' style={comingsoon? {filter: "blur(0px)", color:"#1F1F1F", opacity: "1", transform: "translateY(-16px)"}: {} }>
                    <h2>{titleLg || "Longer Title"}</h2>
                    {/* cut by ellipsis on height limit */}
                </div>

                {coverimg? <img style={comingsoon? {filter:"blur(24px)"} : {} } src={coverimg} alt="" /> : ''}

                <div className='workitem_desc' style={comingsoon? {bottom:"calc(100% - 48px)", top:"0"}: {} }>
                    <div className='workitem_type'>{type || "Type"}</div>
                    <p>{year || "Year"}</p>
                </div>

            </div>

            <div className='title_sm'>
                <h5>{titleSm || "Title"}</h5>
            </div>
        </div>
    }
    </>
  )
}

export default WorkItem
