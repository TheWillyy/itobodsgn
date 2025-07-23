import { useEffect, useRef, useState } from 'react'
import { Link, useNavigate } from "react-router-dom"
import transition from '../../transitions.jsx'
import styles from "../Styles/styles.scss"
import Button from '../Components/Button.jsx'
import WorkItem from '../Components/WorkItem.jsx'
import NowPlaying from '../Components/NowPlaying.jsx'
import Navbar from '../Components/Navbar.jsx'
import Reading from '../Components/Reading.jsx'
import StickyNote from '../Components/StickyNote.jsx'
import linkedin from '../Media/Icons/linkedin-logo.svg'
import dribbble from '../Media/Icons/dribbble-logo.svg'
import layers from '../Media/Icons/layers-logo.svg'
import pfp from "../Media/Images/pfp.webm"
import pfp2 from "../Media/Images/pfp.gif"
import resume from "../Media/Images/resume.jpeg"
import footervid from "../Media/Videos/0523 footer.mp4"
import photoshop from "../Media/Images/Photoshop.png"
import illustrator from "../Media/Images/Illustrator.png"
import resumefile from "../Media/Williams Eni Resume.pdf"
import figma from "../Media/Images/Figma.png"
import principle from "../Media/Images/PrincipleApp.png"
import ae from "../Media/Images/Aftereffects.png"
import rive from "../Media/Images/Rive.jpeg"


