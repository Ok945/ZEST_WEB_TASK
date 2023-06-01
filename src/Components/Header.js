import React from 'react'
import '../Styles/Header.css'
import Typewriter from 'typewriter-effect'
// import { ReactComponent as SVG } from './path/to/svg.svg';

const Header = () => {
    return (

        <div className="header">

            <div class="inner-header flex">

                {/* <h1>Zest 24</h1> */}
                <img className="Logo" src="./ZestLogowhite1.png" alt="" />
                <img className="Bothimg" src="./bothLogos.png" alt="" />
                <div className="slogan">
                    <Typewriter
                        options={{
                            autoStart:true,
                            loop:true,
                            delay:40,
                            strings:[
                              'GO WITH THE FLOW',
                              "LET'S GO",
                              "CARRY ON THE HERITAGE"  
                            ]
                        }}
                    />
                </div>



            </div>

            {/* <!--Waves Container --> */}
            <div>

                <svg className="waves" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink"
                    viewBox="0 24 150 28" preserveAspectRatio="none" shapeRendering="auto">
                    <defs>
                        <path id="gentle-wave" d="M-160 44c30 0 58-18 88-18s 58 18 88 18 58-18 88-18 58 18 88 18 v44h-352z" />
                    </defs>
                    <g className="parallax">
                        <use xlinkHref="#gentle-wave" x="48" y="0" fill="rgba(255,255,255,0.7)" />
                        <use xlinkHref="#gentle-wave" x="48" y="3" fill="rgba(255,255,255,0.5)" />
                        <use xlinkHref="#gentle-wave" x="48" y="5" fill="rgba(255,255,255,0.3)" />
                        <use xlinkHref="#gentle-wave" x="48" y="7" fill="#fff" />
                    </g>
                </svg>



            </div>
            {/* <!--Waves end--> */}

            {/* </div>
            {/* <!--Header ends--> */}

            {/* <!--Content starts--> */}
            {/* <div className="content flex">
                <p>By.Goodkatz | Free to use </p> */}

        </div>





    )
}

export default Header
