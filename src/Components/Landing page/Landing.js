import React from 'react'
import DemoButton from '../Demo button/DemoButton'
import DemoCard from './Demo Details Card/DemoCard'
import './Landing.scss'

export default function Landing() {
    return (
        <section className="landing-page">  
            <div className="landing-page-wrapper">
                <div className="landing-text-content">
                    <h1 className="landing-title">Making Data Smarter</h1>
                    <p className="landing-paragraph">The Most Intelligent AI Powered Real-time <br /> Prospecting Engine. </p>
                    <div className="demo-landing">
                        <DemoButton/>
                        <div className="demo-details-section">
                            <DemoCard
                                text="Real Time Leads"
                                icon={1}
                            />
                            <DemoCard
                                text="Criteria Based Searches "
                                icon={2}
                            />
                            <DemoCard
                                text="Accurate & Verified Data "
                                icon={3}
                            />
                        </div>
                    </div>
                </div>
                <div className="landing-image-section">
                    <img className="cloud-image" src="/images/cloud.png" alt="" />
                    <img className="flash-image first-flash" src="/images/flash.png" alt="" />
                    <img className="flash-image second-flash" src="/images/flash.png" alt="" />
                    <img className="rocket-image" src="/images/fly on rocket.png" alt="" />
                </div>
            </div>
        </section>
    )
}
