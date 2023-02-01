import  { React, useState } from "react";
import { AnimationOnScroll } from 'react-animation-on-scroll';
import Button from "@mui/material/Button";
import './newgeneration.css';

function Home6thVideoSection(){
    return(
        <div className="new-generation">
                <div className="container">
                        <div className="generate-div">
                            <AnimationOnScroll animateIn="animate__slideInUp">
                                <h1>New Generation Crypto Exchange and Trading</h1>
                            </AnimationOnScroll>
                            <AnimationOnScroll animateIn="animate__slideInUp">
                                <h1>Platform leading the Web3 Revolution</h1>
                            </AnimationOnScroll>
                            <AnimationOnScroll animateIn="animate__fadeIn">
                                <p>One app. Unlimited possibilities.</p>
                                <Button className="btn01"><a href="https://ncx.cx">Sign Up
                                <svg width="31" height="8" viewBox="0 0 31 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M30.3536 3.48205C30.5488 3.67731 30.5488 3.99389 30.3536 4.18915L27.1716 7.37113C26.9763 7.56639 26.6597 7.56639 26.4645 7.37113C26.2692 7.17587 26.2692 6.85929 26.4645 6.66403L29.2929 3.8356L26.4645 1.00717C26.2692 0.811907 26.2692 0.495327 26.4645 0.300067C26.6597 0.104797 26.9763 0.104797 27.1716 0.300067L30.3536 3.48205ZM-1.90735e-06 3.3356L30 3.3356V4.3356L-1.90735e-06 4.3356V3.3356Z" fill="black"/>
                                </svg>
                                </a>
                                </Button>
                            </AnimationOnScroll>
                        </div>
                        <div className="generate-video">
                            <video 
                                id='ncx-main-video'
                                autoPlay={true}
                                muted={true}
                                loop={true}
                                playsInline={true}
                                // poster={"../src/assets/images/roadmap-bg.png"}
                                >
                                <source src={require('../../../images/ncx-mainvideo.mp4')} type="video/mp4" />
                            </video>
                        </div>
                </div>
            </div>
    )
}
export default Home6thVideoSection;