function Home(){
    const [extendedBioVisible, setExtendedBioVisible] = useState(true);
    const [intropfpVisible, setIntropfpVisible] = useState(false);
    const [introresumeVisible, setIntroResumeVisible] = useState(false);
    const [introvidVisible, setIntrovidVisible] = useState(false);
    const [introVidPosition, setIntroVidPosition] = useState({ x: 0});
    const [mailCopied, setMailCopied] = useState(false);
    
    useEffect(()=>{

        const changeVidPosition = (event) => {
            setIntroVidPosition({ x: (event.clientX)});
        };    

        document.addEventListener('mousemove', changeVidPosition);

        return () => {
          document.removeEventListener('mousemove', changeVidPosition);
        };
    },[]);

    const navigate = useNavigate()

    const disappearReset = () =>{
        setIntropfpVisible(false);
    }
    const disappearResetSetTimeout = () =>{
        setTimeout(disappearReset, 2000);
    }

    const mailcopytimeout = () => {
        setMailCopied(false)
    }

    const copyToClipboard = () => {
        navigator.clipboard.writeText("williams.eitobo@gmail.com")
        //   .then(() => {
        //     alert('copied!');
        //   })
          .catch(err => {
            console.error('Failed to copy text: ', err);
          });

        setMailCopied(true)
        setTimeout(mailcopytimeout, 2000)
    }
    
    const scrollToTopIntro = () => {
        setExtendedBioVisible(false)
        window.scrollTo({
          top: 0,
          behavior: "smooth",
        })
    }

    return(
    <>
        <div className='homepage'>
            <div className='intro'>

                {window.innerWidth < 500 ? <img src={pfp2} className={intropfpVisible? "pfp pfp_anim" : "pfp" } alt="a short looping animation of williams' face" loading="lazy"/> :
                <video src={pfp} alt="a short looping animation of williams' face" className={intropfpVisible? "pfp pfp_anim" : "pfp" } loading='lazy' muted autoPlay loop playsInline type="video/mp4" height="auto" width="auto" poster={pfp2} ></video>
                }

                <div className='bio_text_container'>

                    <h1><span className='intro_name custom-hover' onMouseEnter={()=>{setIntropfpVisible(true)}} onMouseLeave={()=>{setIntropfpVisible(false)}} >Williams Eni</span>&mdash;Digital Product and Interaction Designer based in Lagos, Nigeria.</h1>

                    <div className={`extended_bio_text_container ${extendedBioVisible ? '' : 'hidden' }`}>
                        <h1>For over 5 years, I have gained pleasure from crafting incredible visual experiences in Product/UX and Graphic design
                            with Early-stage Startups, Collectives, Communities, Non-profits and Individuals using tools like (<span><img src={figma} alt="figma" /></span>, <span><img src={photoshop} alt="photoshop" /></span> & <span><img src={illustrator} alt="illustrator" /></span>) and (<span><img src={principle} alt="principle" /></span>, <span><img src={ae} alt="After Effects" /></span> & <span><img src={rive} alt="rive" /></span>) for Interaction Design and Animation.
                            <br/>I'm open to join Product Design Teams or Collaborate with you on creative web and mobile experiences. (even a chat too. feel free, hmu 😉)
                        </h1>
                    </div>

                    <h2 className='read_more custom-hover' onClick={()=>{
                        extendedBioVisible? scrollToTopIntro() : setExtendedBioVisible(true);
                    }}>{extendedBioVisible? 'Read Less':'Read More'}</h2>
                </div>

                <div className='cta_container'>
                    <div className='cta_buttons'>
                    <img src={resume} alt="a screenshot of williams' resume" className={introresumeVisible? "pfp_resume pfp_anim" : "pfp_resume"} />
                        <Button onClick={()=>{window.open(resumefile, "_blank")}} onMouseEnter={()=>{setIntroResumeVisible(true)}} onMouseLeave={()=>{setIntroResumeVisible(false)}} text='See My Resume' alt="download resume" name="download" />
                        <Button onClick={()=>{window.open("https://linkedin.com/in/williamseni", "_blank")}} iconsrc={linkedin} alt="linkedin button" name="linkedin" />
                        <Button onClick={()=>{window.open("https://dribbble.com/thewillyy", "_blank")}} iconsrc={dribbble} alt="dribbble button" name="dribbble" />
                        <Button onClick={()=>{window.open("https://layers.to/itxbo", "_blank")}} iconsrc={layers} alt="layers button" name="layers" />
                    </div>
                    <p>Updated 1 Jul</p>
                </div>
            </div>

            <div className='work'>   
                
                <WorkItem coverimg="https://res.cloudinary.com/dhlkiskhn/image/upload/q_auto:eco/v1717885433/faffa77f-59d6-4a35-b327-8022c576dd8d.png"
                    onClick={()=>{navigate("/work/InDriver")}} 
                    titleSm='Indriver (No Affiliation)'
                    titleLg='Improving User Adoption on InDriver'
                    type="Product/UX Design"
                    year="2021"
                />   

                <WorkItem coverimg="https://res.cloudinary.com/dhlkiskhn/image/upload/v1729339844/My%20Portfolio/SeamlessUSSD/cover_ussd.png"
                    titleLg="Helping Fintech Apps Complete Transactions Offline"
                    titleSm="SeamlessUSSD"
                    type="Product/UX Design"
                    year="2024"
                    onClick={()=>{navigate("/work/SeamlessUSSD")}} 
                />

                <WorkItem coverimg="https://res.cloudinary.com/dhlkiskhn/image/upload/q_auto:eco/v1718274157/My%20Portfolio/Workout%20Tracker/workout_cover.png"
                    type="Product/UX Design"
                    year="2023"
                    titleLg="Keeping track of Workout Routines with Ease"
                    titleSm="Workout Logger"
                    onClick={()=>{navigate("/work/WorkoutTracker")}} 
                />    

                <WorkItem coverimg="https://res.cloudinary.com/dhlkiskhn/image/upload/v1717766208/apiconf_cover.png"
                    type="Art Direction & Brand Design"
                    year="2024"
                    titleSm="API Conference Lagos"
                    titleLg='Leading Art Direction for the Pioneer Edition of API Conference Lagos 2024'
                    onClick={()=>{navigate("/work/APIConf2024")}}
                />

                <WorkItem coverimg="https://res.cloudinary.com/dhlkiskhn/image/upload/q_auto:eco/v1718280479/My%20Portfolio/portfolio_cover.png" 
                    titleSm='itobo.xyz (shameless plug, duh)'
                    titleLg='Portfolio Website for Williams Eni'
                    type="Web Design (UI, Motion & Dev)"
                    year="2024"
                    onClick={()=>{navigate("/work/Itobodotxyz")}}
                />            
            </div>

            <div className='writing'>
                <section className='work_history'>
                    <p className='writing_title'>Professional Work History</p>
                    <p><span>Now</span>Open to New Opportunities</p>
                    <p><span>Now</span>Creative Product & Interaction Designer &#x2192; DraftOne, WW</p>
                    <p><span>2021 - 2024</span>Product Designer &#x2192; TCI, UK</p>
                    <p><span>2022 - 2023</span>Founding Product Designer &#x2192; SourceMyGadgets, NG</p>
                    <p><span>2019</span>UI Designer &#x2192; Malon Global Tech, NG</p>
                </section>

                <section className='literature'>
                    <p className='writing_title'>Literature</p>
                    <a href="https://bootcamp.uxdesign.cc/imagining-immersive-design-319279ccd696" target='_blank'><span>2022</span>[Medium] Imagining Immersive Design &#x2197; </a>
                    <a href="https://medium.com/design-bootcamp/deconstructing-constraints-in-figma-ad77d1774ad7" target='_blank'><span>2022</span>[Bootcamp] Deconstructing Constraints in Figma &#x2197; </a>
                    <a href="https://uxdesign.cc/prototyping-with-figma-interactions-228dbc82fe00" target='_blank'><span>2020</span>[UXDesign.cc] Prototyping with Figma &#x2197; </a>
                </section>
                
                <section>
                    <p className='writing_title'>Resources</p>
                    <a href="https://www.notion.so/Heuristic-Evaluation-Report-Template-cada949af7264ffba51308813dc1546c" target='_blank'>Heuristic Evaluation Report Template &#x2197; </a>
                    <a href="https://www.notion.so/DSC-UI-UX-Design-Study-Group-ce9f1b9e8ec740daa7d33fff315dec07" target='_blank'>DSC UI/UX Study Group Starter Resources &#x2197; </a>
                </section>
                
                <section>
                    <p className='writing_title'>Honorable Mentions and Featured Work</p>
                    <a href="techmoonshot.com/2024/07/15/api-conference-lagos-2024-debuts-as-nigerias-first-dedicated-api-event" target='_blank'>[Mention] API Conference Lagos 2024 Debuts as Nigeria’s First Dedicated API Event - By Techmoonshot &#x2197; </a>
                </section>
            </div>

            <div className='work2'>

                <StickyNote text="
                    <ul>
                    <li><b>Todo:</b></li>
                        <li>Survive the horrors</li>
                        <li>Complete 15 Days UI Components</li>
                        <li>Experiment Graphic Design Styles</li>
                    </ul>
                "
            />

                <div className='dump_link custom-hover' onClick={()=>{navigate("/dump")}}>
                    <div className='dump_thumbnail_outer'>
                        <div className='title_lg'>
                            <h2>archived work.</h2>
                        </div>
                        <div className='dump_thumbnail_inner'>
                            <img src="https://layers-uploads-prod.s3.eu-west-2.amazonaws.com/15115b8c-e230-48b3-8299-6d1a8ebaafba-App-Folder.gif" alt="" />
                            <img src="https://cdn.dribbble.com/users/3236646/screenshots/20374192/media/7b51317be6866d66ad55c7ebd710674e.gif" alt="" />
                            <img src="https://cdn.dribbble.com/users/3236646/screenshots/20331823/media/c337005f5e4e70a71d8306b31e81ea59.gif" alt="" />
                            <img src="https://cdn.dribbble.com/users/3236646/screenshots/19763625/media/40cdff10bc97d46ac5209be7be032dba.gif" alt="" />
                        </div>
                    </div>

                    <p className='title_sm'>#dump</p>
                </div>
            </div>

            <footer>
                <div className='footer_info'>
                    <div className='activity'>
                        <NowPlaying songTitle='' artistsName=''/>
                        <Reading book_title="The Design of Everyday Things"/>
                    </div>

                    <div className='credits'>
                        <video
                            playsInline muted autoPlay loop type="video/mp4"
                            src={footervid}
                            className={`credits_video  ${introvidVisible? "credits_video_reveal" : ""}`}
                            style={{
                                transform:`translateX(${
                                    // (introVidPosition.x < window.screen.width/2? -introVidPosition.x/4 : introVidPosition.x/4)
                                    ((introVidPosition.x - (window.screen.width/2))/8)
                                }px)`
                            }}
                            ></video>
                        <p>{mailCopied? "Mail Copied!": "Designed and Developed by the Stellar Team (Me)"}</p>
                    </div>

                    <div className='links'>
                        <a href="https://linkedin.com/in/williamseni" target="blank">LinkedIn &#x2197;  </a>
                        <a href="https://layers.to/itxbo" target="blank">Layers &#x2197;  </a>
                        <a href="https://are.na/williams-eni" target="blank">Arena &#x2197;  </a>
                        <a href="https://dribbble.com/thewillyy" target="blank">Dribbble &#x2197;  </a>
                        <a href="https://twitter.com/itxbo" target="blank">Twitter &#x2197;  </a>

                        <p>&#xa9; Williams Eni / itobo.xyz</p>
                    </div>
                </div>

                <div className='email_lg' 
                    onClick={()=>{
                        copyToClipboard()
                    }}
                    onMouseEnter={()=>{
                        setIntrovidVisible(true);
                        // document.querySelectorAll(".credits_video")[0].play()
                    }}  
                    onMouseMove={()=>{
                        // changeVidPosition(this);
                    }}
                    onMouseLeave={()=>{
                        setIntrovidVisible(false);
                        // document.querySelectorAll(".credits_video")[0].stop()
                    }}>
                        
                    <svg width="100%" height="100%" viewBox="0 0 1277 131" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M0.736209 1.9308H21.35L24.4421 69.662H25.9145L31.2152 1.9308H44.7615L50.0622 69.662H51.5346L54.6267 1.9308H75.2405L65.5226 105H42.4056L38.4301 54.4961H37.1049L33.1294 105H10.0124L0.736209 1.9308ZM78.5684 1.9308H99.1822V105H78.5684V1.9308ZM104.31 1.78356H124.924V87.0365H141.857V105H104.31V1.78356ZM145.147 1.78356H165.761V87.0365H182.694V105H145.147V1.78356ZM185.836 1.9308H206.45V105H185.836V1.9308ZM221.149 1.78356H253.395L264.438 104.853H243.824L241.468 79.3799H232.487L230.278 104.853H209.664L221.149 1.78356ZM234.106 61.4165H239.849L237.787 36.8271H236.315L234.106 61.4165ZM267.653 1.9308H294.451L300.488 69.662H301.961L307.85 1.9308H334.501V105H315.654L317.863 37.7105H316.537L307.997 105H294.304L285.764 37.7105H284.439L286.647 105H267.653V1.9308ZM392.699 38.4467H372.086V25.9312C372.086 21.0722 369.877 18.4219 366.196 18.4219C362.515 18.4219 360.453 21.0722 360.453 25.9312V32.8516C360.453 39.0357 361.926 41.2443 373.411 46.6923L378.417 48.9009C389.313 53.9071 392.994 60.9747 392.994 77.0241V79.3799C392.994 96.6072 382.981 106.472 365.901 106.472C348.969 106.472 339.545 96.9017 339.545 79.3799V68.4841H360.159V80.9996C360.159 85.8586 362.368 88.5089 366.196 88.5089C370.024 88.5089 372.233 85.8586 372.233 81.1468V73.6375C372.233 67.4534 370.613 65.392 360.012 60.2385L354.417 57.7354C343.373 52.582 339.84 45.2199 339.84 29.1705V27.4036C339.84 10.0291 349.263 0.458388 365.901 0.458388C382.834 0.458388 392.699 10.3236 392.699 27.4036V38.4467ZM397.934 94.6931C397.934 87.7727 401.468 83.7972 408.389 83.7972C415.015 83.7972 418.843 87.92 418.843 94.8403C418.843 101.761 415.162 105.736 408.389 105.736C401.468 105.736 397.934 101.761 397.934 94.6931ZM461.932 19.747H444.999V41.9805H461.637V59.944H444.999V87.0365H462.373V105H424.385V1.78356H461.932V19.747ZM466.372 1.9308H486.986V105H466.372V1.9308ZM541.145 1.78356V19.747H525.98V104.853H505.366V19.747H490.347V1.78356H541.145ZM544.303 27.2564C544.303 9.14565 554.61 0.458388 570.659 0.458388C587.003 0.458388 597.605 9.44013 597.605 27.2564V79.5272C597.605 97.4907 587.003 106.472 570.659 106.472C554.61 106.472 544.303 97.6379 544.303 79.5272V27.2564ZM564.917 25.9312V80.9996C564.917 86.5948 567.862 88.6562 570.954 88.6562C574.193 88.6562 576.991 86.5948 576.991 80.9996V25.9312C576.991 20.1888 574.193 18.4219 570.954 18.4219C567.862 18.4219 564.917 20.1888 564.917 25.9312ZM602.398 1.9308H627.576C644.656 1.9308 654.374 11.0598 654.374 27.4036V28.1398C654.374 43.0112 646.865 50.6678 639.356 51.5513V53.0237C647.012 53.7599 656.288 62.8889 656.288 77.7603V79.3799C656.288 95.5765 645.687 105 627.871 105H602.398V1.9308ZM623.012 19.8943V43.3057H627.282C631.994 43.3057 633.76 41.2443 633.76 35.9436V27.4036C633.76 22.1029 631.994 19.8943 627.282 19.8943H623.012ZM623.012 61.2692V87.0365H627.724C632.583 87.0365 634.497 84.8279 634.497 79.3799V69.073C634.497 63.6251 632.435 61.2692 627.576 61.2692H623.012ZM660.055 27.2564C660.055 9.14565 670.362 0.458388 686.411 0.458388C702.755 0.458388 713.356 9.44013 713.356 27.2564V79.5272C713.356 97.4907 702.755 106.472 686.411 106.472C670.362 106.472 660.055 97.6379 660.055 79.5272V27.2564ZM680.668 25.9312V80.9996C680.668 86.5948 683.613 88.6562 686.705 88.6562C689.945 88.6562 692.742 86.5948 692.742 80.9996V25.9312C692.742 20.1888 689.945 18.4219 686.705 18.4219C683.613 18.4219 680.668 20.1888 680.668 25.9312ZM784.85 32.8516V90.5703C784.85 93.0734 786.47 94.6931 788.384 94.6931C790.151 94.6931 791.77 93.0734 791.77 90.5703V44.3364C791.77 30.3485 781.905 24.3115 763.5 24.3115C745.095 24.3115 735.082 30.3485 735.082 44.3364V85.8586C735.082 107.798 743.77 113.835 766.739 113.835V130.031C733.757 130.031 717.855 116.779 717.855 86.5948V41.3916C717.855 21.3667 737.585 8.2622 763.5 8.2622C789.267 8.2622 808.998 21.3667 808.998 41.3916V87.4782C808.998 98.9631 800.458 106.472 788.531 106.472C777.93 106.472 769.684 100.73 769.684 92.3372V91.3065H768.359C766.592 100.73 761.733 106.472 755.107 106.472C747.009 106.472 742.15 97.7852 742.15 83.061V49.0482C742.15 39.183 747.745 31.8209 755.402 31.8209C761.586 31.8209 766.298 36.5326 768.359 43.8947H769.684V32.8516H784.85ZM769.684 51.5513C768.653 48.9009 766.592 47.2813 764.383 47.2813C761.439 47.2813 759.524 49.7844 759.524 53.4654V81.5886C759.524 85.2696 761.439 87.92 764.236 87.92C766.445 87.92 768.653 86.3003 769.684 83.3555V51.5513ZM834.237 25.784V80.9996C834.237 86.0058 836.74 88.5089 839.685 88.5089C843.071 88.5089 846.311 85.4169 846.311 78.791V62.1527H839.685V48.7537H866.925V104.853H852.642V94.6931H851.317C848.961 102.35 841.894 106.472 834.531 106.472C824.519 106.472 813.623 98.3741 813.623 79.3799V27.2564C813.623 8.99841 823.93 0.311148 839.979 0.311148C856.176 0.311148 866.925 9.44013 866.925 27.2564V43.7475H846.311V25.784C846.311 20.0415 843.366 18.2746 840.274 18.2746C837.182 18.2746 834.237 20.0415 834.237 25.784ZM871.718 1.9308H898.516L904.553 69.662H906.025L911.915 1.9308H938.566V105H919.719L921.927 37.7105H920.602L912.062 105H898.369L889.829 37.7105H888.504L890.712 105H871.718V1.9308ZM953.475 1.78356H985.721L996.764 104.853H976.15L973.795 79.3799H964.813L962.604 104.853H941.99L953.475 1.78356ZM966.432 61.4165H972.175L970.113 36.8271H968.641L966.432 61.4165ZM999.979 1.9308H1020.59V105H999.979V1.9308ZM1025.72 1.78356H1046.34V87.0365H1063.27V105H1025.72V1.78356ZM1068.14 94.6931C1068.14 87.7727 1071.68 83.7972 1078.6 83.7972C1085.22 83.7972 1089.05 87.92 1089.05 94.8403C1089.05 101.761 1085.37 105.736 1078.6 105.736C1071.68 105.736 1068.14 101.761 1068.14 94.6931ZM1114.63 25.784V80.9996C1114.63 86.5948 1117.57 88.5089 1120.67 88.5089C1123.76 88.5089 1126.7 86.5948 1126.7 80.9996V57.4409H1147.32V79.3799C1147.32 97.3434 1136.72 106.472 1120.37 106.472C1104.32 106.472 1094.02 97.6379 1094.02 79.3799V27.2564C1094.02 9.14565 1104.32 0.311148 1120.37 0.311148C1136.72 0.311148 1147.32 9.44013 1147.32 27.2564V49.3426H1126.7V25.784C1126.7 20.1888 1123.76 18.2746 1120.67 18.2746C1117.57 18.2746 1114.63 20.1888 1114.63 25.784ZM1151.96 27.2564C1151.96 9.14565 1162.27 0.458388 1178.32 0.458388C1194.66 0.458388 1205.26 9.44013 1205.26 27.2564V79.5272C1205.26 97.4907 1194.66 106.472 1178.32 106.472C1162.27 106.472 1151.96 97.6379 1151.96 79.5272V27.2564ZM1172.58 25.9312V80.9996C1172.58 86.5948 1175.52 88.6562 1178.61 88.6562C1181.85 88.6562 1184.65 86.5948 1184.65 80.9996V25.9312C1184.65 20.1888 1181.85 18.4219 1178.61 18.4219C1175.52 18.4219 1172.58 20.1888 1172.58 25.9312ZM1210.06 1.9308H1236.86L1242.89 69.662H1244.36L1250.25 1.9308H1276.91V105H1258.06L1260.27 37.7105H1258.94L1250.4 105H1236.71L1228.17 37.7105H1226.84L1229.05 105H1210.06V1.9308Z" fill="#D9D9D9"/>
                    </svg>
                </div>

            </footer>
        </div>
    </>
  )
}

export default transition(Home)
