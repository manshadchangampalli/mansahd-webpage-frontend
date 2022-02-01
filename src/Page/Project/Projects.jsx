import React, { useState } from 'react'
import Layout from '../../Components/Layout'
import './Projects.scss'
import Img1 from '../../Assets/images/img1.png'
import Img2 from '../../Assets/images/img2.png'
import Arrow from '../../Assets/images/navImages/Arrow.png'
// import Img from 'react-optimized-image';

function Projects() {
    const [translate,setTranslate] = useState(0)
    // how many projects 
    const elements = 3
    // how long we can translate
    const last = (elements-1)*-400
    // the starting always zero
    const first = 0; 
    // the next button clicked 
    const nextButtonClicked = ()=>{
        if(translate!==last){
            setTranslate(translate -400)
        }
    }
    // the prev button clicked 
    const prevButtonClicked = ()=>{
        if(translate!==first){
            setTranslate(translate + 400)
        }
    }

    
    return (
        <Layout>            
            <div className='project-page'>
                <div className="projectswraper">
                    <img onClick={nextButtonClicked} style={translate===last?{display:"none"}:{}} className='nextButton' src={Arrow} alt="" />
                    <img onClick={prevButtonClicked} style={translate===first?{display:"none"}:{}} className='prevButton' src={Arrow} alt="" />
                    <div className="projects">
                        <div style={{transform:`translateY(${translate}px)`}}  className="allProjects">
                            <img src={Img2} alt="" />
                            {/* <Img src={Img1} /> */}
                            <img src={Img1} alt="img"/>
                            <img src={Img1} alt="img"/>
                        </div>
                    </div>
                </div>
            </div>
        </Layout>
    )
}

export default Projects
