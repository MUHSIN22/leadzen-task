import React from 'react'
import InformationSlideCard from './Information Slide card/InformationSlideCard';
import './Information.scss'

export default function Information() {
    return (
        <section className="information-section">
            <div className="information-section-wrapper">
                <h1>From Information to Intelligence</h1>
                <div className="information-video-slide-wrapper">
                    <div className="information-video-slide">
                        <InformationSlideCard/>
                        <InformationSlideCard/>
                        <InformationSlideCard/>
                        <InformationSlideCard/>
                        <InformationSlideCard/>
                    </div>
                </div>
                <ul>
                    <li className="information-slider-dot dot-active"></li>
                    <li className="information-slider-dot"></li>
                    <li className="information-slider-dot"></li>
                    <li className="information-slider-dot"></li>
                    <li className="information-slider-dot"></li>
                </ul>
            </div>
        </section>
    )
}
